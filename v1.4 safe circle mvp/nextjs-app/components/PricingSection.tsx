'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { trackPlanClick } from '@/lib/tracking';

export default function PricingSection() {
  const { t } = useTranslation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'basic',
      name: t('pricing.plans.basic.name'),
      description: t('pricing.plans.basic.description'),
      monthlyPrice: 5,
      features: [
        { feature: t('pricing.plans.basic.features.0.feature'), outcome: t('pricing.plans.basic.features.0.outcome') },
        { feature: t('pricing.plans.basic.features.1.feature'), outcome: t('pricing.plans.basic.features.1.outcome') },
        { feature: t('pricing.plans.basic.features.2.feature'), outcome: t('pricing.plans.basic.features.2.outcome') },
        { feature: t('pricing.plans.basic.features.3.feature'), outcome: t('pricing.plans.basic.features.3.outcome') }
      ]
    },
    {
      id: 'full',
      name: t('pricing.plans.full.name'),
      description: t('pricing.plans.full.description'),
      monthlyPrice: 8,
      popular: true,
      features: [
        { feature: t('pricing.plans.full.features.0.feature'), outcome: t('pricing.plans.full.features.0.outcome') },
        { feature: t('pricing.plans.full.features.1.feature'), outcome: t('pricing.plans.full.features.1.outcome') },
        { feature: t('pricing.plans.full.features.2.feature'), outcome: t('pricing.plans.full.features.2.outcome') },
        { feature: t('pricing.plans.full.features.3.feature'), outcome: t('pricing.plans.full.features.3.outcome') }
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        
        {/* Title and Subtitle - Centered */}
        <div className="text-left md:text-center mb-8 sm:mb-10 lg:mb-[60px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('pricing.heading')}
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('pricing.subheading')}
          </p>
        </div>

        {/* Billing Period Toggle - Full width on mobile, centered with max-width */}
        <div className="mb-8 sm:mb-10 lg:mb-[60px]">
          <div className="w-full max-w-[540px] lg:w-auto mx-auto flex justify-center">
            <div className="flex lg:inline-flex items-center gap-[8px] bg-white p-[6px] rounded-[6px] border-[2px] border-black w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`flex-1 lg:flex-none lg:px-8 py-[8px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] text-[13px] sm:text-[14px] transition-all cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#f8918a] text-white'
                    : 'bg-transparent text-[#323232] hover:bg-[#fff5f0]'
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('pricing.billing.monthly')}
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`flex-1 lg:flex-none lg:px-8 py-[8px] rounded-[4px] font-['Open_Sans:SemiBold',sans-serif] text-[13px] sm:text-[14px] transition-all cursor-pointer ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#f8918a] text-white'
                    : 'bg-transparent text-[#323232] hover:bg-[#fff5f0]'
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('pricing.billing.yearly')}
                <span className="ml-[6px] text-[10px] sm:text-[11px] bg-[#FFE388] text-[#323232] px-[6px] py-[1px] rounded-[3px]">{t('pricing.billing.save')}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[40px] max-w-[900px] mx-auto mb-12 sm:mb-16 lg:mb-[80px]">
          {plans.map((plan, index) => {
            const displayPrice = billingPeriod === 'yearly' ? Number((plan.monthlyPrice * 0.8).toFixed(2)) : plan.monthlyPrice;
            const isPopular = plan.popular;
            const yearlyTotal = Number((displayPrice * 12).toFixed(2));
            
            return (
              <div
                key={plan.id}
                className={`${
                  isPopular
                    ? 'bg-[#323232] border-[2px] border-black rounded-[12px] p-6 sm:p-8 lg:p-[40px] relative md:transform md:scale-105'
                    : 'bg-white border-[2px] border-black rounded-[12px] p-6 sm:p-8 lg:p-[40px]'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-[-12px] sm:top-[-16px] left-[50%] translate-x-[-50%] bg-[#f8918a] border-[2px] border-black rounded-[20px] px-3 sm:px-4 lg:px-[16px] py-[4px]">
                    <span className="font-['Open_Sans:Bold',sans-serif] text-[11px] sm:text-[12px] text-white">{t('pricing.popular')}</span>
                  </div>
                )}

                <h3
                  className={`font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[24px] lg:text-[28px] mb-2 sm:mb-[8px] ${
                    isPopular ? 'text-white' : 'text-[#323232]'
                  }`}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] mb-5 sm:mb-6 lg:mb-[24px] ${
                    isPopular ? 'text-[#fff5f0]' : 'text-[#838383]'
                  }`}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {plan.description}
                </p>

                <div className="mb-6 sm:mb-8 lg:mb-[32px]">
                  <div className="flex items-baseline gap-[8px]">
                    {billingPeriod === 'yearly' && (
                      <span className={`font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] line-through ${isPopular ? 'text-[#fff5f0]/50' : 'text-[#838383]'}`}>
                        €{plan.monthlyPrice}
                      </span>
                    )}
                    <span className={`font-['Open_Sans:ExtraBold',sans-serif] text-[36px] sm:text-[42px] lg:text-[48px] ${isPopular ? 'text-white' : 'text-[#323232]'}`}>
                      €{displayPrice}
                    </span>
                    <span className={`font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] ${isPopular ? 'text-[#fff5f0]' : 'text-[#838383]'}`}>
                      {t('pricing.perMonth')}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#f8918a] mt-[4px]">
                      €{yearlyTotal}{t('pricing.perYear')} - {t('pricing.billing.save')}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 sm:space-y-4 lg:space-y-[16px] mb-6 sm:mb-8 lg:mb-[32px]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex flex-col gap-[4px]">
                      <div className="flex items-start gap-[12px]">
                        <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                          <svg className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className={`font-['Open_Sans:SemiBold',sans-serif] text-[14px] sm:text-[15px] ${isPopular ? 'text-white' : 'text-[#323232]'}`}>
                            {feature.feature}
                          </div>
                          <div className={`font-['Open_Sans:Regular',sans-serif] text-[12px] sm:text-[13px] italic ${isPopular ? 'text-[#fff5f0]/80' : 'text-[#838383]'}`}>
                            {feature.outcome}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link href={`/checkout?plan=${plan.id}&billing=${billingPeriod}`}
                  onClick={() => trackPlanClick(plan.id, billingPeriod)}
                  className={`w-full rounded-[8px] h-[48px] sm:h-[52px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[18px] transition-colors flex items-center justify-center ${
                    isPopular
                      ? 'bg-[#f8918a] border-[2px] border-[#f8918a] text-white hover:bg-[#f9675d] hover:border-[#f9675d]'
                      : 'bg-white border-[2px] border-black text-[#323232] hover:bg-[#323232] hover:text-white'
                  }`}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('pricing.cta')}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

