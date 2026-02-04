import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TrustedContacts() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[900px] mx-auto px-[70px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[70px] leading-[70px] tracking-[-3.2px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            For Trusted Contacts
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[24px] leading-[32px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            What it means to be a trusted contact and how SafeCircle helps you stay connected
          </p>
        </div>
      </section>

      <section className="bg-white py-[120px]">
        <div className="max-w-[900px] mx-auto px-[70px]">
          <div className="space-y-[48px]">
            <div>
              <h2 className="font-['Open_Sans:Bold',sans-serif] text-[36px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Your Role as a Trusted Contact
              </h2>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Being designated as a trusted contact is an honor—it means someone trusts you to be there when it matters most. SafeCircle makes this responsibility easier by only alerting you when there's a genuine concern, not for routine check-ins.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-[40px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Why SafeCircle for You
              </h3>
              <ul className="space-y-[20px]">
                <li className="flex gap-[16px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <div>
                    <strong className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>Receive Smart Alerts</strong>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#838383] mt-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      You'll only receive notifications when SafeCircle detects an unusual deviation from their normal routine. No daily updates, no constant monitoring—just alerts when they matter.
                    </p>
                  </div>
                </li>
                <li className="flex gap-[16px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <div>
                    <strong className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>Choose Your Notification Method</strong>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#838383] mt-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Receive alerts via the SafeCircle app, SMS, or email—whatever works best for you. You don't need to download anything if you prefer text or email notifications.
                    </p>
                  </div>
                </li>
                <li className="flex gap-[16px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <div>
                    <strong className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>Access Important Information</strong>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#838383] mt-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      In an emergency, you'll have secure access to the information they've chosen to share—medical contacts, financial details, or final wishes. This access is protected by optional biometric verification.
                    </p>
                  </div>
                </li>
                <li className="flex gap-[16px] items-start">
                  <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                  <div>
                    <strong className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>Coordinate with Other Contacts</strong>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#838383] mt-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      If multiple trusted contacts are designated, you can see who else has been notified and coordinate your response. This prevents multiple people rushing over unnecessarily.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                When You Receive an Alert
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle will provide you with:
              </p>
              <div className="bg-white border-[2px] border-black rounded-[12px] p-[32px] space-y-[16px]">
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  • What triggered the alert (e.g., "No activity detected for 18 hours")
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  • Their last known activity timestamp
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  • Quick access to their emergency contacts
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  • Status of other trusted contacts (who's been notified and who's responded)
                </p>
              </div>
            </div>

            <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-[48px] text-center">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[32px] text-white mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Peace of Mind for Both of You
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                SafeCircle strengthens your connection without creating burden. They maintain their independence, and you have confidence that you'll be notified if something's wrong—without the need for daily check-in calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}