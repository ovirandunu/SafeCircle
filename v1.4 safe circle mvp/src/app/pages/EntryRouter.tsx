import { Link } from 'react-router-dom';
import { User, Heart } from 'lucide-react';
import svgPaths from '../../imports/svg-0o41b6lr74';
import { trackAudienceChoice } from '../../utils/analytics';

export default function EntryRouter() {
  const handleAudienceChoice = (audience: 'live-alone' | 'worry-about-someone') => {
    localStorage.setItem('audienceChoice', audience);
    trackAudienceChoice(audience);
  };

  return (
    <div className="bg-white min-h-screen">
      
      <section className="bg-[#fff5f0] min-h-screen relative overflow-hidden flex items-center py-8 sm:py-12">
        {/* Decorative background blobs */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FFE388] to-[#FFDD6E] opacity-20 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F9A49E] to-[#F9675D] opacity-20 blur-3xl" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px] py-8 sm:py-12 lg:py-[60px] relative w-full">
          <div className="max-w-[900px] mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-[5.293px] mb-8 sm:mb-12 lg:mb-[48px]">
              <div className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_6046_123_entry)">
                    <path d={svgPaths.p23d6e800} fill="#f8918a" />
                    <path d={svgPaths.p10637500} fill="#f8918a" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6046_123_entry">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="font-['DM_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24.943px] tracking-[-0.7458px] text-[#323232]" style={{ fontVariationSettings: "'opsz' 14" }}>
                SafeCircle
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[70px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4 sm:mb-6 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Peace of mind for people who live alone and those who care about them.
            </h1>
            
            {/* Subheadline */}
            <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.4] tracking-[0.5px] text-[#838383] mb-8 sm:mb-12 lg:mb-[60px] max-w-[700px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Choose what fits your situation
            </p>
            
            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[40px] max-w-[900px] mx-auto">
              {/* I Live Alone */}
              <Link 
                to="/live-alone"
                className="group bg-white border-[3px] border-black rounded-[12px] p-6 sm:p-8 lg:p-[48px] hover:shadow-[8px_8px_0px_0px_rgba(248,145,138,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(248,145,138,1)] transition-all cursor-pointer"
                onClick={() => handleAudienceChoice('live-alone')}
              >
                <div className="bg-[#f8918a] w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] rounded-[12px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[24px] mx-auto group-hover:scale-110 transition-transform">
                  <User className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] text-white" />
                </div>
                <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.3] text-[#323232] mb-2 sm:mb-3 lg:mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  I live alone
                </h2>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Stay independent while giving loved ones reassurance
                </p>
              </Link>
              
              {/* I Worry About Someone */}
              <Link 
                to="/worry-about-someone"
                className="group bg-white border-[3px] border-black rounded-[12px] p-6 sm:p-8 lg:p-[48px] hover:shadow-[8px_8px_0px_0px_rgba(248,145,138,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(248,145,138,1)] transition-all cursor-pointer"
                onClick={() => handleAudienceChoice('worry-about-someone')}
              >
                <div className="bg-[#f8918a] w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] rounded-[12px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[24px] mx-auto group-hover:scale-110 transition-transform">
                  <Heart className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] text-white" />
                </div>
                <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.3] text-[#323232] mb-2 sm:mb-3 lg:mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  I worry about someone who lives alone
                </h2>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Get reassurance without intruding on their life
                </p>
              </Link>
            </div>
            
            {/* Trust indicator */}
            <div className="mt-12 sm:mt-16 lg:mt-[80px] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-[40px] opacity-60">
              <div className="flex items-center gap-[8px]">
                <div className="w-[6px] h-[6px] bg-[#f8918a] rounded-full" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] sm:text-[13px] lg:text-[14px] text-[#838383]">14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="w-[6px] h-[6px] bg-[#f8918a] rounded-full" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] sm:text-[13px] lg:text-[14px] text-[#838383]">Bank-level security</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="w-[6px] h-[6px] bg-[#f8918a] rounded-full" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] sm:text-[13px] lg:text-[14px] text-[#838383]">No invasive monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}