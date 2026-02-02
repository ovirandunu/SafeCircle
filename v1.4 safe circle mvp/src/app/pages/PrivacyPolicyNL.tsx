import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyNL() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[100px] pt-[92px] sm:pt-[96px] lg:pt-[100px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Privacybeleid
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Laatst bijgewerkt: 25 december 2025
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-[80px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="space-y-8 sm:space-y-10 lg:space-y-[48px]">
            <div>
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[28px] lg:text-[32px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Onze Toewijding aan je Privacy
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Bij SafeCircle is privacy geen bijzaak—het is onze basis. We hebben SafeCircle gebouwd op het principe dat je gemoedsrust verdient zonder bewaking. Dit Privacybeleid legt precies uit welke minimale data we verzamelen, hoe we deze beschermen en je volledige controle over je informatie.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                1. Informatie die We Verzamelen
              </h3>
              <div className="space-y-[16px]">
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Apparaat Activiteit Data
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We verzamelen tijdstempels en gebruikspatronen van je gekoppelde apparaten (telefoon ontgrendelingen, slimme lamp activiteit, thermostaat aanpassingen). We verzamelen NIET de inhoud van je activiteiten, camera feeds, spraakopnames of je precieze locatie.
                  </p>
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Account Informatie
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Naam, e-mailadres, telefoonnummer en betaalinformatie die nodig zijn om onze service te leveren en met je te communiceren.
                  </p>
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Informatie Kluis Data
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Alle informatie die je kiest op te slaan in je Informatie Kluis (financiële accounts, contacten, wensen) is versleuteld en alleen toegankelijk voor jou en aangewezen vertrouwde contacten onder gespecificeerde voorwaarden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                2. Hoe We je Informatie Gebruiken
              </h3>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Om je activiteitspatronen te monitoren en ongebruikelijke afwijkingen te detecteren
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Om notificaties naar je vertrouwde contacten te sturen wanneer nodig
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Om veilige toegang tot je Informatie Kluis te bieden aan geautoriseerde contacten in noodgevallen
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Om onze algoritmen en servicekwaliteit te verbeteren
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Om belangrijke service updates te communiceren
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                3. Data Beveiliging & Versleuteling
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We gebruiken toonaangevende beveiligingsmaatregelen om je data te beschermen:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    AES-256 versleuteling voor alle opgeslagen data
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    TLS 1.3 voor alle data in transit
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    SOC 2 Type II gecertificeerde datacenters
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Regelmatige third-party beveiligingsaudits
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Optionele biometrische verificatie voor toegang tot gevoelige data
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                4. Data Delen & Derden
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We zullen je persoonlijke data NOOIT verkopen. We delen je informatie alleen:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Met je aangewezen vertrouwde contacten zoals door jou geconfigureerd
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Met serviceproviders die ons helpen SafeCircle te bedienen (hosting, analytics) onder strikte vertrouwelijkheidsovereenkomsten
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Wanneer vereist door de wet of om veiligheid te beschermen
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                5. Je Rechten & Controle
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Je hebt volledige controle over je data. Je kunt:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Op elk moment je data bekijken via je account dashboard
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Een complete kopie van je data aanvragen
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Elk apparaat op elk moment loskoppelen
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Je account en alle bijbehorende data verwijderen
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Wijzigen waar vertrouwde contacten toegang tot hebben
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Afmelden voor niet-essentiële communicatie
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                6. Data Bewaarperiode
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We bewaren je activiteitsdata 90 dagen om nauwkeurige patroonherkenning en historisch overzicht mogelijk te maken. Informatie Kluis data wordt bewaard totdat je het verwijdert of je account sluit. Bij het sluiten van je account wordt alle data permanent verwijderd binnen 30 dagen, behalve waar vereist door de wet.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                7. Cookies & Tracking
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We gebruiken essentiële cookies om je ingelogd te houden en je voorkeuren te onthouden. We gebruiken analytics om te begrijpen hoe onze service gebruikt wordt (geaggregeerd, niet individueel). We gebruiken GEEN advertising cookies en verkopen geen data aan adverteerders.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                8. Internationale Gebruikers
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle is gevestigd in de Verenigde Staten. Als je onze service gebruikt vanuit een land buiten de VS, wordt je data overgedragen naar en verwerkt in de Verenigde Staten. We voldoen aan GDPR voor Europese gebruikers en bieden gelijkwaardige bescherming voor alle gebruikers ongeacht locatie.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                9. Wijzigingen aan dit Beleid
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We kunnen dit Privacybeleid periodiek updaten. We stellen je op de hoogte van significante wijzigingen via e-mail en updaten de "Laatst bijgewerkt" datum hierboven. Voortgezet gebruik van SafeCircle na wijzigingen geeft aan dat je het geüpdatete beleid accepteert.
              </p>
            </div>

            <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px] text-center">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] sm:text-[26px] lg:text-[28px] text-white mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Vragen over Privacy?
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#fff5f0] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We zijn er om te helpen. Neem contact op via ons contactformulier of plan een gesprek.
              </p>
              <Link 
                to="/contact" 
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
