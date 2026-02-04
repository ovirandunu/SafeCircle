'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Check, CreditCard, Shield, Lock, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { 
  trackCheckoutStep, 
  trackPlanClick, 
  trackEmailSubmit, 
  trackPaymentAttempt 
} from '@/lib/tracking';
import { createCheckoutSession } from '@/lib/stripe';

type Plan = 'basic' | 'full';

interface PlanDetails {
  name: string;
  price: number;
  description: string;
  features: string[];
}

const plans: Record<Plan, PlanDetails> = {
  'basic': {
    name: 'Basic',
    price: 5,
    description: 'Smartphone only',
    features: [
      'Smartphone activity monitoring',
      'Smart alert notifications',
      'Trusted contact dashboard',
      'Privacy-first design'
    ]
  },
  'full': {
    name: 'Full',
    price: 8,
    description: 'Optional devices',
    features: [
      'Everything in Basic',
      'Smart device integration',
      'Enhanced monitoring',
      'Priority support'
    ]
  }
};

export default function Checkout() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  
  // Validate and get initial plan from URL
  const getValidPlan = (planParam: string | null): Plan => {
    if (planParam && (planParam === 'basic' || planParam === 'full')) {
      return planParam as Plan;
    }
    return 'full'; // Default fallback
  };
  
  // Validate and get initial billing period from URL
  const getValidBillingPeriod = (billingParam: string | null): 'monthly' | 'yearly' => {
    if (billingParam === 'yearly') {
      return 'yearly';
    }
    return 'monthly'; // Default fallback
  };
  
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(getValidPlan(searchParams.get('plan')));
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(getValidBillingPeriod(searchParams.get('billing')));
  const [selectedLifetimeOption, setSelectedLifetimeOption] = useState<'payment' | 'interviews' | null>(null);
  
  // Scroll to top on mount and step changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track checkout step views
    if (step >= 1 && step <= 3) {
      trackCheckoutStep(step as 1 | 2 | 3);
    }
  }, [step, selectedPlan, billingPeriod]);
  
  const [accountData, setAccountData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingZip: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const currentPlan = plans[selectedPlan];
  
  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change with validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setAccountData({...accountData, email});
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  // Validate email before proceeding
  const handleEmailNext = () => {
    if (!accountData.email) {
      setEmailError(t('checkout.account.email.required'));
      return;
    }
    
    if (!validateEmail(accountData.email)) {
      setEmailError(t('checkout.account.email.error'));
      return;
    }
    
    setEmailError('');
    
    // Track email submission
    trackEmailSubmit(accountData.email);
    
    handleNext();
  };
  
  // Calculate price based on billing period (yearly is 20% off)
  const getPrice = () => {
    const monthlyPrice = currentPlan.price;
    if (billingPeriod === 'yearly') {
      return Number((monthlyPrice * 0.8).toFixed(2));
    }
    return monthlyPrice;
  };
  
  const displayPrice = getPrice();
  const yearlyTotal = Number((displayPrice * 12).toFixed(2));

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isProcessing) return;
    
    setIsProcessing(true);
    setPaymentError('');
    
    // Calculate final price
    const finalAmount = parseFloat(
      billingPeriod === 'yearly' 
        ? (getPrice() * 12 / 2).toFixed(2) 
        : (getPrice() / 2).toFixed(2)
    );
    
    // Track payment attempt
    trackPaymentAttempt(selectedPlan, finalAmount);

    try {
      // Create Stripe checkout session and redirect
      const result = await createCheckoutSession(
        selectedPlan,
        billingPeriod,
        accountData.email
      );
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to create checkout session');
      }
      
      // User will be redirected to Stripe - track conversion will happen after webhook
      console.log('Redirecting to Stripe Checkout...');
      
    } catch (error: any) {
      console.error('Payment error:', error);
      setPaymentError(error.message || 'An error occurred during payment processing. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-white min-h-screen py-16 sm:py-20 lg:py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          {/* Progress Steps */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-[32px] mb-10 sm:mb-12 lg:mb-[60px] max-w-[540px] mx-auto">
            {[
              { num: 1, label: t('checkout.steps.step1') },
              { num: 2, label: t('checkout.steps.step2') },
              { num: 3, label: t('checkout.steps.step3') }
            ].map((s) => {
              const isClickable = s.num < step;
              const isActive = step >= s.num;
              const isCurrentStep = step === s.num;
              
              return (
                <div key={s.num} className="flex items-center gap-2 sm:gap-3 lg:gap-[12px]">
                  <button
                    type="button"
                    onClick={() => isClickable && setStep(s.num)}
                    disabled={!isClickable}
                    className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center ${
                      isActive ? 'bg-[#f8918a] text-white' : 'bg-white border-[2px] border-black text-[#323232]'
                    } font-['Open_Sans:Bold',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] shrink-0 ${
                      isClickable ? 'cursor-pointer hover:scale-110 transition-transform' : ''
                    }`}
                  >
                    {step > s.num ? <Check className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]" /> : s.num}
                  </button>
                  {/* Only show label on current step for mobile */}
                  {isCurrentStep && (
                    <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#323232] lg:hidden" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {s.label}
                    </span>
                  )}
                  {/* Show label on all steps for desktop */}
                  <span className="hidden lg:block font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {s.label}
                  </span>
                  {s.num < 3 && <div className="min-w-[1em] max-w-[60px] flex-1 h-[2px] bg-black/20" />}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-[40px]">
            {/* Main Content */}
            <div className={`col-span-1 order-2 lg:order-1 ${step === 4 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              {step === 1 && (
                <>
                  {/* Billing Period Toggle - Above box on mobile */}
                  <div className="lg:hidden mb-6 flex justify-center">
                    <div className="flex items-center gap-[8px] bg-[#fff5f0] p-[6px] rounded-[6px] border-[2px] border-black w-full max-w-[540px]">
                      <button
                        type="button"
                        onClick={() => setBillingPeriod('monthly')}
                        className={`flex-1 py-[8px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] transition-all cursor-pointer ${
                          billingPeriod === 'monthly'
                            ? 'bg-[#f8918a] text-white'
                            : 'bg-transparent text-[#323232] hover:bg-white'
                        }`}
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {t('pricing.billing.monthly')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setBillingPeriod('yearly')}
                        className={`flex-1 py-[8px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] transition-all cursor-pointer ${
                          billingPeriod === 'yearly'
                            ? 'bg-[#f8918a] text-white'
                            : 'bg-transparent text-[#323232] hover:bg-white'
                        }`}
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {t('pricing.billing.yearly')}
                        <span className="ml-[6px] text-[11px] bg-[#FFE388] text-[#323232] px-[6px] py-[1px] rounded-[3px]">{t('pricing.billing.save')}</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
                    <div className="flex items-center justify-between mb-[32px]">
                      <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.planselection.title')}
                      </h2>
                      
                      {/* Billing Period Toggle - Desktop only */}
                      <div className="hidden lg:flex items-center gap-[8px] bg-[#fff5f0] p-[6px] rounded-[6px] border-[2px] border-black">
                        <button
                          type="button"
                          onClick={() => setBillingPeriod('monthly')}
                          className={`px-[16px] py-[8px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] transition-all cursor-pointer ${
                            billingPeriod === 'monthly'
                              ? 'bg-[#f8918a] text-white'
                              : 'bg-transparent text-[#323232] hover:bg-white'
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {t('pricing.billing.monthly')}
                        </button>
                        <button
                          type="button"
                          onClick={() => setBillingPeriod('yearly')}
                          className={`px-[16px] py-[8px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] transition-all cursor-pointer ${
                            billingPeriod === 'yearly'
                              ? 'bg-[#f8918a] text-white'
                              : 'bg-transparent text-[#323232] hover:bg-white'
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {t('pricing.billing.yearly')}
                          <span className="ml-[6px] text-[11px] bg-[#FFE388] text-[#323232] px-[6px] py-[1px] rounded-[3px]">{t('pricing.billing.save')}</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-[16px]">
                      {(Object.entries(plans) as [Plan, PlanDetails][]).map(([key, plan]) => {
                        const planMonthlyPrice = plan.price;
                        const planYearlyPrice = Number((plan.price * 0.8).toFixed(2));
                        const showPrice = billingPeriod === 'yearly' ? planYearlyPrice : planMonthlyPrice;
                        
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => {
                              setSelectedPlan(key);
                              // Track plan selection in checkout
                              trackPlanClick(key, billingPeriod);
                            }}
                            className={`w-full text-left p-[20px] rounded-[12px] border-[2px] transition-all cursor-pointer ${
                              selectedPlan === key
                                ? 'border-[#f8918a] bg-[#fff5f0]'
                                : 'border-black bg-white hover:bg-[#f5f5f5]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-[12px]">
                              <div>
                                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {t(`checkout.plans.${key}.name`)}
                                </h3>
                                <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {t(`checkout.plans.${key}.description`)}
                                </p>
                              </div>
                              <div className="text-right">
                                {billingPeriod === 'yearly' && (
                                  <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] line-through">
                                    €{planMonthlyPrice}
                                  </div>
                                )}
                                <div className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] text-[#323232]">
                                  €{showPrice}
                                </div>
                                <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]">
                                  {t('checkout.pricing.permonth')}
                                </div>
                                {billingPeriod === 'yearly' && (
                                  <div className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#f8918a] mt-[4px]">
                                    €{Number((showPrice * 12).toFixed(2))}{t('checkout.pricing.peryear')}
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-[8px] flex-wrap">
                              {[1, 2, 3].map((idx) => (
                                <span key={idx} className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] bg-white px-[12px] py-[4px] rounded-[4px]">
                                  {t(`checkout.plans.${key}.features.${idx}`)}
                                </span>
                              ))}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Button inside box on desktop only */}
                    <button
                      onClick={handleNext}
                      className="hidden lg:block w-full cursor-pointer bg-[#f8918a] h-[56px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors mt-[32px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {t('checkout.buttons.continue')}
                    </button>
                  </div>

                  {/* Mobile Order Summary - Before CTA on Step 1 */}
                  <div className="lg:hidden bg-white border-[2px] border-black rounded-[12px] p-[32px] mt-8">
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.summary.title')}
                    </h3>
                    
                    <div className="space-y-[16px] pb-[24px] border-b-[2px] border-[#f5f5f5]">
                      <div className="flex justify-between">
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t(`checkout.plans.${selectedPlan}.name`)}
                        </span>
                      </div>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t(`checkout.plans.${selectedPlan}.description`)}
                      </p>
                    </div>

                    <div className="pt-[24px] space-y-[12px]">
                      <div className="flex justify-between items-baseline">
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t(`pricing.billing.${billingPeriod}`)}
                        </span>
                        <span className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          €{billingPeriod === 'yearly' ? Number((currentPlan.price * 0.8).toFixed(2)) : currentPlan.price}/mo
                        </span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="flex justify-between text-[14px]">
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Billed annually
                          </span>
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            €{Number((currentPlan.price * 0.8 * 12).toFixed(2))}/year
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Button outside box on mobile only */}
                  <button
                    onClick={handleNext}
                    className="lg:hidden w-full cursor-pointer bg-[#f8918a] h-[56px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors mt-8 mb-8"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Continue to Sign Up
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
                    <h2 className="font-['Open_Sans:Bold',sans-serif] text-[32px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.account.title')}
                    </h2>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#838383] mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.account.description')}
                    </p>
                    
                    <div>
                      <label className="block font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.account.email.label')}
                      </label>
                      <input
                        type="email"
                        required
                        value={accountData.email}
                        onChange={handleEmailChange}
                        className="w-full h-[52px] px-[20px] rounded-[8px] border-[2px] border-black font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] focus:outline-none focus:border-[#f8918a]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder={t('checkout.account.email.placeholder')}
                      />
                      {emailError && (
                        <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#ff0000] mt-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {emailError}
                        </p>
                      )}
                      {/* Spacer to maintain spacing when no error is shown */}
                      {!emailError && <div className="h-[30px]" />}
                    </div>

                    {/* Buttons inside box on desktop only */}
                    <div className="hidden lg:flex gap-[16px] pt-[16px]">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-white border-[2px] border-black h-[56px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-[#323232] hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {t('checkout.buttons.back')}
                      </button>
                      <button
                        type="button"
                        onClick={handleEmailNext}
                        className="flex-1 bg-[#f8918a] h-[56px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {t('checkout.buttons.next')}
                      </button>
                    </div>
                  </div>

                  {/* Mobile Order Summary - Before CTA on Step 2 */}
                  <div className="lg:hidden bg-white border-[2px] border-black rounded-[12px] p-[32px] mt-8">
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.summary.title')}
                    </h3>
                    
                    <div className="space-y-[16px] pb-[24px] border-b-[2px] border-[#f5f5f5]">
                      <div className="flex justify-between">
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t(`checkout.plans.${selectedPlan}.name`)}
                        </span>
                      </div>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t(`checkout.plans.${selectedPlan}.description`)}
                      </p>
                    </div>

                    <div className="py-[24px] border-b-[2px] border-[#f5f5f5]">
                      <div className="flex justify-between mb-[12px]">
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {billingPeriod === 'monthly' ? t('checkout.summary.monthlysubscription') : t('checkout.summary.yearlysubscription')}
                        </span>
                        <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]">
                          €{displayPrice}{t('checkout.summary.permonthshort')}
                        </span>
                      </div>
                    </div>

                    <div className="pt-[24px] border-t-[2px] border-black">
                      <div className="flex justify-between items-baseline mb-[8px]">
                        <span className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.summary.totaltoday')}
                        </span>
                        <span className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] text-[#323232]">
                          €{billingPeriod === 'yearly' ? yearlyTotal : displayPrice}
                        </span>
                      </div>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {billingPeriod === 'yearly' 
                          ? `${t('checkout.summary.billedannually')}. ${t('checkout.summary.thats')} €${displayPrice}${t('checkout.summary.permonthshort')}.` 
                          : `${t('checkout.summary.then')} €${displayPrice}${t('checkout.summary.permonthshort')}.`}
                      </p>
                    </div>

                    <div className="mt-[24px] space-y-[12px]">
                      <div className="flex items-center gap-[8px]">
                        <Shield className="w-[16px] h-[16px] text-[#f8918a]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.summary.moneyback')}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Lock className="w-[16px] h-[16px] text-[#f8918a]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.summary.secureencrypted')}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Check className="w-[16px] h-[16px] text-[#f8918a]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.summary.cancelanytime')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Button outside box on mobile only */}
                  <button
                    onClick={handleEmailNext}
                    className="lg:hidden w-full cursor-pointer bg-[#f8918a] h-[56px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors mt-8 mb-8"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Continue to Payment
                  </button>
                </>
              )}

              {step === 3 && (
                <div>
                  {/* Early Access & Founding Member Benefits - Combined */}
                  <div className="bg-[#FFE388] border-[2px] border-black rounded-[12px] p-[32px] mb-[32px]">
                    <div className="flex items-center gap-[12px] mb-[16px]">
                      <span className="text-[28px]">🎁</span>
                      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.founding.title')}
                      </h3>
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232] mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }} dangerouslySetInnerHTML={{ __html: t('checkout.founding.description', { email: accountData.email }) }}>
                    </p>
                    <div className="space-y-[12px] mb-[20px]">
                      <div className="flex items-start gap-[12px]">
                        <div className="w-[24px] h-[24px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                          <Check className="w-[14px] h-[14px] text-white" />
                        </div>
                        <div>
                          <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {billingPeriod === 'yearly' 
                              ? t('checkout.founding.benefit1.title')
                              : t('checkout.founding.benefit1.titleMonthly')
                            }
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]/80" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.founding.benefit1.description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-[12px]">
                        <div className="w-[24px] h-[24px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                          <Check className="w-[14px] h-[14px] text-white" />
                        </div>
                        <div>
                          <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.founding.benefit2.title')}
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]/80" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.founding.benefit2.description')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px] mb-[24px]">
                      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.payment.title')}
                      </h3>
                      
                      <div className="space-y-[20px]">
                        <div>
                          <label className="block font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.payment.card.label')}
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder={t('checkout.payment.card.placeholder')}
                              value={paymentData.cardNumber}
                              onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                              className="w-full h-[52px] px-[20px] pr-[50px] rounded-[8px] border-[2px] border-black font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] focus:outline-none focus:border-[#f8918a]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            />
                            <CreditCard className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#838383]" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-[16px]">
                          <div className="col-span-2">
                            <label className="block font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {t('checkout.payment.expiry.label')}
                            </label>
                            <input
                              type="text"
                              required
                              placeholder={t('checkout.payment.expiry.placeholder')}
                              value={paymentData.expiryDate}
                              onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                              className="w-full h-[52px] px-[20px] rounded-[8px] border-[2px] border-black font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] focus:outline-none focus:border-[#f8918a]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            />
                          </div>
                          <div>
                            <label className="block font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {t('checkout.payment.cvc.label')}
                            </label>
                            <input
                              type="text"
                              required
                              placeholder={t('checkout.payment.cvc.placeholder')}
                              value={paymentData.cvv}
                              onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                              className="w-full h-[52px] px-[20px] rounded-[8px] border-[2px] border-black font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] focus:outline-none focus:border-[#f8918a]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.payment.zip.label')}
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={t('checkout.payment.zip.placeholder')}
                            value={paymentData.billingZip}
                            onChange={(e) => setPaymentData({...paymentData, billingZip: e.target.value})}
                            className="w-full h-[52px] px-[20px] rounded-[8px] border-[2px] border-black font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] focus:outline-none focus:border-[#f8918a]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          />
                        </div>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="flex items-start gap-[12px] mt-[24px] pt-[24px] border-t-[2px] border-[#f5f5f5]">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className="mt-[4px] w-[20px] h-[20px] cursor-pointer accent-[#f8918a]"
                        />
                        <label htmlFor="terms" className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232] cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }} dangerouslySetInnerHTML={{ __html: t('checkout.trust.agree', {
                          termsLink: `<a href="/terms" target="_blank" rel="noopener noreferrer" class="text-[#f8918a] hover:underline">${t('checkout.trust.termslink')}</a>`,
                          privacyLink: `<a href="/privacy" target="_blank" rel="noopener noreferrer" class="text-[#f8918a] hover:underline">${t('checkout.trust.privacylink')}</a>`
                        }) }}>
                        </label>
                      </div>
                    </div>

                    {/* Mobile Order Summary - Before CTA on Step 3 */}
                    <div className="lg:hidden bg-white border-[2px] border-black rounded-[12px] p-[32px] mt-8 mb-8">
                      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.summary.ordersummary')}
                      </h3>
                      
                      <div className="space-y-[16px] pb-[24px] border-b-[2px] border-[#f5f5f5]">
                        <div className="flex justify-between">
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t(`checkout.plans.${selectedPlan}.name`)}
                          </span>
                        </div>
                        <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t(`checkout.plans.${selectedPlan}.description`)}
                        </p>
                      </div>

                      <div className="py-[24px] border-b-[2px] border-[#f5f5f5]">
                        <div className="flex justify-between mb-[12px]">
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {billingPeriod === 'monthly' ? t('checkout.summary.monthlysubscription') : t('checkout.summary.yearlysubscription')}
                          </span>
                          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]">
                            €{displayPrice}{t('checkout.summary.permonthshort')}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-[6px]">
                            <span className="text-[16px]">🎁</span>
                            <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {t('checkout.summary.foundingrate')}
                            </span>
                          </div>
                          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#f8918a]">
                            -50%
                          </span>
                        </div>
                      </div>

                      <div className="pt-[24px] border-t-[2px] border-black">
                        <div className="flex justify-between items-baseline mb-[8px]">
                          <span className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.summary.firstpayment')}
                          </span>
                          <div className="text-right">
                            <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] line-through mb-[4px]">
                              €{billingPeriod === 'yearly' ? yearlyTotal : displayPrice}
                            </div>
                            <span className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] text-[#323232]">
                              €{billingPeriod === 'yearly' ? (yearlyTotal / 2).toFixed(2) : (displayPrice / 2).toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {billingPeriod === 'yearly' 
                            ? `€${(yearlyTotal / 2).toFixed(2)} ${t('checkout.summary.forfirstyear')}. ${t('checkout.summary.then')} €${yearlyTotal}${t('checkout.summary.peryearshort')}.` 
                            : `€${(displayPrice / 2).toFixed(2)} ${t('checkout.summary.for3months')}. ${t('checkout.summary.then')} €${displayPrice}${t('checkout.summary.permonthshort')}.`}
                        </p>
                      </div>

                      <div className="mt-[24px] space-y-[12px]">
                        <div className="flex items-center gap-[8px]">
                          <Shield className="w-[16px] h-[16px] text-[#f8918a]" />
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.summary.moneyback30')}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <Lock className="w-[16px] h-[16px] text-[#f8918a]" />
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.summary.secureencrypted')}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <Check className="w-[16px] h-[16px] text-[#f8918a]" />
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.summary.cancelanytime')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Error Message */}
                    {paymentError && (
                      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6">
                        <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-red-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {paymentError}
                        </p>
                      </div>
                    )}

                    {/* Primary CTA */}
                    <button
                      type="submit"
                      disabled={!agreedToTerms || isProcessing}
                      className="w-full bg-[#f8918a] h-[60px] rounded-[8px] font-['Open_Sans:Bold',sans-serif] text-[20px] text-white hover:bg-[#f9675d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mb-[24px] flex items-center justify-center gap-3"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        t('checkout.buttons.complete')
                      )}
                    </button>

                    {/* Trust & Reassurance - Stack vertically on mobile */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[32px] mb-[32px]">
                      <div className="flex items-center gap-[8px]">
                        <Shield className="w-[18px] h-[18px] text-[#f8918a]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.trust.refund')}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Lock className="w-[18px] h-[18px] text-[#f8918a]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.trust.private')}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Check className="w-[18px] h-[18px] text-[#f8918a]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {t('checkout.trust.cancel')}
                        </span>
                      </div>
                    </div>
                  </form>

                  {/* Secondary CTA - Optional Call */}
                  <div className="bg-[#f5f5f5] border-[2px] border-[#e0e0e0] rounded-[8px] p-[24px] text-center">
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.founders.title')}
                    </p>
                    <a
                      href="https://calendar.google.com/calendar/appointments/schedules/YOUR_BOOKING_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[8px] text-[#f8918a] font-['Open_Sans:SemiBold',sans-serif] text-[14px] hover:underline"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {t('checkout.founders.cta')}
                    </a>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="bg-white border-[2px] border-black rounded-[12px] p-8 sm:p-10 lg:p-[60px] text-center max-w-[800px] mx-auto">
                  <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-full flex items-center justify-center mx-auto mb-[24px]">
                    <Check className="w-[40px] h-[40px] text-white" />
                  </div>
                  <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[40px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('checkout.thankyou.title')}
                  </h2>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] leading-[28px] text-[#838383] mb-[32px] max-w-[600px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('checkout.thankyou.description')}
                  </p>
                  
                  <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-6 sm:p-8 text-left lg:text-center mb-[32px]">
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.thankyou.whathappens')}
                    </h3>
                    <ul className="space-y-[12px] lg:inline-block lg:text-left">
                      <li className="flex gap-[12px] items-start">
                        <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] text-[#323232]">{t('checkout.thankyou.step1')}</span>
                      </li>
                      <li className="flex gap-[12px] items-start">
                        <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] text-[#323232]">{t('checkout.thankyou.step2')}</span>
                      </li>
                      <li className="flex gap-[12px] items-start">
                        <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] text-[#323232]">{t('checkout.thankyou.step3')}</span>
                      </li>
                    </ul>
                  </div>

                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('checkout.thankyou.thankyoutext')}
                  </p>

                  <div className="bg-[#f5f5f5] border-[2px] border-[#e0e0e0] rounded-[8px] p-6 mb-[32px] text-left lg:text-center">
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.thankyou.questions')}
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t('checkout.thankyou.questionstext')}
                    </p>
                    <Link href="/contact" 
                      className="inline-flex items-center gap-[8px] text-[#f8918a] font-['Open_Sans:SemiBold',sans-serif] text-[15px] hover:underline"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {t('checkout.thankyou.contact')} →
                    </Link>
                  </div>

                  <Link href="/" 
                    className="inline-flex items-center justify-center bg-[#f8918a] h-[52px] sm:h-[56px] px-[32px] sm:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[18px] text-white hover:bg-[#f9675d] transition-colors" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {t('checkout.thankyou.home')}
                  </Link>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar - Desktop only */}
            {step !== 4 && (
              <div className="col-span-1 hidden lg:block order-1 lg:order-2">
                <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px] sticky top-[100px]">
                  <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('checkout.summary.ordersummary')}
                  </h3>
                  
                  <div className="space-y-[16px] pb-[24px] border-b-[2px] border-[#f5f5f5]">
                    <div className="flex justify-between">
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t(`checkout.plans.${selectedPlan}.name`)}
                      </span>
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t(`checkout.plans.${selectedPlan}.description`)}
                    </p>
                  </div>

                  <div className="py-[24px] border-b-[2px] border-[#f5f5f5]">
                    <div className="flex justify-between mb-[12px]">
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {billingPeriod === 'monthly' ? t('checkout.summary.monthlysubscription') : t('checkout.summary.yearlysubscription')}
                      </span>
                      <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]">
                        €{displayPrice}{t('checkout.summary.permonthshort')}
                      </span>
                    </div>
                    {step === 3 && (
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[6px]">
                          <span className="text-[16px]">🎁</span>
                          <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {t('checkout.summary.foundingrate')}
                          </span>
                        </div>
                        <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#f8918a]">
                          -50%
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-[24px] border-t-[2px] border-black">
                    <div className="flex justify-between items-baseline mb-[8px]">
                      <span className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step === 3 ? t('checkout.summary.firstpayment') : t('checkout.summary.totaltoday')}
                      </span>
                      <div className="text-right">
                        {step === 3 && (
                          <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] line-through mb-[4px]">
                            €{billingPeriod === 'yearly' ? yearlyTotal : displayPrice}
                          </div>
                        )}
                        <span className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] text-[#323232]">
                          €{step === 3 
                            ? (billingPeriod === 'yearly' ? (yearlyTotal / 2).toFixed(2) : (displayPrice / 2).toFixed(2))
                            : (billingPeriod === 'yearly' ? yearlyTotal : displayPrice)
                          }
                        </span>
                      </div>
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step === 3
                        ? (billingPeriod === 'yearly' 
                            ? `€${(yearlyTotal / 2).toFixed(2)} ${t('checkout.summary.forfirstyear')}. ${t('checkout.summary.then')} €${yearlyTotal}${t('checkout.summary.peryearshort')}.` 
                            : `€${(displayPrice / 2).toFixed(2)} ${t('checkout.summary.for3months')}. ${t('checkout.summary.then')} €${displayPrice}${t('checkout.summary.permonthshort')}.`)
                        : (billingPeriod === 'yearly' 
                            ? `${t('checkout.summary.billedannually')}. ${t('checkout.summary.thats')} €${displayPrice}${t('checkout.summary.permonthshort')}.` 
                            : `${t('checkout.summary.then')} €${displayPrice}${t('checkout.summary.permonthshort')}.`)}
                    </p>
                  </div>

                  <div className="mt-[24px] space-y-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <Shield className="w-[16px] h-[16px] text-[#f8918a]" />
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step === 3 ? t('checkout.summary.moneyback30') : t('checkout.summary.moneyback')}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <Lock className="w-[16px] h-[16px] text-[#f8918a]" />
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.summary.secureencrypted')}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <Check className="w-[16px] h-[16px] text-[#f8918a]" />
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {t('checkout.summary.cancelanytime')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

