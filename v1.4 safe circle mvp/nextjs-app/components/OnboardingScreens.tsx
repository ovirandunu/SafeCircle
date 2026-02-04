import { CheckCircle, Camera, Mic, MapPin, Activity, Clock, Phone, MessageSquare } from 'lucide-react';

// Phone wrapper component
function PhoneWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[375px] bg-white rounded-[24px] border-[3px] border-black shadow-2xl overflow-hidden mx-auto">
      {/* Status bar */}
      <div className="bg-white h-[44px] flex items-center justify-between px-6 pt-3">
        <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</span>
        <div className="flex gap-1">
          <div className="w-[18px] h-[12px] border border-black rounded-[2px]"></div>
          <div className="w-[16px] h-[12px] border border-black rounded-[2px]"></div>
          <div className="w-[25px] h-[12px] border-2 border-black rounded-[4px] relative">
            <div className="absolute right-[-3px] top-[3px] w-[2px] h-[6px] bg-black rounded-r-[1px]"></div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export function WelcomeScreen() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-[80px]">
      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-6 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screen 4: Welcome to SafeCircle (Onboarding)
      </h3>
      
      <PhoneWrapper>
        <div className="bg-[#fff5f0] min-h-[667px] p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-12 mt-16">
              <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-full flex items-center justify-center">
                <CheckCircle className="w-[48px] h-[48px] text-white" />
              </div>
            </div>

            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] text-[#323232] mb-4 text-center leading-[1.2]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Welcome to SafeCircle
            </h1>
            
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232] leading-[1.6] text-center mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle helps others know you're okay — without monitoring your life.
            </p>

            <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] leading-[1.6] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              You stay in control of what's shared, at all times.
            </p>
          </div>

          <div className="pb-8">
            <button className="w-full bg-[#f8918a] h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[17px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Continue
            </button>
          </div>
        </div>
      </PhoneWrapper>
    </div>
  );
}

export function PrivacyLevelScreen() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-[80px]">
      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-6 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screen 5: Choose Your Privacy Level (Onboarding)
      </h3>
      
      <PhoneWrapper>
        <div className="bg-[#fff5f0] min-h-[667px] p-6">
          <div className="mb-8">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2 leading-[1.2]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Choose Your Privacy Level
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
              You can change this anytime
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-[20px] h-[20px] border-2 border-[#f8918a] rounded-full mt-1 flex items-center justify-center flex-shrink-0">
                <div className="w-[10px] h-[10px] bg-[#f8918a] rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Push notifications only
                </h3>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] leading-[1.5] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  You'll receive a daily notification asking you to confirm you're okay. No activity data is shared.
                </p>
                <div className="bg-[#f8918a]/10 border border-[#f8918a]/30 rounded-[6px] px-3 py-2">
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[12px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Maximum privacy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#e0e0e0] rounded-[12px] p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-full mt-1 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Minimal activity signals
                </h3>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] leading-[1.5] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  SafeCircle checks for basic phone usage patterns to confirm you're active. It never sees what you're doing.
                </p>
                <div className="bg-[#fff5f0] border border-[#e0e0e0] rounded-[6px] px-3 py-2">
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[12px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Recommended
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[8px] p-4 mb-6">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] leading-[1.5] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              <strong>No cameras. No audio. No tracking your content.</strong>
            </p>
          </div>

          <button className="w-full bg-[#f8918a] h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[17px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Continue
          </button>
        </div>
      </PhoneWrapper>
    </div>
  );
}

export function HomeDashboardScreen() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-[80px]">
      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-6 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screen 6: Home Dashboard (All is Well)
      </h3>
      
      <PhoneWrapper>
        <div className="bg-[#fff5f0] min-h-[667px] p-6">
          <div className="mb-8">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              Status
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your SafeCircle monitoring
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-[12px] p-8 text-center mb-6">
            <div className="w-[80px] h-[80px] bg-[#38c77f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-[48px] h-[48px] text-[#38c77f]" />
            </div>
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[26px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              Everything looks normal
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle sees normal signs of activity
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-6">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Monitoring
              </span>
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#38c77f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Privacy mode
              </span>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Push only
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Check in now
            </button>
            <button className="w-full bg-white border-2 border-black h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Pause monitoring
            </button>
          </div>
        </div>
      </PhoneWrapper>
    </div>
  );
}

