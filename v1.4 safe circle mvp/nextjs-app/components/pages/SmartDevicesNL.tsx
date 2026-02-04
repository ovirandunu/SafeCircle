'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SmartDevicesNL() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const devices = [
    {
      category: 'Smart Home Hubs & Assistenten',
      items: [
        { name: 'Amazon Alexa', description: 'Alle Echo apparaten en Alexa-compatibele smart speakers' },
        { name: 'Google Home / Nest', description: 'Google Assistant apparaten en Nest smart home producten' }
      ]
    },
    {
      category: 'Slimme Verlichting',
      items: [
        { name: 'Philips Hue', description: 'Alle Philips Hue slimme lampen, strips en armaturen' },
        { name: 'LIFX', description: 'Wi-Fi slimme lampen' }
      ]
    },
    {
      category: 'Slimme Thermostaten',
      items: [
        { name: 'Nest Learning Thermostat', description: 'Alle Nest thermostaat modellen' },
        { name: 'Ecobee', description: 'SmartThermostat en kamer sensors' }
      ]
    },
    {
      category: 'Slimme Sloten & Beveiliging',
      items: [
        { name: 'August Smart Lock', description: 'Sleutelloze toegang en toegangscontrole' },
        { name: 'Ring Video Doorbell', description: 'Deurbel camera\'s en bewegingssensoren' }
      ]
    },
    {
      category: 'Slimme Stekkers & Schakelaars',
      items: [
        { name: 'TP-Link Kasa Smart Plug', description: 'Wi-Fi stopcontact bediening' },
        { name: 'Amazon Smart Plug', description: 'Werkt met Alexa' }
      ]
    },
    {
      category: 'Wearables & Gezondheidsapparaten',
      items: [
        { name: 'Apple Watch', description: 'Activiteit en gezondheid monitoring' },
        { name: 'Fitbit', description: 'Alle Fitbit fitness trackers en smartwatches' }
      ]
    },
    {
      category: 'Je Smartphone',
      items: [
        { name: 'iPhone', description: 'iOS 14 en later' },
        { name: 'Android', description: 'Android 9.0 en later' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Welke slimme apparaten kan ik koppelen?',
      answer: 'SafeCircle integreert met de meest populaire smart home apparaten en platformen. We ondersteunen alle grote merken waaronder Philips Hue, Amazon Alexa, Google Home/Nest, Apple HomeKit, Ring, Fitbit en meer. We werken actief aan het toevoegen van meer apparaatintegraties. Je smartphone alleen levert al waardevolle data, maar slimme apparaten toevoegen verbetert de nauwkeurigheid.'
    },
    {
      question: 'Moet ik nieuwe apparaten kopen?',
      answer: 'Helemaal niet! SafeCircle werkt met apparaten die je waarschijnlijk al hebt. Je smartphone is het belangrijkste apparaat, en veel mensen hebben al een slimme speaker (Alexa, Google Home) of een slimme thermostaat. Als je geen slimme apparaten hebt, kunnen we betaalbare opties aanbevelen vanaf €10-15 voor een slimme stekker.'
    },
    {
      question: 'Hoe verbindt SafeCircle met mijn apparaten?',
      answer: 'SafeCircle gebruikt veilige API-verbindingen via de cloud services van de fabrikant. Je autoriseert gewoon SafeCircle om toegang te krijgen tot je apparaatdata tijdens de installatie—vergelijkbaar met het koppelen van je slimme speaker aan een muziek-app. We hebben nooit fysieke toegang tot je apparaten nodig en kunnen ze niet bedienen.'
    },
    {
      question: 'Welke data verzamelt SafeCircle van mijn apparaten?',
      answer: 'SafeCircle verzamelt alleen activiteitstijden en basis gebruikspatronen—geen specifieke details. We zien bijvoorbeeld "telefoon ontgrendeld om 08:15" maar niet wat je erop deed. Voor slimme lampen zien we "woonkamer lamp aangezet" maar niet helderheid of kleur. We krijgen nooit toegang tot camera\'s, microfoons of persoonlijke content.'
    },
    {
      question: 'Kan SafeCircle mijn apparaten bedienen?',
      answer: 'Nee. SafeCircle is alleen-lezen—het monitort je apparaat activiteitspatronen maar kan je apparaten niet bedienen, aanpassen of activeren. We kunnen geen lampen aan/uit zetten, je thermostaat aanpassen of deuren ontgrendelen. Je apparaten blijven volledig onder jouw controle.'
    },
    {
      question: 'Wat als een apparaat dat ik heb niet op de lijst staat?',
      answer: 'We voegen voortdurend nieuwe apparaatintegraties toe. Als je apparaat werkt met Alexa, Google Home of Apple HomeKit, werkt het waarschijnlijk met SafeCircle zelfs als het niet expliciet vermeld staat. Neem contact op met ons support team en we helpen je de compatibiliteit te controleren en voegen mogelijk een integratie toe voor je specifieke apparaat.'
    },
    {
      question: 'Hoeveel apparaten heb ik nodig om SafeCircle goed te laten werken?',
      answer: 'Je smartphone alleen biedt al een solide basis voor monitoring. Het toevoegen van 1-2 slimme apparaten op belangrijke plekken (zoals een slimme stekker voor je slaapkamer lamp of een slimme speaker in je woonkamer) verbetert de detectie nauwkeurigheid significant. De meeste gebruikers vinden dat 2-4 gekoppelde apparaten uitstekende dekking biedt.'
    },
    {
      question: 'Is mijn smart home data veilig?',
      answer: 'Absoluut. We gebruiken bankwaardige versleuteling (AES-256) voor alle datatransmissie en opslag. Apparaatverbindingen worden geautoriseerd via officiële fabrikant API\'s met jouw expliciete toestemming. We verkopen nooit apparaatdata, en je kunt de toegang intrekken of elk apparaat op elk moment loskoppelen vanuit je SafeCircle dashboard.'
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
              Compatibele Slimme Apparaten
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle werkt met de meest populaire smart home apparaten die je al hebt. We werken actief aan het toevoegen van meer apparaatintegraties. Geen camera's, geen inbreuk—alleen intelligente monitoring via je bestaande technologie.
            </p>
          </div>
        </div>
      </section>

      {/* Devices List */}
      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[40px] mb-12 sm:mb-16 lg:mb-[80px]">
            {devices.map((category, idx) => (
              <div key={idx} className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {category.category}
                </h3>
                <ul className="space-y-[16px]">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-[12px] items-start">
                      <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                      <div>
                        <div className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.name}
                        </div>
                        <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.description}
                        </div>
                      </div>
                    </li>
                  ))}
                  {category.category !== 'Je Smartphone' && (
                    <li className="flex gap-[12px] items-start pt-[8px]">
                      <div className="w-[8px] h-[8px] bg-[#838383] rounded-full mt-[8px] shrink-0" />
                      <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Meer apparaten komen binnenkort
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-[80px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Vragen over Slimme Apparaten
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Alles wat je moet weten over apparaat compatibiliteit
            </p>
          </div>

          <div className="space-y-[16px]">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-[2px] border-black rounded-[8px] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 lg:px-[32px] py-4 sm:py-5 lg:py-[24px] flex items-center justify-between text-left hover:bg-[#fff5f0] transition-colors cursor-pointer"
                >
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-[#323232] pr-4 sm:pr-6 lg:pr-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] text-[#323232] shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 lg:px-[32px] pb-4 sm:pb-5 lg:pb-[24px] pt-[0px]">
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
