import { Shield, Lock, Eye, Server, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Security() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="text-center max-w-[900px] mx-auto mb-12 sm:mb-16 lg:mb-[80px]">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Security & Privacy
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your security and privacy are our highest priorities. Here's how we protect your data.
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
                End-to-End Encryption
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                All sensitive data in your Information Vault is encrypted using AES-256 encryption—the same standard used by banks and government agencies. Your data is encrypted before leaving your device and can only be decrypted by you or authorized trusted contacts.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[20px]">
                <Shield className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Biometric Protection
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Enable fingerprint or face recognition for an additional layer of security. Your trusted contacts must verify their identity biometrically before accessing sensitive information, ensuring only authorized individuals can view your data.
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
                We collect only what's necessary for monitoring—timestamps and usage patterns, never content. No cameras, no audio, no constant surveillance. We see that activity happened, not what you're doing or where you are.
              </p>
            </div>

            <div className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#f8918a] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 lg:mb-[20px]">
                <Server className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] text-white" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[22px] lg:text-[24px] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Secure Infrastructure
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Our infrastructure is hosted in SOC 2 Type II certified data centers with 24/7 monitoring, redundant backups, and disaster recovery protocols. We undergo regular third-party security audits and penetration testing.
              </p>
            </div>
          </div>

          <div className="bg-[#323232] border-[3px] border-black rounded-[12px] p-6 sm:p-10 lg:p-[60px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] text-white mb-6 sm:mb-8 lg:mb-[32px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Our Security Certifications & Compliance
            </h2>
            
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px]">
              <div className="flex items-center gap-4 sm:gap-5 lg:gap-[20px]">
                <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[80px] lg:h-[80px] bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px] text-[#f8918a]" />
                </div>
                <div>
                  <h4 className="font-['Open_Sans:Bold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-1 sm:mb-1 lg:mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    SOC 2 Type II
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[13px] lg:text-[14px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Certified data security
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 lg:gap-[20px]">
                <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[80px] lg:h-[80px] bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px] text-[#f8918a]" />
                </div>
                <div>
                  <h4 className="font-['Open_Sans:Bold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-1 sm:mb-1 lg:mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    GDPR Compliant
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[13px] lg:text-[14px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    European data protection
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 lg:gap-[20px]">
                <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[80px] lg:h-[80px] bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px] text-[#f8918a]" />
                </div>
                <div>
                  <h4 className="font-['Open_Sans:Bold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-white mb-1 sm:mb-1 lg:mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    HIPAA Ready
                  </h4>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[13px] lg:text-[14px] text-[#fff5f0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Healthcare data protection
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[80px] max-w-[900px] mx-auto">
            <h2 className="font-['Open_Sans:Bold',sans-serif] text-[36px] text-[#323232] mb-[32px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Security Best Practices for Users
            </h2>
            
            <div className="space-y-[16px]">
              <div className="bg-[#fff5f0] border-[2px] border-black rounded-[8px] p-[24px]">
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <strong>Use a strong, unique password</strong> for your SafeCircle account and enable two-factor authentication for maximum protection.
                </p>
              </div>
              <div className="bg-[#fff5f0] border-[2px] border-black rounded-[8px] p-[24px]">
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <strong>Enable biometric verification</strong> for your Information Vault to ensure only authorized contacts can access sensitive data.
                </p>
              </div>
              <div className="bg-[#fff5f0] border-[2px] border-black rounded-[8px] p-[24px]">
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <strong>Review trusted contacts regularly</strong> and remove access for anyone who should no longer have it.
                </p>
              </div>
              <div className="bg-[#fff5f0] border-[2px] border-black rounded-[8px] p-[24px]">
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[26px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <strong>Keep your devices secure</strong> with passwords, PINs, or biometric locks to prevent unauthorized access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}