import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HelpCenter() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    {
      title: 'Getting Started',
      articles: [
        { title: 'How to set up your SafeCircle account', link: '#' },
        { title: 'Connecting your first smart device', link: '#' },
        { title: 'Adding trusted contacts', link: '#' },
        { title: 'Understanding your monitoring dashboard', link: '#' }
      ]
    },
    {
      title: 'Compatible Smart Devices',
      articles: [
        { title: 'Smart home hubs (Alexa, Google Home)', link: '/smart-devices' },
        { title: 'Smart lighting (Philips Hue, LIFX)', link: '/smart-devices' },
        { title: 'Smart thermostats (Nest, Ecobee)', link: '/smart-devices' },
        { title: 'Smart plugs and wearables', link: '/smart-devices' }
      ]
    },
    {
      title: 'Device Setup',
      articles: [
        { title: 'Connecting Philips Hue lights', link: '#' },
        { title: 'Integrating Amazon Alexa', link: '#' },
        { title: 'Setting up Google Home/Nest', link: '#' },
        { title: 'Troubleshooting device connections', link: '#' }
      ]
    },
    {
      title: 'Monitoring & Alerts',
      articles: [
        { title: 'How activity monitoring works', link: '#' },
        { title: 'Customizing alert sensitivity', link: '#' },
        { title: 'What triggers a notification', link: '#' },
        { title: 'Responding to check-in requests', link: '#' }
      ]
    },
    {
      title: 'Account & Billing',
      articles: [
        { title: 'Changing your subscription plan', link: '#' },
        { title: 'Updating payment information', link: '#' },
        { title: 'Cancellation and refund policy', link: '#' },
        { title: 'Managing account settings', link: '#' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with SafeCircle?',
      answer: 'Download the SafeCircle app from the App Store or Google Play, create your account, and follow the guided setup to connect your devices and add trusted contacts. The entire process typically takes 10-15 minutes.'
    },
    {
      question: 'What happens during the learning period?',
      answer: 'SafeCircle spends the first 7-10 days learning your normal routines and patterns. During this time, the system observes your device usage but won\'t send alerts to trusted contacts. You\'ll receive progress updates as the system learns your patterns.'
    },
    {
      question: 'How do I respond to a check-in notification?',
      answer: 'When you receive a check-in notification, simply open the app and tap "I\'m Fine" to confirm you\'re okay. You can also call or text your trusted contacts directly. If you don\'t respond within the specified time window, your contacts will be notified.'
    },
    {
      question: 'Can I pause monitoring temporarily?',
      answer: 'Yes! You can enable "Away Mode" in the app when traveling or if your routine changes significantly. This temporarily adjusts monitoring parameters. You can also send a quick message to your trusted contacts explaining you\'ll be away.'
    },
    {
      question: 'How do I change my trusted contacts?',
      answer: 'Go to Settings > Trusted Contacts in the app. You can add, remove, or modify contacts at any time. Changes take effect immediately, and you can adjust each contact\'s notification preferences and access levels individually.'
    },
    {
      question: 'What if I need help setting up a specific device?',
      answer: 'contact_form_link' // Special marker for rendering
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[70px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('help.title')}
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('help.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions Section - Moved to top */}
      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="text-center mb-[60px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[48px] leading-[52px] tracking-[-2px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('help.faqtitle')}
            </h2>
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
                    {faq.answer === 'contact_form_link' ? (
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Our support team can help! Visit our{' '}
                        <button 
                          onClick={handleContactClick}
                          className="text-[#f8918a] underline hover:text-[#f9675d] transition-colors cursor-pointer"
                        >
                          contact form
                        </button>
                        {' '}and include your device model. We'll provide step-by-step guidance and have video tutorials for most popular devices in the app.
                      </p>
                    ) : (
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[40px]">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {category.title}
                </h3>
                <ul className="space-y-[12px]">
                  {category.articles.map((article, articleIdx) => (
                    <li key={articleIdx}>
                      <a href={article.link} className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] hover:text-[#f8918a] transition-colors flex items-center gap-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span>→</span>
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="bg-white py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="bg-[#323232] border-[3px] border-black rounded-[16px] p-6 sm:p-10 lg:p-[60px] text-center">
            <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] text-white mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('help.cta.title')}
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-[#fff5f0] mb-6 sm:mb-7 lg:mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t('help.cta.description')}
            </p>
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center justify-center bg-[#f8918a] h-[48px] sm:h-[52px] lg:h-[56px] px-[32px] sm:px-[36px] lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" 
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {t('help.cta.button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}