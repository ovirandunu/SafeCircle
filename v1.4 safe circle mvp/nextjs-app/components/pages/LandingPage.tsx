'use client';

import { Activity, Users, ChevronDown, HeartPulse, Shield, Bell, Lock, FileText } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import Hero from './LandingPageHero';

// Smooth scroll helper with ease-in-out
function smoothScrollTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startPosition = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top + startPosition - 100; // 100px offset for header
  const distance = targetPosition - startPosition;
  const duration = 1000; // 1 second
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

// Problem Section
function Problem() {
  return (
    <section id="problem" className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Living Alone Brings Responsibility
          </h2>
          
          <div className="space-y-[24px] text-left mt-[48px]">
            <div className="flex gap-[16px] items-start">
              <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">Being unnoticed if something goes wrong.</strong> If you fall ill or get injured at home, there may be no one around to notice right away. That uncertainty can linger in the back of your mind.
              </p>
            </div>
            
            <div className="flex gap-[16px] items-start">
              <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">Wanting independence, with a safety net.</strong> You want to live life on your own terms, while knowing that someone would be alerted if your normal routine suddenly changes.
              </p>
            </div>
            
            <div className="flex gap-[16px] items-start">
              <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[10px] shrink-0" />
              <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <strong className="text-[#323232]">Practical information spread everywhere.</strong> Important details—accounts, recurring bills, contacts, preferences—are often scattered. Organizing them feels important, but also easy to postpone.
              </p>
            </div>
          </div>
          
          <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[26px] text-[#838383] mt-[40px] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            You shouldn't have to choose between independence and reassurance—for yourself or for the people who care about you.
          </p>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function Solution() {
  return (
    <section className="bg-[#fff5f0] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="flex items-center gap-[80px]">
          <div className="flex-1">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              A Quiet Safety Net That Respects Your Life
            </h2>
            
            <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[32px] text-[#838383] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle learns your normal daily patterns—such as phone use and regular activity—using devices you already have. It works with just your smartphone, and can optionally connect to simple smart devices for added reliability.
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[32px] text-[#838383] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              There are <strong className="text-[#323232]">no cameras, no GPS tracking, no listening devices, and no buttons to press</strong>. SafeCircle simply notices when your usual routine doesn't happen.
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[32px] text-[#838383] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              If something seems unusual, your chosen trusted contacts receive a gentle alert. If you're fine, you can easily confirm it. If you're unable to respond, they know it may be time to check in.
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[32px] text-[#838383] mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle also gives you one secure place to store practical information—accounts, recurring expenses, contacts, and personal wishes—so the people you trust aren't left guessing if they ever need to step in.
            </p>
            
            <div className="flex gap-[16px]">
              <div className="bg-white border-[2px] border-black rounded-[8px] p-[20px] flex-1">
                <div className="text-[#323232] font-['Open_Sans:Bold',sans-serif] text-[20px] mb-[4px]">Designed for High Reliability</div>
                <div className="text-[#838383] font-['Open_Sans:Regular',sans-serif] text-[14px]">Pattern-Based Detection</div>
              </div>
              <div className="bg-white border-[2px] border-black rounded-[8px] p-[20px] flex-1">
                <div className="text-[#323232] font-['Open_Sans:Bold',sans-serif] text-[20px] mb-[4px]">Near Real-Time</div>
                <div className="text-[#838383] font-['Open_Sans:Regular',sans-serif] text-[14px]">Alert Awareness</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="w-full h-[500px] rounded-[10px] overflow-hidden border-[3px] border-black bg-white">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: Activity,
      title: 'Passive Wellbeing Monitoring',
      description: 'SafeCircle notices changes in routine without requiring check-ins, wearables, or daily actions from you.'
    },
    {
      icon: Bell,
      title: 'Meaningful Alerts Only',
      description: 'Trusted contacts are notified only when something genuinely unusual occurs—not for everyday variations.'
    },
    {
      icon: Lock,
      title: 'Secure Information Vault',
      description: 'Store important details in one protected place so your loved ones have clarity if they ever need to step in.'
    },
    {
      icon: FileText,
      title: 'You Stay in Control',
      description: 'You decide who is notified, what they can access, and when. Changes can be made at any time.'
    },
    {
      icon: Shield,
      title: 'No New Habits Required',
      description: 'There\'s nothing to remember to press, charge, or wear. SafeCircle fits into how you already live.'
    },
    {
      icon: Users,
      title: 'Simple for Trusted Contacts',
      description: 'Alerts can be received via app, SMS, or email. No setup required unless they choose to.'
    }
  ];

  return (
    <section id="features" className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="text-center mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Why SafeCircle
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Simple to set up, easy to live with
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-[40px]">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[32px] hover:shadow-[8px_8px_0px_0px_rgba(248,145,138,1)] transition-shadow">
              <div className="bg-[#f8918a] w-[56px] h-[56px] rounded-[8px] flex items-center justify-center mb-[20px]">
                <feature.icon className="w-[28px] h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[22px] leading-[28px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {feature.title}
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Smart Device Reassurance */}
        <div className="mt-[60px] bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[32px] max-w-[900px] mx-auto">
          <div className="flex items-start gap-[16px]">
            <div className="bg-[#FFE388] w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0">
              <span className="text-[24px]">💡</span>
            </div>
            <div>
              <h4 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Works Without a Smart Home
              </h4>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[24px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle works using just a smartphone. Optional smart devices—like lights or thermostats—can improve reliability, but they're never required. You don't need to buy anything new to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Set Up SafeCircle',
      description: 'Install the app and connect the devices you already use. No special equipment required.'
    },
    {
      number: '02',
      title: 'Choose Trusted Contacts',
      description: 'Select who should be notified if something unusual happens.'
    },
    {
      number: '03',
      title: 'Add Information Over Time',
      description: 'Organize important details at your own pace. Even a small start can make a big difference later.'
    },
    {
      number: '04',
      title: 'Go About Your Life',
      description: 'SafeCircle works quietly in the background, ready when it\'s needed.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="text-center mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            How It Works
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Simple to set up, easy to live with
          </p>
        </div>

        <div className="grid grid-cols-4 gap-[32px]">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[32px] h-full">
                <div className="font-['DM_Sans:Bold',sans-serif] text-[48px] text-[#323232] opacity-30 mb-[16px]">
                  {step.number}
                </div>
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] leading-[26px] text-[#323232] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {step.title}
                </h3>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] leading-[22px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-[50%] right-[-16px] w-[32px] h-[2px] bg-[#323232] hidden xl:block" />
              )}
            </div>
          ))}
        </div>

        {/* For Trusted Contacts Section */}
        <div className="mt-[100px] bg-[#323232] border-[3px] border-black rounded-[12px] p-[60px]">
          <div className="flex items-center gap-[60px]">
            <div className="flex-1">
              <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] text-white mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                For Trusted Contacts
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#fff5f0] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                You're involved only when it matters.
              </p>
              <ul className="space-y-[16px]">
                <li className="flex items-start gap-[12px]">
                  <div className="w-[20px] h-[20px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                    <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-white">Alerts only when something unusual is detected</span>
                </li>
                <li className="flex items-start gap-[12px]">
                  <div className="w-[20px] h-[20px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                    <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-white">Clear access to important information in emergencies</span>
                </li>
                <li className="flex items-start gap-[12px]">
                  <div className="w-[20px] h-[20px] bg-[#f8918a] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                    <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-white">Notifications via app, SMS, or email</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="w-full h-[300px] rounded-[10px] overflow-hidden border-[3px] border-white bg-white">
                <Hero />
              </div>
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
      question: 'Does SafeCircle watch or track me?',
      answer: 'No. There are no cameras, no GPS tracking, and no audio monitoring. SafeCircle only notices whether normal activity happens—not what you\'re doing.'
    },
    {
      question: 'What causes an alert?',
      answer: 'An alert is triggered when your usual routine doesn\'t occur for an unusual amount of time. If you\'re fine, you can easily confirm that.'
    },
    {
      question: 'How secure is my information?',
      answer: 'Your information is encrypted and protected. You control exactly who can access it and when.'
    },
    {
      question: 'Can I change my trusted contacts?',
      answer: 'Yes. You can update contacts and access permissions at any time.'
    },
    {
      question: 'What if my routine changes?',
      answer: 'SafeCircle adapts to changes, and you can also temporarily adjust settings if you\'re away or traveling.'
    }
  ];

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[900px] mx-auto px-[70px]">
        <div className="text-center mb-[80px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Frequently Asked Questions
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Clear answers, no technical jargon
          </p>
        </div>

        <div className="space-y-[16px]">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#fff5f0] border-[2px] border-black rounded-[8px] overflow-hidden">
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
  return (
    <section className="bg-[#fff5f0] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="bg-[#323232] border-[3px] border-black rounded-[16px] p-[80px] text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-[20px] left-[20px] w-[60px] h-[60px] border-[3px] border-[#ffd966] opacity-40 rounded-full" />
          <div className="absolute bottom-[20px] right-[20px] w-[80px] h-[80px] border-[3px] border-[#ffd966] opacity-40 rounded-full" />
          
          <div className="relative z-10">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[64px] tracking-[-2.4px] text-white mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Peace of Mind Starts With a First Step
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[22px] leading-[32px] text-[#fff5f0] mb-[48px] max-w-[800px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Set up a quiet safety net—for yourself and the people who care about you.
            </p>
            
            <div className="flex gap-[24px] justify-center mb-[24px]">
              <button onClick={() => smoothScrollTo('pricing')} className="bg-[#f8918a] h-[60px] px-[40px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
                Get Started
              </button>
              <button
                onClick={() => smoothScrollTo('how-it-works')}
                className="bg-transparent border-[2px] border-white h-[60px] px-[40px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-white hover:bg-white/10 transition-colors cursor-pointer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                See How It Works
              </button>
            </div>
            
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#fff5f0] flex items-center justify-center gap-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <Shield className="w-[16px] h-[16px]" />
              14-day money-back guarantee • Cancel anytime • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <PricingSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}