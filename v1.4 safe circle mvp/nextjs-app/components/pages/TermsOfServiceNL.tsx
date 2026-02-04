'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfServiceNL() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[100px] pt-[92px] sm:pt-[96px] lg:pt-[100px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gebruiksvoorwaarden
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Laatst bijgewerkt: 25 december 2025
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-[80px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="space-y-8 sm:space-y-10 lg:space-y-[48px]">
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                1. Acceptatie van Voorwaarden
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Door toegang te krijgen tot of gebruik te maken van SafeCircle's services, ga je akkoord met deze Gebruiksvoorwaarden. Als je niet akkoord gaat met deze voorwaarden, gebruik dan onze service niet. Deze voorwaarden vormen een juridisch bindende overeenkomst tussen jou en SafeCircle, Inc.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                2. Service Beschrijving
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle biedt activiteitsmonitoring en informatie organisatie services. De service:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Monitort activiteitspatronen van je gekoppelde apparaten
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Stuurt notificaties naar aangewezen vertrouwde contacten wanneer ongebruikelijke patronen worden gedetecteerd
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Biedt beveiligde opslag voor belangrijke informatie
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                3. Je Verantwoordelijkheden
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Door gebruik te maken van SafeCircle ga je ermee akkoord om:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Nauwkeurige en volledige account informatie te verstrekken
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Je login gegevens vertrouwelijk te houden
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    De service niet te misbruiken of te gebruiken voor illegale doeleinden
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Toestemming te hebben van apparaateigenaren voordat je hun apparaten koppelt
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                4. Service Beperkingen
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle is NIET:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Een noodhulpdienst of vervanging voor 112
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Een medisch apparaat of gezondheids monitoring systeem
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Een garantie dat noodgevallen worden voorkomen of gedetecteerd
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                5. Abonnementen & Betalingen
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Abonnementen worden automatisch verlengd tenzij je opzegt. Je kunt op elk moment opzeggen. Terugbetalingen zijn beschikbaar volgens ons terugbetalingsbeleid (14 dagen geld-terug-garantie voor nieuwe klanten).
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                6. Aansprakelijkheidsbeperking
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle is niet aansprakelijk voor indirecte, incidentele of gevolgschade. Onze totale aansprakelijkheid is beperkt tot het bedrag dat je hebt betaald voor de service in de afgelopen 12 maanden.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                7. Account Beëindiging
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We behouden ons het recht voor om accounts te beëindigen die deze voorwaarden schenden. Je kunt je account op elk moment sluiten via je account instellingen.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                8. Wijzigingen aan Voorwaarden
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We kunnen deze voorwaarden periodiek wijzigen. We stellen je op de hoogte van significante wijzigingen via e-mail. Voortgezet gebruik van de service na wijzigingen geeft aan dat je de nieuwe voorwaarden accepteert.
              </p>
            </div>

            <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px] text-center">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] sm:text-[26px] lg:text-[28px] text-white mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Vragen over de Voorwaarden?
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#fff5f0] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We zijn er om te helpen. Neem contact op via ons contactformulier.
              </p>
              <Link href="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-[#f8918a] h-[48px] sm:h-[52px] lg:h-[56px] px-[32px] sm:px-[36px] lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white hover:bg-[#f9675d] transition-colors"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

