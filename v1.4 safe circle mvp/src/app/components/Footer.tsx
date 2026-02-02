import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import svgPaths from '../../imports/svg-0o41b6lr74';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const getAudiencePage = () => {
    // Check if we're already on an audience page
    if (location.pathname === '/live-alone') return '/live-alone';
    if (location.pathname === '/worry-about-someone') return '/worry-about-someone';
    
    // Otherwise check localStorage
    const savedAudience = localStorage.getItem('audienceChoice');
    return savedAudience ? `/${savedAudience}` : '/live-alone'; // Default to live-alone
  };

  // Helper function to get the correct route based on language
  const getLocalizedRoute = (basePath: string) => {
    return i18n.language === 'nl' ? `${basePath}-nl` : basePath;
  };

  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    const audiencePage = getAudiencePage();
    
    // If we're on the audience page, scroll to the section
    if (location.pathname === audiencePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to audience page with hash
      window.location.href = `${audiencePage}#${sectionId}`;
    }
  };

  const handlePageLink = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <footer className="bg-[#323232] text-white py-12 sm:py-16 lg:py-[60px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-[80px] mb-12 sm:mb-16 lg:mb-[60px]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 sm:mb-6 lg:mb-[24px]">
              <div className="flex items-center gap-[5.293px]">
                <div className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_6046_123_footer)">
                      <path d={svgPaths.p23d6e800} fill="#f8918a" />
                      <path d={svgPaths.p10637500} fill="#f8918a" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6046_123_footer">
                        <rect fill="white" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="font-['DM_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24.943px] tracking-[-0.7458px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  SafeCircle
                </div>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] leading-[1.6] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('brand.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[15px] sm:text-[16px] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t('footer.product.heading')}</h4>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-[12px]">
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleSectionLink(e, 'how-it-works')}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white cursor-pointer" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.product.why')}
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleSectionLink(e, 'pricing')}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white cursor-pointer" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.product.pricing')}
                </a>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => handleSectionLink(e, 'privacy')}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white cursor-pointer" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.product.privacy')}
                </a>
              </li>
              <li>
                <Link 
                  to={getLocalizedRoute('/smart-devices')}
                  onClick={() => handlePageLink(getLocalizedRoute('/smart-devices'))}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.product.devices')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[15px] sm:text-[16px] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t('footer.support.heading')}</h4>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-[12px]">
              <li>
                <Link 
                  to={getLocalizedRoute('/help-center')}
                  onClick={() => handlePageLink(getLocalizedRoute('/help-center'))}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.support.help')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => handlePageLink('/contact')}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.support.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[15px] sm:text-[16px] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t('footer.legal.heading')}</h4>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-[12px]">
              <li>
                <Link 
                  to={getLocalizedRoute('/privacy')}
                  onClick={() => handlePageLink(getLocalizedRoute('/privacy'))}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getLocalizedRoute('/terms')}
                  onClick={() => handlePageLink(getLocalizedRoute('/terms'))}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.legal.terms')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getLocalizedRoute('/security')}
                  onClick={() => handlePageLink(getLocalizedRoute('/security'))}
                  className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#fff5f0] hover:text-white" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {t('footer.legal.security')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 lg:pt-[32px]">
          <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] sm:text-[13px] lg:text-[14px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t('brand.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}