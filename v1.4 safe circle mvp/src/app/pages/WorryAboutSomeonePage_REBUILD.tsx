import { Activity, Users, HeartPulse, Shield, Bell, Lock, FileText, Smartphone, Home, Clock, CheckCircle, ChevronDown, ChevronUp, Menu, ArrowLeft, DollarSign, File, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import heroImage from 'figma:asset/85986970382cf0787f06862b543e8b8721cd944f.png';
import PricingSection from '../components/PricingSection';
import imgPlaceholder from 'figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png';

// Smooth scroll helper
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
  const handleGetStarted = () => {
    smoothScrollTo('pricing');
  };

  return (
    <section className="bg-[#fff5f0] min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFE388] to-[#FFDD6E] opacity-20 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F9A49E] to-[#F9675D] opacity-20 blur-3xl" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px] py-4 sm:py-8 lg:py-20 relative w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 min-h-[calc(100vh-120px)] lg:min-h-0">
          <div className="flex flex-col justify-between h-full flex-1 max-w-[743px] lg:pt-[80px] w-full text-center lg:text-left">
            {/* Title and Subtitle Group */}
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[16px] pt-[60px] sm:pt-[64px] lg:pt-0">
              <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[70px] leading-[1.15] sm:leading-[1.1] tracking-[-0.03em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Peace of mind for both of you
              </h1>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.5] sm:leading-[1.4] tracking-[0.3px] text-[#838383] max-w-[674px] mx-auto lg:mx-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                Stay connected with your loved one without constant check-ins. Know they're doing well—and be there quickly if something changes.
              </p>
            </div>
            
            {/* Flexible spacer - grows to push buttons to bottom on mobile */}
            <div className="flex-1 min-h-[2rem] lg:hidden" />
            
            {/* Buttons - at bottom on mobile, normal on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[27px] pb-4 sm:pb-6 lg:pb-0 lg:mt-[29px] items-center lg:items-start">
              <button onClick={handleGetStarted} className="bg-[#f8918a] h-[52px] sm:h-[56px] lg:h-[60px] w-full sm:w-[200px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[18px] sm:text-[19px] lg:text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
                Get Started
              </button>
              <button
                onClick={() => smoothScrollTo('problem')}
                className="sm:hidden font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] underline underline-offset-4 hover:text-[#f8918a] transition-colors cursor-pointer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Why SafeCircle
              </button>
              <button
                onClick={() => smoothScrollTo('problem')}
                className="hidden sm:flex bg-white h-[56px] lg:h-[60px] w-full sm:w-[180px] rounded-[8px] items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[18px] lg:text-[20px] text-[#323232] border-2 border-[#323232] hover:bg-[#323232] hover:text-white transition-colors cursor-pointer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Why SafeCircle
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-[500px] h-[600px] rounded-[10px] overflow-hidden border-[3px] border-black bg-white">
              <img 
                src={heroImage}
                alt="Woman reading book alone at home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function Problem() {
  return (
    <section id="problem" className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            You want to know your parent or loved one is okay—without becoming their caretaker
          </h2>
          
          <div className="space-y-[24px] text-left mt-[48px]">
            <div className="flex gap-[16px] items-start">
              <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">I worry, but I don't want to hover.</strong> I care about a parent or loved one who lives alone, and the thought of them needing help—and no one knowing—keeps me up at night. But I don't want to become overbearing or intrusive.
              </p>
            </div>
            
            <div className="flex gap-[16px] items-start">
              <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">I don't know what I'd need to do if something happens.</strong> If my parent or loved one was suddenly hospitalized or incapacitated, I wouldn't know where to start. Bills, accounts, contacts—it would all be guesswork.
              </p>
            </div>
            
            <div className="flex gap-[16px] items-start">
              <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">Daily check-ins feel like too much—for both of us.</strong> I don't want them to feel monitored, and frankly, I don't always have time for daily calls.
              </p>
            </div>
          </div>
          
          <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[26px] text-[#838383] mt-[40px] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            You shouldn't have to choose between respecting their independence and knowing they're safe.
          </p>
        </div>
      </div>
    </section>
  );
}

// Product 1: Wellbeing Monitor - WORRY ABOUT SOMEONE VERSION
function WellbeingMonitor() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="wellbeing-monitor" className="bg-[#fff5f0] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        
        {/* Product Title & Summary */}
        <div className="text-center mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Wellbeing monitor: Quiet reassurance, every day
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[32px] text-[#838383] max-w-[884px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            Get daily confirmation that your loved one is active and doing well—without asking them to check in. If their routine changes unexpectedly, you're notified automatically.
          </p>
        </div>

        <div className="max-w-[960px] mx-auto">
          {/* Screenshot 1 - LEFT aligned */}
          <div className="flex items-center gap-[96px] mb-[100px]">
            <div className="w-[300px] shrink-0">
              <div className="aspect-[9/16] overflow-hidden">
                <img src={imgPlaceholder} alt="Placeholder" className="w-full h-full object-cover rounded-[16px] border-[3px] border-black" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] tracking-[-1.6px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                You see daily confirmation that they are active and doing well
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle monitors activity patterns in the background. When everything is normal, you get quiet confirmation that they're going about their day.
              </p>
            </div>
          </div>

          {/* Screenshot 2 - RIGHT aligned */}
          <div className="flex items-center gap-[96px] mb-[100px]">
            <div className="flex-1">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] tracking-[-1.6px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                If something happens, you know immediately
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                When a check-in is missed, you're notified automatically. No guessing, no delay—you can reach out or check in right away.
              </p>
            </div>
            <div className="w-[300px] shrink-0">
              <div className="aspect-[9/16] overflow-hidden">
                <img src={imgPlaceholder} alt="Placeholder" className="w-full h-full object-cover rounded-[16px] border-[3px] border-black" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Selling Points */}
        <div className="flex gap-[44px] justify-center mb-[60px]">
          <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex-1 max-w-[340px]">
            <div className="flex gap-[12px] items-start">
              <div className="bg-[rgba(248,145,138,0.1)] rounded-[8px] size-[40px] flex items-center justify-center shrink-0">
                <CheckCircle className="size-[20px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[22.5px] text-[#323232] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Peace of mind without intrusion
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  They keep their independence, you keep your peace of mind
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex-1 max-w-[340px]">
            <div className="flex gap-[12px] items-start">
              <div className="bg-[rgba(248,145,138,0.1)] rounded-[8px] size-[40px] flex items-center justify-center shrink-0">
                <Users className="size-[20px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[22.5px] text-[#323232] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  No daily check-in calls
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Automatic updates save time for both of you
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex-1 max-w-[340px]">
            <div className="flex gap-[12px] items-start">
              <div className="bg-[rgba(248,145,138,0.1)] rounded-[8px] size-[40px] flex items-center justify-center shrink-0">
                <Bell className="size-[20px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[22.5px] text-[#323232] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Immediate alerts when it matters
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  You're notified right away if something's wrong
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-[8px] text-[#f8918a] font-['Open_Sans:SemiBold',sans-serif] text-[16px] hover:underline cursor-pointer"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Learn more about how Wellbeing Monitor works
            <ChevronDown className={`size-[20px] transition-transform ${showDetails ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expanded Learn More Content */}
        {showDetails && (
          <div className="max-w-[800px] mx-auto mt-[60px] space-y-[48px] animate-[fadeIn_0.3s_ease-in]">
            <div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                How it works
              </h3>
              <div className="space-y-[20px]">
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    1
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Your loved one sets up SafeCircle using their phone and any smart devices they already have. The app learns their normal daily patterns over a few weeks.
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    2
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Each day, when their activity matches their normal pattern, you receive quiet confirmation. A simple status update shows they're active and doing well.
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    3
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    If their routine changes significantly—for example, no activity for an unusual length of time—SafeCircle alerts you immediately. You can reach out to check on them right away.
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    4
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    They can pause monitoring anytime if they're traveling or their schedule changes. No false alarms, no unnecessary worry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                What this is not
              </h3>
              <div className="space-y-[16px] font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>
                  <strong>Not emergency services.</strong> SafeCircle alerts you, not 911. It's designed to notify family members who can check in and take appropriate action.
                </p>
                <p>
                  <strong>Not medical monitoring.</strong> It doesn't track health metrics, fall detection, or vital signs. It observes general activity patterns only.
                </p>
                <p>
                  <strong>Not surveillance.</strong> No cameras, no GPS tracking, no recording. SafeCircle respects their privacy while keeping you informed.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// Product 2: Legacy Planner - WORRY ABOUT SOMEONE VERSION
function LegacyPlanner() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="legacy-planner" className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        
        {/* Product Title & Summary */}
        <div className="text-center mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Legacy Planner: The details you'd need if something happens
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[32px] text-[#838383] max-w-[884px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            Help them organize everything you'd need to access—financial accounts, contacts, recurring bills, personal wishes. So you're not left searching if something happens.
          </p>
        </div>

        <div className="max-w-[960px] mx-auto">
          {/* Screenshot 1 - LEFT aligned */}
          <div className="flex items-center gap-[96px] mb-[100px]">
            <div className="w-[300px] shrink-0">
              <div className="aspect-[9/16] overflow-hidden">
                <img src={imgPlaceholder} alt="Placeholder" className="w-full h-full object-cover rounded-[16px] border-[3px] border-black" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] tracking-[-1.6px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We guide them through what to organize
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle provides clear categories and prompts, making it easy for them to organize everything at their own pace. Nothing is shared until they're ready.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Selling Points */}
        <div className="flex gap-[44px] justify-center mb-[60px]">
          <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[16px] flex-1 max-w-[340px]">
            <div className="flex gap-[12px] items-start">
              <div className="bg-white rounded-[8px] size-[40px] flex items-center justify-center shrink-0">
                <FileText className="size-[20px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[22.5px] text-[#323232] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Clear guidance, not guesswork
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  You'll know exactly what to do if something happens
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[16px] flex-1 max-w-[340px]">
            <div className="flex gap-[12px] items-start">
              <div className="bg-white rounded-[8px] size-[40px] flex items-center justify-center shrink-0">
                <Clock className="size-[20px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[22.5px] text-[#323232] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  They control what you see
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  They decide when and what to share with you
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[16px] flex-1 max-w-[340px]">
            <div className="flex gap-[12px] items-start">
              <div className="bg-white rounded-[8px] size-[40px] flex items-center justify-center shrink-0">
                <Lock className="size-[20px] text-[#f8918a]" />
              </div>
              <div className="flex-1">
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] leading-[22.5px] text-[#323232] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Bank-level security
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  All information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-[8px] text-[#f8918a] font-['Open_Sans:SemiBold',sans-serif] text-[16px] hover:underline cursor-pointer"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Learn more about how Legacy Planner works
            <ChevronDown className={`size-[20px] transition-transform ${showDetails ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expanded Learn More Content */}
        {showDetails && (
          <div className="max-w-[800px] mx-auto mt-[60px] space-y-[48px] animate-[fadeIn_0.3s_ease-in]">
            <div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                How it works
              </h3>
              <div className="space-y-[20px]">
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    1
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    The Legacy Planner guides them through clear categories: financial accounts, recurring bills, emergency contacts, legal documents, and personal wishes.
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    2
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    They can fill it in at their own pace, starting with the essentials and adding more detail over time. The app makes it easy to know what's important.
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    3
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    They control who can access what, and when. They can grant you access immediately, or set conditions for when the information becomes available.
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[28px] h-[28px] bg-[#f8918a] text-white rounded-full flex items-center justify-center shrink-0 font-['Open_Sans:Bold',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    4
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#323232] pt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Everything is encrypted and secure. They can update information anytime as their life changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                What this is not
              </h3>
              <div className="space-y-[16px] font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>
                  <strong>Not a legal will.</strong> This organizes practical information, but doesn't replace estate planning documents. It's the companion—the details that are hard to find.
                </p>
                <p>
                  <strong>Not automatic access.</strong> Nothing is visible to you unless they explicitly grant access. They stay in control of their information.
                </p>
                <p>
                  <strong>Not a password manager.</strong> While they can note where credentials are stored, SafeCircle is designed for organizing important information for emergencies.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// Privacy & Security Section
function PrivacySecurity() {
  return (
    <section id="privacy" className="bg-[#fff5f0] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-[80px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Their privacy is protected
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383] max-w-[700px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle gives you peace of mind without invading their privacy or exposing their health status.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-[32px]">
            <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
              <Shield className="w-[40px] h-[40px] text-[#f8918a] mb-[16px]" />
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[22px] leading-[28px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No health data shared
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle doesn't track or share health information. You only see activity patterns—nothing medical or personal.
              </p>
            </div>
            
            <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
              <Lock className="w-[40px] h-[40px] text-[#f8918a] mb-[16px]" />
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[22px] leading-[28px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Bank-level encryption
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                All data is encrypted with the same technology banks use. They control exactly who can access what, and when.
              </p>
            </div>
            
            <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
              <Users className="w-[40px] h-[40px] text-[#f8918a] mb-[16px]" />
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[22px] leading-[28px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                They control access
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                They choose what you can see and when. They can change permissions anytime—it's always their decision.
              </p>
            </div>
            
            <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px]">
              <Activity className="w-[40px] h-[40px] text-[#f8918a] mb-[16px]" />
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[22px] leading-[28px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No cameras or GPS
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We never track location or use cameras. SafeCircle respects their privacy while keeping you informed.
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Will they need to remember to check in daily?',
      answer: 'No. SafeCircle works passively in the background. There are no buttons to press, no daily tasks, and nothing to remember.'
    },
    {
      question: 'What if they don\'t have smart devices?',
      answer: 'SafeCircle works with just a smartphone, though adding smart devices improves accuracy. If they don\'t have any smart home devices, you can help them set up affordable smart lights with physical switches like Philips Hue or Wyze bulbs. You can also use a spare smartphone or tablet they might have. It makes setup a bit more involved, but doesn\'t require a big investment.'
    },
    {
      question: 'How is their information protected?',
      answer: 'All data is encrypted with bank-level security. They control exactly who can access what, and when. Information is never shared without their permission.'
    },
    {
      question: 'What if they go on vacation or change their routine?',
      answer: 'They can easily pause monitoring or adjust settings anytime. No false alarms, no unnecessary worry for either of you.'
    },
    {
      question: 'Can I set this up for them?',
      answer: 'They need to set up their own SafeCircle account and add you as a trusted contact. This ensures they stay in control of their privacy and the information shared.'
    }
  ];

  return (
    <section className="bg-[#fff5f0] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="text-center mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Common questions
          </h2>
        </div>
        
        <div className="max-w-[900px] mx-auto space-y-[16px]">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-[2px] border-black rounded-[8px] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-[32px] py-[24px] flex items-center justify-between text-left hover:bg-[#ffebe5] transition-colors cursor-pointer"
              >
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-[#323232] pr-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-[24px] h-[24px] text-[#323232] shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-[32px] pb-[24px] pt-[0px]">
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
  const handleGetStarted = () => {
    smoothScrollTo('pricing');
  };

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Peace of mind for both of you
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383] mb-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Help them get started with SafeCircle today. 14-day money-back guarantee.
          </p>
          <button onClick={handleGetStarted} className="inline-flex items-center justify-center bg-[#f8918a] h-[60px] px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default function WorryAboutSomeonePage() {
  useEffect(() => {
    localStorage.setItem('audienceChoice', 'worry-about-someone');
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <MetaTags />
      <Header />
      <Hero />
      <Problem />
      <WellbeingMonitor />
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