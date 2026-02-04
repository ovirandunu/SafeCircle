'use client';
import { HeartPulse } from 'lucide-react';
import { getFigmaAsset } from '@/lib/figma-assets';

const heroImage = getFigmaAsset('85986970382cf0787f06862b543e8b8721cd944f');

function smoothScrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}

// Hero Section
export default function Hero() {
  return (
    <section className="bg-[#fff5f0] relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFE388] to-[#FFDD6E] opacity-20 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F9A49E] to-[#F9675D] opacity-20 blur-3xl" />
      
      {/* Mobile & Tablet: Centered layout */}
      <div className="lg:hidden min-h-screen flex items-center justify-center px-4 relative">
        <div className="flex flex-col items-center gap-12 w-full max-w-[343px] py-20">
          {/* Title + Subtitle */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] leading-[1.1] tracking-[-0.03em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Daily reassurance on autopilot
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.4] tracking-[0.5px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle gives you safety without surveillance. Peace of mind for you and your loved ones, without compromising your independence or privacy.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <button 
              onClick={() => smoothScrollTo('pricing')} 
              className="bg-[#f8918a] h-[52px] w-full rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" 
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Get Started
            </button>
            <button
              onClick={() => smoothScrollTo('problem')}
              className="bg-transparent h-[52px] w-full rounded-[4px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-[#323232] border-2 border-[#323232] hover:bg-[#323232] hover:text-white transition-colors cursor-pointer"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Why SafeCircle
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-[70px] pt-[165px] pb-[93px] relative">
        <div className="flex items-start justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-[29px] max-w-[743px] pt-[80px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[70px] leading-[70px] tracking-[-3.2px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Live Alone, <br />Never Unnoticed
              </h1>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[24px] leading-[26px] tracking-[1px] text-[#838383] max-w-[674px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Automatic wellbeing monitoring and one secure place for everything your loved ones would need—without giving up your independence.
              </p>
            </div>
            
            <div className="flex gap-[27px]">
              <button 
                onClick={() => smoothScrollTo('pricing')} 
                className="bg-[#f8918a] h-[60px] w-[200px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Get Started
              </button>
              <button
                onClick={() => smoothScrollTo('problem')}
                className="bg-white h-[60px] w-[180px] rounded-[4px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-[#323232] border-2 border-[#323232] hover:bg-[#323232] hover:text-white transition-colors cursor-pointer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Why SafeCircle
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="w-[500px] h-[600px] rounded-[10px] overflow-hidden border-[3px] border-black bg-white">
              <img 
                src={heroImage}
                alt="Woman reading book alone at home"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-[-40px] left-[-120px] bg-white rounded-[10px] border-[3px] border-black shadow-[14px_0px_35px_0px_rgba(248,145,138,0.2)] p-[24px] w-[275px]">
              <div className="flex items-center gap-[12px]">
                <HeartPulse className="w-[24px] h-[24px] text-[#f8918a]" />
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] leading-[22px] text-[#323232]">
                  Peace of mind for you and your loved ones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
