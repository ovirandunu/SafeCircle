'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HelpCenterNL() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    {
      title: 'Aan de Slag',
      articles: [
        { title: 'Hoe je je SafeCircle account instelt', link: '#' },
        { title: 'Je eerste slimme apparaat koppelen', link: '#' },
        { title: 'Vertrouwde contacten toevoegen', link: '#' },
        { title: 'Je monitoring dashboard begrijpen', link: '#' }
      ]
    },
    {
      title: 'Compatibele Slimme Apparaten',
      articles: [
        { title: 'Smart home hubs (Alexa, Google Home)', link: '/smart-devices-nl' },
        { title: 'Slimme verlichting (Philips Hue, LIFX)', link: '/smart-devices-nl' },
        { title: 'Slimme thermostaten (Nest, Ecobee)', link: '/smart-devices-nl' },
        { title: 'Slimme stekkers en wearables', link: '/smart-devices-nl' }
      ]
    },
    {
      title: 'Apparaat Installatie',
      articles: [
        { title: 'Philips Hue lampen koppelen', link: '#' },
        { title: 'Amazon Alexa integreren', link: '#' },
        { title: 'Google Home/Nest instellen', link: '#' },
        { title: 'Problemen met apparaatverbindingen oplossen', link: '#' }
      ]
    },
    {
      title: 'Monitoring & Waarschuwingen',
      articles: [
        { title: 'Hoe activiteitsmonitoring werkt', link: '#' },
        { title: 'Waarschuwingsgevoeligheid aanpassen', link: '#' },
        { title: 'Wat een notificatie triggert', link: '#' },
        { title: 'Reageren op check-in verzoeken', link: '#' }
      ]
    },
    {
      title: 'Account & Facturatie',
      articles: [
        { title: 'Je abonnement wijzigen', link: '#' },
        { title: 'Betaalgegevens updaten', link: '#' },
        { title: 'Annulering en terugbetalingsbeleid', link: '#' },
        { title: 'Account instellingen beheren', link: '#' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Hoe begin ik met SafeCircle?',
      answer: 'Download de SafeCircle app uit de App Store of Google Play, maak je account aan en volg de begeleide installatie om je apparaten te koppelen en vertrouwde contacten toe te voegen. Het hele proces duurt normaal 10-15 minuten.'
    },
    {
      question: 'Wat gebeurt er tijdens de leerperiode?',
      answer: 'SafeCircle besteedt de eerste 7-10 dagen aan het leren van je normale routines en patronen. Tijdens deze tijd observeert het systeem je apparaat gebruik maar stuurt het geen waarschuwingen naar vertrouwde contacten. Je ontvangt voortgangsupdates terwijl het systeem je patronen leert.'
    },
    {
      question: 'Hoe reageer ik op een check-in notificatie?',
      answer: 'Wanneer je een check-in notificatie ontvangt, open je gewoon de app en tik je op "Alles goed" om te bevestigen dat het goed met je gaat. Je kunt ook direct je vertrouwde contacten bellen of appen. Als je niet reageert binnen de aangegeven tijd, worden je contacten op de hoogte gebracht.'
    },
    {
      question: 'Kan ik de monitoring tijdelijk pauzeren?',
      answer: 'Ja! Je kunt "Afwezig Modus" inschakelen in de app wanneer je op reis bent of als je routine significant verandert. Dit past de monitoring parameters tijdelijk aan. Je kunt ook een kort berichtje naar je vertrouwde contacten sturen om uit te leggen dat je weg bent.'
    },
    {
      question: 'Hoe wijzig ik mijn vertrouwde contacten?',
      answer: 'Ga naar Instellingen > Vertrouwde Contacten in de app. Je kunt op elk moment contacten toevoegen, verwijderen of wijzigen. Wijzigingen worden direct doorgevoerd, en je kunt voor elk contact individueel de notificatie voorkeuren en toegangsniveaus aanpassen.'
    },
    {
      question: 'Wat als ik hulp nodig heb bij het instellen van een specifiek apparaat?',
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
              Helpcentrum
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Vind antwoorden, krijg ondersteuning en leer hoe je het meeste uit SafeCircle haalt
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions Section - Moved to top */}
      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="text-center mb-[60px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[48px] leading-[52px] tracking-[-2px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Veelgestelde Vragen
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
                        Ons support team kan helpen! Bezoek ons{' '}
                        <button 
                          onClick={handleContactClick}
                          className="text-[#f8918a] underline hover:text-[#f9675d] transition-colors cursor-pointer"
                        >
                          contactformulier
                        </button>
                        {' '}en vermeld je apparaatmodel. We bieden stap-voor-stap begeleiding en hebben video tutorials voor de meeste populaire apparaten in de app.
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
              Hulp nodig?
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-[#fff5f0] mb-6 sm:mb-7 lg:mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Ons ondersteuningsteam staat klaar om je te helpen. Neem contact op en we reageren binnen 24 uur.
            </p>
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center justify-center bg-[#f8918a] h-[48px] sm:h-[52px] lg:h-[56px] px-[32px] sm:px-[36px] lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer" 
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Neem Contact Op
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
