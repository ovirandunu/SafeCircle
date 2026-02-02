import { Shield, Lock, Eye, Server, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SecurityNL() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="text-center max-w-[900px] mx-auto mb-12 sm:mb-16 lg:mb-[80px]">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Beveiliging & Privacy
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Jouw veiligheid en privacy zijn onze hoogste prioriteiten. Zo beschermen we je data.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[40px] mb-12 sm:mb-16 lg:mb-[80px]">
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[20px]">
                <Lock className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                End-to-End Versleuteling
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Alle gevoelige data in je Informatie Kluis is versleuteld met AES-256 versleuteling—dezelfde standaard die gebruikt wordt door banken en overheidsinstanties. Je data is versleuteld voordat het je apparaat verlaat en kan alleen ontsleuteld worden door jou of geautoriseerde vertrouwde contacten.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[20px]">
                <Shield className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Biometrische Bescherming
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Schakel vingerafdruk of gezichtsherkenning in voor een extra beveiligingslaag. Je vertrouwde contacten moeten hun identiteit biometrisch verifiëren voordat ze toegang krijgen tot gevoelige informatie, zodat alleen geautoriseerde personen je data kunnen bekijken.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[20px]">
                <Eye className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Privacy by Design
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We verzamelen alleen wat nodig is voor monitoring—tijdstempels en gebruikspatronen, nooit inhoud. Geen camera's, geen audio, geen constante bewaking. We zien dat activiteit plaatsvond, niet wat je aan het doen bent of waar je bent.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[20px]">
                <Server className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Veilige Infrastructuur
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Onze infrastructuur is gehost in SOC 2 Type II gecertificeerde datacenters met 24/7 monitoring, redundante backups en disaster recovery protocollen. We ondergaan regelmatige third-party beveiligingsaudits en penetratietests.
              </p>
            </div>
          </div>

          <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-6 sm:p-10 lg:p-[60px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] text-white mb-6 sm:mb-8 lg:mb-[32px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Onze Beveiligingscertificaten & Compliance
            </h2>
            
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px]">
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-[24px] h-[24px] text-[#f8918a] shrink-0 mt-[2px]" />
                <div>
                  <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    GDPR Compliant
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Volledig conform de Algemene Verordening Gegevensbescherming voor alle Europese gebruikers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-[24px] h-[24px] text-[#f8918a] shrink-0 mt-[2px]" />
                <div>
                  <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    SOC 2 Type II Certified
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Onafhankelijk geverifieerd dat we voldoen aan strikte beveiligings- en privacy standaarden.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-[24px] h-[24px] text-[#f8918a] shrink-0 mt-[2px]" />
                <div>
                  <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ISO 27001
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Internationaal erkende informatiebeveiligingscertificering.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle className="w-[24px] h-[24px] text-[#f8918a] shrink-0 mt-[2px]" />
                <div>
                  <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Regular Security Audits
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Driemaandelijkse third-party penetratietests en beveiligingsbeoordelingen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px] text-center">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Je Data, Jouw Controle
          </h2>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-[#838383] mb-6 sm:mb-8 lg:mb-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Je hebt volledige controle over je data. Download je informatie, koppel apparaten los of verwijder je account op elk moment—zonder vragen, zonder wachttijd.
          </p>
          <a 
            href="/privacy-nl"
            className="inline-flex items-center justify-center bg-[#323232] h-[48px] sm:h-[52px] lg:h-[56px] px-[32px] sm:px-[36px] lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white hover:bg-[#f8918a] transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Lees ons Volledige Privacybeleid
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
