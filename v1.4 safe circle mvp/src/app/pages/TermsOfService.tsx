import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[100px] pt-[92px] sm:pt-[96px] lg:pt-[100px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Terms of Service
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Last updated: December 25, 2025
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-[80px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="space-y-8 sm:space-y-10 lg:space-y-[48px]">
            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                1. Acceptance of Terms
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                By accessing or using SafeCircle's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service. These terms constitute a legally binding agreement between you and SafeCircle, Inc.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                2. Service Description
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle provides activity monitoring and information organization services. The service:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Monitors activity patterns from your connected devices
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Sends notifications to designated trusted contacts when unusual patterns are detected
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Provides secure storage for important information you choose to save
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                3. Important Limitations
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle is a monitoring and notification service, NOT:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    An emergency response service (we do not contact 911 or emergency services)
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    A medical device or medical monitoring service
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    A substitute for professional medical advice or care
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    A guarantee that all emergencies will be detected
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                4. User Responsibilities
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                You agree to:
              </p>
              <ul className="space-y-[12px]">
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Provide accurate account information and keep it updated
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Maintain the security of your account credentials
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Ensure your connected devices are properly configured
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Only designate trusted contacts who have agreed to this role
                  </p>
                </li>
                <li className="flex gap-[12px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Use the service only for its intended personal, non-commercial purpose
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                5. Payment & Billing
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Subscription fees are billed monthly in advance. You can cancel at any time, and cancellation takes effect at the end of your current billing period. We offer a 14-day money-back guarantee—if you're not satisfied within the first 14 days, contact us for a full refund.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                6. Limitation of Liability
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle strives to provide reliable service, but we cannot guarantee 100% uptime or detection of all emergencies. The service depends on your devices being connected, charged, and functioning properly. SafeCircle is not liable for damages resulting from service interruptions, false positives, false negatives, or any inability to detect an emergency. Our total liability is limited to the amount you paid for the service in the past 12 months.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                7. Termination
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                You may cancel your subscription at any time from your account settings. We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity. Upon termination, your access to the service ends, and your data will be deleted according to our Privacy Policy.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                8. Governing Law
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                These Terms of Service are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes will be resolved through binding arbitration in accordance with the American Arbitration Association rules.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                9. Changes to Terms
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                We may modify these terms from time to time. We'll notify you of material changes via email at least 30 days before they take effect. Your continued use of SafeCircle after changes become effective indicates acceptance of the modified terms.
              </p>
            </div>

            <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-[40px] text-center">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-white mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Questions About Terms?
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#fff5f0] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                If you have any questions about these terms, we're here to help.
              </p>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-[#f8918a] h-[56px] px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] text-white hover:bg-[#f9675d] transition-colors"
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