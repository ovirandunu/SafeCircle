import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[100px] pt-[92px] sm:pt-[96px] lg:pt-[100px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Privacy Policy
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Last updated: December 25, 2025
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-[80px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="space-y-8 sm:space-y-10 lg:space-y-[48px]">
            <div>
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[28px] lg:text-[32px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Our Commitment to Your Privacy
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                At SafeCircle, privacy isn't an afterthought—it's our foundation. We built SafeCircle on the principle that you deserve peace of mind without surveillance. This Privacy Policy explains exactly what minimal data we collect, how we protect it, and your complete control over your information.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                1. Information We Collect
              </h3>
              <div className="space-y-[16px]">
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Device Activity Data
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We collect timestamps and usage patterns from your connected devices (phone unlocks, smart light activity, thermostat adjustments). We do NOT collect the content of your activities, camera feeds, voice recordings, or your precise location.
                  </p>
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Account Information
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Name, email address, phone number, and payment information necessary to provide our service and communicate with you.
                  </p>
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#323232] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Information Vault Data
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Any information you choose to store in your Information Vault (financial accounts, contacts, wishes) is encrypted and only accessible to you and designated trusted contacts under specified conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                2. How We Use Your Information
              </h3>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    To monitor your activity patterns and detect unusual deviations
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    To send notifications to your trusted contacts when necessary
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    To provide secure access to your Information Vault to authorized contacts in emergencies
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    To improve our algorithms and service quality
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    To communicate important service updates
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                3. Data Security & Encryption
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We employ industry-leading security measures to protect your data:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    AES-256 encryption for all data at rest
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    TLS 1.3 for all data in transit
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    SOC 2 Type II certified data centers
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Regular third-party security audits
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Optional biometric verification for sensitive data access
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                4. Data Sharing & Third Parties
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We will NEVER sell your personal data. We only share your information:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    With your designated trusted contacts as configured by you
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    With service providers who help us operate SafeCircle (hosting, analytics) under strict confidentiality agreements
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    When required by law or to protect safety
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                5. Your Rights & Control
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                You have complete control over your data. You can:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Access your data at any time through your account dashboard
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Request a complete copy of your data
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Disconnect any device at any time
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Delete your account and all associated data
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Modify what trusted contacts can access
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Opt out of non-essential communications
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                6. Data Retention
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We retain your activity data for 90 days to enable accurate pattern learning and historical review. Information Vault data is retained until you delete it or close your account. Upon account closure, all data is permanently deleted within 30 days, except where required by law.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                7. Cookies & Tracking
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We use essential cookies to keep you logged in and remember your preferences. We use analytics to understand how our service is used (in aggregate, not individually). We do NOT use advertising cookies or sell data to advertisers.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                8. International Users
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle is based in the United States. If you use our service from outside the U.S., your data will be transferred to and processed in the United States. We comply with GDPR for European users and provide equivalent protections for all users regardless of location.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                9. Changes to This Policy
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We may update this Privacy Policy periodically. We'll notify you of significant changes via email and update the "Last updated" date above. Continued use of SafeCircle after changes indicates acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px] text-center">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] sm:text-[26px] lg:text-[28px] text-white mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Questions About Privacy?
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] text-[#fff5f0] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We're here to help. Reach out through our contact form or schedule a call.
              </p>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-[#f8918a] h-[48px] sm:h-[52px] lg:h-[56px] px-[32px] sm:px-[36px] lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white hover:bg-[#f9675d] transition-colors"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}