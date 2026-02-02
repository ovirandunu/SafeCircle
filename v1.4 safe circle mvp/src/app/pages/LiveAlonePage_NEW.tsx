import { Activity, Users, HeartPulse, Shield, Bell, Lock, FileText, Smartphone, Home, Clock, CheckCircle, ChevronDown, ChevronUp, Menu, ArrowLeft, DollarSign, File, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import heroImage from 'figma:asset/4c71468f0e29aa1a294dedba837e800064e75011.png';
import PricingSection from '../components/PricingSection';
import privacySettingsImg from 'figma:asset/5281bbf7203d7edc283b0480d1a623279c50ec88.png';
import appBehaviorImg from 'figma:asset/f100685f2e801659d2e2c586a55e2117b513f336.png';
import mySafeCircleImg from 'figma:asset/54848f75f286af6996dc757a152776243a12d2f0.png';
import allIsWellImg from 'figma:asset/3667e12d220b43d714201c3bab28d2ace16828f5.png';
import concernImg from 'figma:asset/897b4259652ab58e6acffb492924a70bda70573e.png';

// Smooth scroll helper with ease-in-out
function smoothScrollTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startPosition = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top + startPosition - 100;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start: number | null = null;

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function animation(currentTime: number) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Hero Section
function Hero() {
  const { t } = useTranslation();
  const handleGetStarted = () => {
    smoothScrollTo('pricing');
  };

  return (
    <section className="bg-[#fff5f0] relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFE388] to-[#FFDD6E] opacity-20 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F9A49E] to-[#F9675D] opacity-20 blur-3xl" />
      
      {/* Mobile & Tablet - Centered content with buttons at bottom */}
      <div className="lg:hidden min-h-[100svh] flex flex-col justify-between px-4 sm:px-8 pt-20 pb-12 relative">
        {/* Vertically centered text content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center text-center w-full">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] leading-[1.1] tracking-[-0.03em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('hero.heading')}
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[1.5] tracking-[0.3px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('hero.subheading')}
            </p>
          </div>
        </div>
        
        {/* Buttons at bottom */}
        <div className="flex flex-col gap-4 w-full max-w-[540px] mx-auto items-center pb-safe">
          <button onClick={handleGetStarted} className="bg-[#f8918a] h-[52px] w-full rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('hero.cta')}
          </button>
          <button
            onClick={() => smoothScrollTo('problem')}
            className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] underline underline-offset-4 hover:text-[#f8918a] transition-colors cursor-pointer"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {t('hero.learnMore')}
          </button>
        </div>
      </div>

      {/* Desktop - Vertically centered layout */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto px-[70px] relative w-full items-center justify-between min-h-screen">
        <div className="flex flex-col gap-[29px] max-w-[743px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[70px] leading-[70px] tracking-[-3.2px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('hero.heading')}
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[24px] leading-[26px] tracking-[1px] text-[#838383] max-w-[674px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('hero.subheading')}
            </p>
          </div>
          
          <div className="flex gap-[27px]">
            <button onClick={handleGetStarted} className="bg-[#f8918a] h-[60px] w-[200px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('hero.cta')}
            </button>
            <button
              onClick={() => smoothScrollTo('problem')}
              className="bg-white h-[60px] px-[32px] rounded-[4px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-[#323232] border-2 border-[#323232] hover:bg-[#323232] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {t('hero.learnMore')}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-[500px] h-[600px] rounded-[10px] overflow-hidden border-[3px] border-black bg-white">
            <img 
              src={heroImage}
              alt="Woman reading book alone at home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function Problem() {
  const { t } = useTranslation();
  
  return (
    <section id="problem" className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-6 sm:mb-8 lg:mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('problem.title')}
          </h2>
          
          <div className="space-y-4 sm:space-y-5 lg:space-y-[24px] text-left mt-8 sm:mt-10 lg:mt-[48px]">
            <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
              <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#f8918a] rounded-full mt-[8px] sm:mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">{t('problem.bullet1.strong')}</strong> {t('problem.bullet1.regular')}
              </p>
            </div>
            
            <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
              <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#f8918a] rounded-full mt-[8px] sm:mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">{t('problem.bullet2.strong')}</strong> {t('problem.bullet2.regular')}
              </p>
            </div>
            
            <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
              <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#f8918a] rounded-full mt-[8px] sm:mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">{t('problem.bullet3.strong')}</strong> {t('problem.bullet3.regular')}
              </p>
            </div>
          </div>
          
          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#838383] mt-8 sm:mt-10 lg:mt-[40px] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('problem.closing')}
          </p>
        </div>
      </div>
    </section>
  );
}

// Product 1: SafeCircle - How It Works
function WellbeingMonitor() {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        
        {/* Product Title & Summary */}
        <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('howitworks.title')}
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] max-w-[884px] md:mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('howitworks.subtitle')}
          </p>
        </div>

        <div className="max-w-[960px] mx-auto">
          {/* Feature 1 - Privacy-First Monitoring */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-[96px] mb-12 sm:mb-16 lg:mb-[100px]">
            {/* Title - Mobile only */}
            <div className="w-full lg:hidden text-center">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[22px] sm:text-[28px] leading-[1.2] tracking-[-0.02em] text-[#323232] mb-4">
                {t('howitworks.feature1.title')}
              </h3>
            </div>
            
            {/* Screenshot */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:w-[300px] shrink-0 mx-auto lg:mx-0">
              <div className="shadow-xl rounded-[12px] sm:rounded-[16px]">
                <img src={privacySettingsImg} alt={t('howitworks.feature1.alt')} className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
              </div>
            </div>
            
            {/* Text with desktop title */}
            <div className="flex-1 w-full text-left">
              <h3 className="hidden lg:block font-['Open_Sans:ExtraBold',sans-serif] text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.feature1.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.feature1.description')}
              </p>
            </div>
          </div>

          {/* Feature 2 - Adaptive Information Sharing */}
          <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-6 sm:gap-8 lg:gap-[96px] mb-12 sm:mb-16 lg:mb-[100px]">
            {/* Title - Mobile only */}
            <div className="w-full lg:hidden text-center">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[22px] sm:text-[28px] leading-[1.2] tracking-[-0.02em] text-[#323232] mb-4">
                {t('howitworks.feature2.title')}
              </h3>
            </div>
            
            {/* Screenshot */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:w-[300px] shrink-0 mx-auto lg:mx-0">
              <div className="shadow-xl rounded-[12px] sm:rounded-[16px]">
                <img src={appBehaviorImg} alt={t('howitworks.feature2.alt')} className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
              </div>
            </div>
            
            {/* Text with desktop title */}
            <div className="flex-1 w-full text-left">
              <h3 className="hidden lg:block font-['Open_Sans:ExtraBold',sans-serif] text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.feature2.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.feature2.description')}
              </p>
            </div>
          </div>

          {/* Feature 3 - User Control */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-[96px] mb-12 sm:mb-16 lg:mb-[100px]">
            {/* Title - Mobile only */}
            <div className="w-full lg:hidden text-center">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[22px] sm:text-[28px] leading-[1.2] tracking-[-0.02em] text-[#323232] mb-4">
                {t('howitworks.feature3.title')}
              </h3>
            </div>
            
            {/* Screenshot */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:w-[300px] shrink-0 mx-auto lg:mx-0">
              <div className="shadow-xl rounded-[12px] sm:rounded-[16px]">
                <img src={mySafeCircleImg} alt={t('howitworks.feature3.alt')} className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
              </div>
            </div>
            
            {/* Text with desktop title */}
            <div className="flex-1 w-full text-left">
              <h3 className="hidden lg:block font-['Open_Sans:ExtraBold',sans-serif] text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.feature3.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.feature3.description')}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Selling Points - Stack vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-[40px] max-w-[1200px] mx-auto mb-10 sm:mb-12 lg:mb-[60px]">
          <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[24px]">
            <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
              <div className="bg-white rounded-[8px] size-[40px] sm:size-[44px] lg:size-[48px] flex items-center justify-center shrink-0">
                <Smartphone className="size-[20px] sm:size-[22px] lg:size-[24px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:Bold',sans-serif] text-[15px] sm:text-[16px] leading-[1.5] text-[#323232] mb-1 sm:mb-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('howitworks.selling1.title')}
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('howitworks.selling1.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[24px]">
            <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
              <div className="bg-white rounded-[8px] size-[40px] sm:size-[44px] lg:size-[48px] flex items-center justify-center shrink-0">
                <Home className="size-[20px] sm:size-[22px] lg:size-[24px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:Bold',sans-serif] text-[15px] sm:text-[16px] leading-[1.5] text-[#323232] mb-1 sm:mb-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('howitworks.selling2.title')}
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('howitworks.selling2.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[24px]">
            <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
              <div className="bg-white rounded-[8px] size-[40px] sm:size-[44px] lg:size-[48px] flex items-center justify-center shrink-0">
                <Shield className="size-[20px] sm:size-[22px] lg:size-[24px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:Bold',sans-serif] text-[15px] sm:text-[16px] leading-[1.5] text-[#323232] mb-1 sm:mb-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('howitworks.selling3.title')}
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('howitworks.selling3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button - No chevron, toggle text */}
        <div className="text-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[#f8918a] font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[16px] hover:underline cursor-pointer"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {showDetails ? t('howitworks.expandable.button.hide') : t('howitworks.expandable.button.show')}
          </button>
        </div>

        {/* Expanded Learn More Content */}
        {showDetails && (
          <div className="max-w-[800px] mx-auto mt-10 sm:mt-12 lg:mt-[60px] space-y-8 sm:space-y-10 lg:space-y-[48px] animate-[fadeIn_0.3s_ease-in]">
            
            {/* What monitoring means */}
            <div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] lg:text-[28px] text-[#323232] mb-5 sm:mb-6 lg:mb-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.expandable.section1.title')}
              </h3>
              <div className="space-y-4 sm:space-y-5 lg:space-y-[20px] font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>
                  {t('howitworks.expandable.section1.p1')}
                </p>
                <p>
                  {t('howitworks.expandable.section1.p2')}
                </p>
                <p>
                  {t('howitworks.expandable.section1.p3')}
                </p>
              </div>
            </div>

            {/* Monitoring vs Surveillance */}
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[24px] text-[#323232] mb-4 sm:mb-5 lg:mb-[20px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('howitworks.expandable.section2.title')}
              </h3>
              <div className="space-y-4 sm:space-y-5 lg:space-y-[20px]">
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-[#323232] mb-2 text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('howitworks.expandable.section2.surveillance.title')}
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('howitworks.expandable.section2.surveillance.text')}
                  </p>
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-[#323232] mb-2 text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('howitworks.expandable.section2.safecircle.title')}
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('howitworks.expandable.section2.safecircle.text')}
                  </p>
                </div>
                <div className="bg-white rounded-[8px] p-4 sm:p-5 lg:p-[20px] border-[1px] border-[#f8918a]">
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t('howitworks.expandable.section2.keydifference')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

// Trusted Contacts Perspective Section
function TrustedContactsPerspective() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#464646] py-12 sm:py-16 lg:py-[64px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        
        {/* Section Title & Summary - Centered, white text */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-[56px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-white mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('trustedcontacts.title')}
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-white max-w-[744px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('trustedcontacts.subtitle')}
          </p>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:flex gap-[96px] items-start justify-center max-w-[900px] mx-auto">
          {/* State 1: All is well */}
          <div className="flex flex-col gap-[24px] items-center flex-1 max-w-[300px]">
            <div className="w-full shadow-xl rounded-[12px] sm:rounded-[16px]">
              <img src={allIsWellImg} alt="All is well - trusted contact view" className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] text-white text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('trustedcontacts.state1.description')}
            </p>
          </div>

          {/* State 2: Concern */}
          <div className="flex flex-col gap-[24px] items-center flex-1 max-w-[300px]">
            <div className="w-full shadow-xl rounded-[12px] sm:rounded-[16px]">
              <img src={concernImg} alt="Concern - trusted contact view" className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] text-white text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('trustedcontacts.state2.description')}
            </p>
          </div>
        </div>

        {/* Mobile/Tablet: Stacked layout */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:hidden max-w-[400px] mx-auto">
          {/* State 1: All is well */}
          <div className="flex flex-col gap-[24px] items-center">
            <div className="w-full max-w-[280px] sm:max-w-[300px] shadow-xl rounded-[12px] sm:rounded-[16px]">
              <img src={allIsWellImg} alt="All is well - trusted contact view" className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] text-white text-center w-full max-w-[300px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('trustedcontacts.state1.description')}
            </p>
          </div>

          {/* State 2: Concern */}
          <div className="flex flex-col gap-[24px] items-center">
            <div className="w-full max-w-[280px] sm:max-w-[300px] shadow-xl rounded-[12px] sm:rounded-[16px]">
              <img src={concernImg} alt="Concern - trusted contact view" className="w-full h-auto object-contain rounded-[12px] sm:rounded-[16px]" />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] text-white text-center w-full max-w-[300px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('trustedcontacts.state2.description')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// Product 2: Legacy Planner - PLACEHOLDER FOR FUTURE CONTENT
function LegacyPlanner() {
  const { t } = useTranslation();
  
  return (
    <section id="why-it-matters" className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        
        {/* Product Title & Summary */}
        <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('whyitmatters.title')}
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] max-w-[884px] md:mx-auto mb-8 sm:mb-10 lg:mb-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('whyitmatters.subtitle')}
          </p>
          
          {/* It's perfect for */}
          <div className="text-left max-w-[884px] md:mx-auto">
            <p className="font-['Open_Sans:SemiBold',sans-serif] text-[17px] sm:text-[18px] lg:text-[20px] text-[#323232] mb-4 sm:mb-5 lg:mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('whyitmatters.perfectfor.title')}
            </p>
            <div className="space-y-3 sm:space-y-4 lg:space-y-[16px]">
              <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start bg-white/50 p-4 rounded-[8px] border-[2px] border-black/5">
                <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                  <svg className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('whyitmatters.perfectfor.item1')}
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start bg-white/50 p-4 rounded-[8px] border-[2px] border-black/5">
                <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                  <svg className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('whyitmatters.perfectfor.item2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works + What this is not */}
        <div className="max-w-[800px] mx-auto space-y-8 sm:space-y-10 lg:space-y-[48px]">
          <div>
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] lg:text-[28px] text-[#323232] mb-5 sm:mb-6 lg:mb-[24px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('whyitmatters.howitworks.title')}
            </h3>
            <div className="space-y-4 sm:space-y-5 lg:space-y-[20px]">
              <div className="flex gap-3 sm:gap-4 lg:gap-[16px]">
                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[12px] sm:text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('whyitmatters.howitworks.step1')}
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 lg:gap-[16px]">
                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[12px] sm:text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  2
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('whyitmatters.howitworks.step2')}
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 lg:gap-[16px]">
                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[12px] sm:text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  3
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('whyitmatters.howitworks.step3')}
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 lg:gap-[16px]">
                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[12px] sm:text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  4
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t('whyitmatters.howitworks.step4')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[24px] text-[#323232] mb-4 sm:mb-5 lg:mb-[20px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('whyitmatters.whatitisnot.title')}
            </h3>
            <div className="space-y-3 sm:space-y-4 lg:space-y-[16px] font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#323232] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
                <strong>{t('whyitmatters.whatitisnot.item1.title')}</strong> {t('whyitmatters.whatitisnot.item1.text')}
              </p>
              <p>
                <strong>{t('whyitmatters.whatitisnot.item2.title')}</strong> {t('whyitmatters.whatitisnot.item2.text')}
              </p>
              <p>
                <strong>{t('whyitmatters.whatitisnot.item3.title')}</strong> {t('whyitmatters.whatitisnot.item3.text')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Privacy & Security Section
function PrivacySecurity() {
  const { t } = useTranslation();
  
  return (
    <section id="privacy" className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('privacy.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px]">
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[32px] text-left">
              <div className="bg-white rounded-[8px] w-[48px] h-[48px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-[16px]">
                <Shield className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.3] text-[#323232] mb-2 sm:mb-3 lg:mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card1.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card1.description')}
              </p>
            </div>
            
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[32px] text-left">
              <div className="bg-white rounded-[8px] w-[48px] h-[48px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-[16px]">
                <Users className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.3] text-[#323232] mb-2 sm:mb-3 lg:mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card2.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card2.description')}
              </p>
            </div>
            
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[32px] text-left">
              <div className="bg-white rounded-[8px] w-[48px] h-[48px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-[16px]">
                <Lock className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.3] text-[#323232] mb-2 sm:mb-3 lg:mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card3.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card3.description')}
              </p>
            </div>
            
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[32px] text-left">
              <div className="bg-white rounded-[8px] w-[48px] h-[48px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-[16px]">
                <Activity className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.3] text-[#323232] mb-2 sm:mb-3 lg:mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card4.title')}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('privacy.card4.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
    }
  ];

  return (
    <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('faq.title')}
          </h2>
        </div>
        
        <div className="max-w-[900px] mx-auto space-y-3 sm:space-y-4 lg:space-y-[16px]">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-[2px] border-black rounded-[8px] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 lg:px-[32px] py-4 sm:py-5 lg:py-[24px] flex items-center justify-between text-left hover:bg-[#ffebe5] transition-colors cursor-pointer"
              >
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-[#323232] pr-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#323232] shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 lg:px-[32px] pb-4 sm:pb-5 lg:pb-[24px] pt-0">
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] leading-[1.6] text-[#838383] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  const { t } = useTranslation();
  const handleGetStarted = () => {
    smoothScrollTo('pricing');
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[800px] mx-auto text-left md:text-center">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('finalcta.title')}
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[18px] lg:text-[20px] leading-[1.4] text-[#838383] mb-6 sm:mb-8 lg:mb-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('finalcta.subtitle')}
          </p>
          <button onClick={handleGetStarted} className="w-full sm:w-auto inline-flex items-center justify-center bg-[#f8918a] h-[52px] sm:h-[56px] lg:h-[60px] px-8 sm:px-10 lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] sm:text-[19px] lg:text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('finalcta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function LiveAlonePage() {
  useEffect(() => {
    localStorage.setItem('audienceChoice', 'live-alone');
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <MetaTags />
      <Header />
      <Hero />
      <Problem />
      <WellbeingMonitor />
      <TrustedContactsPerspective />
      <LegacyPlanner />
      <div id="pricing">
        <PricingSection />
      </div>
      <PrivacySecurity />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}