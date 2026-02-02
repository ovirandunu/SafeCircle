import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import svgPaths from '../../imports/svg-0o41b6lr74';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const isEntryRouter = location.pathname === '/entry';
  const isAudiencePage = location.pathname === '/' || location.pathname === '/live-alone' || location.pathname === '/worry-about-someone';
  const isCheckoutPage = location.pathname === '/checkout';

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (but only after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If on an audience landing page, just scroll to top
    if (isAudiencePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on any other page, navigate to the landing page
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavClick = (sectionId: string) => {
    // Check if we're on an audience page already
    if (isAudiencePage) {
      scrollToSection(sectionId);
    } else {
      // We're on another page, need to navigate to the landing page first
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className={`bg-white w-full px-4 sm:px-8 lg:px-[70px] py-[10px] h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-between fixed top-0 z-50 border-b border-black/10 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <a href="#" onClick={handleLogoClick} className="flex items-center gap-[5.293px] cursor-pointer hover:opacity-80 transition-opacity">
        <div className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_6046_123)">
              <path d={svgPaths.p23d6e800} fill="#f8918a" />
              <path d={svgPaths.p10637500} fill="#f8918a" />
            </g>
            <defs>
              <clipPath id="clip0_6046_123">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="font-['DM_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24.943px] tracking-[-0.7458px] text-[#323232]" style={{ fontVariationSettings: "'opsz' 14" }}>
          SafeCircle
        </div>
      </a>
      
      {/* Show navigation on all pages EXCEPT the entry router */}
      {!isEntryRouter && (
        <>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-[32px] items-center">
            <div className="flex gap-[24px] items-center">
              <button onClick={() => handleNavClick('problem')} className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] cursor-pointer hover:text-[#f8918a] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('nav.why')}
              </button>
              <button onClick={() => handleNavClick('how-it-works')} className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] cursor-pointer hover:text-[#f8918a] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('nav.howitworks')}
              </button>
              <button onClick={() => handleNavClick('pricing')} className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] cursor-pointer hover:text-[#f8918a] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('nav.pricing')}
              </button>
              <button onClick={() => handleNavClick('privacy')} className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] cursor-pointer hover:text-[#f8918a] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t('nav.privacy')}
              </button>
            </div>
            <LanguageSwitcher />
            <button onClick={() => handleNavClick('pricing')} className="bg-[#f8918a] h-[40px] px-[24px] rounded-[6px] font-['Open_Sans:Bold',sans-serif] text-[14px] text-white tracking-[-0.14px] hover:bg-[#f9675d] transition-colors flex items-center justify-center cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('nav.cta')}
            </button>
          </nav>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#323232] hover:text-[#f8918a] transition-colors relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45 top-[11px]' : 'rotate-0 top-[6px]'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current top-[11px] transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45 top-[11px]' : 'rotate-0 top-[16px]'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div 
            className={`lg:hidden absolute top-[60px] sm:top-[70px] left-0 right-0 bg-white border-b-2 border-black/10 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col">
              <button 
                onClick={() => handleNavClick('problem')} 
                className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] px-4 sm:px-8 py-4 hover:bg-[#fff5f0] transition-colors text-left border-b border-black/5"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('nav.why')}
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')} 
                className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] px-4 sm:px-8 py-4 hover:bg-[#fff5f0] transition-colors text-left border-b border-black/5"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('nav.howitworks')}
              </button>
              <button 
                onClick={() => handleNavClick('pricing')} 
                className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] px-4 sm:px-8 py-4 hover:bg-[#fff5f0] transition-colors text-left border-b border-black/5"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('nav.pricing')}
              </button>
              <button 
                onClick={() => handleNavClick('privacy')} 
                className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] tracking-[-0.14px] px-4 sm:px-8 py-4 hover:bg-[#fff5f0] transition-colors text-left border-b border-black/5"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('nav.privacy')}
              </button>
              <button 
                onClick={() => handleNavClick('pricing')} 
                className="bg-[#f8918a] mx-4 sm:mx-8 my-4 h-[48px] rounded-[6px] font-['Open_Sans:Bold',sans-serif] text-[16px] text-white hover:bg-[#f9675d] transition-colors flex items-center justify-center cursor-pointer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t('nav.cta')}
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}