export function ManualCheckinScreen() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-[80px]">
      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-6 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screen 7: Manual Check-in
      </h3>
      
      <PhoneWrapper>
        <div className="bg-[#fff5f0] min-h-[667px] p-6 flex flex-col justify-center">
          <div>
            <div className="flex justify-center mb-8">
              <div className="w-[100px] h-[100px] bg-[#f8918a]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-[60px] h-[60px] text-[#f8918a]" />
              </div>
            </div>

            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] text-[#323232] mb-3 text-center leading-[1.3]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Check in
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#838383] text-center mb-12 leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Let SafeCircle know you're okay
            </p>

            <button className="w-full bg-[#f8918a] h-[60px] rounded-[8px] flex items-center justify-center font-['Open_Sans:Bold',sans-serif] text-[18px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              I'm okay
            </button>

            <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[8px] p-4">
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] text-center leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Your trusted contacts won't be notified
              </p>
            </div>
          </div>
        </div>
      </PhoneWrapper>
    </div>
  );
}

export function AddContactsScreen() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-[80px]">
      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-6 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screen 8: Add Trusted Contacts
      </h3>
      
      <PhoneWrapper>
        <div className="bg-[#fff5f0] min-h-[667px] p-6">
          <div className="mb-8">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2 leading-[1.2]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add Trusted Contacts
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Who should be notified if something seems wrong?
            </p>
          </div>

          <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[8px] p-4 mb-6">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
              These people won't see your daily activity. They'll only be notified if something unusual happens.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] mb-2 block" style={{ fontVariationSettings: "'wdth' 100" }}>
                Name
              </label>
              <input 
                type="text" 
                placeholder="e.g., Sarah Johnson"
                className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-4 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            <div>
              <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] mb-2 block" style={{ fontVariationSettings: "'wdth' 100" }}>
                Relationship (optional)
              </label>
              <input 
                type="text" 
                placeholder="e.g., Sister"
                className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-4 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            <div>
              <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] mb-2 block" style={{ fontVariationSettings: "'wdth' 100" }}>
                Phone or Email
              </label>
              <input 
                type="text" 
                placeholder="+1 555 123 4567"
                className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-4 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-[#f8918a] h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[17px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add contact
            </button>
            <button className="w-full bg-white border-2 border-black h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[17px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Skip for now
            </button>
          </div>
        </div>
      </PhoneWrapper>
    </div>
  );
}

export function AlertTimingScreen() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-[80px]">
      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232] mb-6 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screen 9: Alert Timing Settings
      </h3>
      
      <PhoneWrapper>
        <div className="bg-[#fff5f0] min-h-[667px] p-6">
          <div className="mb-8">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              Alert Timing
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Choose what feels right for your routine
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-[12px] p-6 mb-6">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
              Notify contacts after:
            </h3>
            
            <div className="bg-[#fff5f0] border-2 border-[#e0e0e0] rounded-[8px] p-4 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-full"></div>
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    12 hours
                  </span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  of inactivity
                </span>
              </div>
            </div>

            <div className="bg-[#f8918a]/5 border-2 border-[#f8918a] rounded-[8px] p-4 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#f8918a] rounded-full flex items-center justify-center">
                    <div className="w-[10px] h-[10px] bg-[#f8918a] rounded-full"></div>
                  </div>
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    24 hours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    of inactivity
                  </span>
                  <span className="bg-[#f8918a] text-white text-[11px] font-['Open_Sans:SemiBold',sans-serif] px-2 py-1 rounded-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Default
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#fff5f0] border-2 border-[#e0e0e0] rounded-[8px] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-full"></div>
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    48 hours
                  </span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  of inactivity
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[8px] p-4 mb-6">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your trusted contacts will be notified if no activity is detected for this period.
            </p>
          </div>

          <button className="w-full bg-[#f8918a] h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[17px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save settings
          </button>
        </div>
      </PhoneWrapper>
    </div>
  );
}
