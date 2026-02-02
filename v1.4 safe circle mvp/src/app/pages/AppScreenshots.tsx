import { Camera, Mic, MapPin, Activity, CheckCircle, Phone, MessageSquare, Battery, MapPinned, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  WelcomeScreen, 
  PrivacyLevelScreen, 
  HomeDashboardScreen, 
  ManualCheckinScreen, 
  AddContactsScreen, 
  AlertTimingScreen 
} from '../components/OnboardingScreens';

export default function AppScreenshots() {
  return (
    <div className="bg-[#fff5f0] min-h-screen">
      <Header />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px] py-16 sm:py-20 lg:py-[120px]">
        <div className="text-center mb-12 sm:mb-16 lg:mb-[80px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            SafeCircle App Screenshots
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] max-w-[800px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mockup screens for design reference
          </p>
        </div>

        {/* Screen 1: Privacy Settings */}
        <div className="mb-16 sm:mb-20 lg:mb-[120px]">
          <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[28px] lg:text-[32px] text-[#323232] mb-6 sm:mb-8 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Screen 1: Privacy Settings
          </h2>
          
          <div className="flex justify-center">
            <div className="w-full max-w-[375px] bg-white rounded-[24px] border-[3px] border-black shadow-2xl overflow-hidden">
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

              {/* Content */}
              <div className="bg-[#fff5f0] min-h-[667px] p-6">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Privacy Settings
                  </h1>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    You're in control of what data is collected
                  </p>
                </div>

                {/* What we DON'T collect */}
                <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-6">
                  <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We never collect:
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                        <Camera className="w-[18px] h-[18px] text-[#f8918a]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>No cameras</span>
                          <span className="text-[#f8918a] text-[18px]">✗</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                        <Mic className="w-[18px] h-[18px] text-[#f8918a]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>No audio recording</span>
                          <span className="text-[#f8918a] text-[18px]">✗</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                        <MapPin className="w-[18px] h-[18px] text-[#f8918a]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>No location tracking</span>
                          <span className="text-[#f8918a] text-[18px]">✗</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                        <Activity className="w-[18px] h-[18px] text-[#38c77f]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>Only device usage patterns</span>
                          <span className="text-[#38c77f] text-[18px]">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy Mode Settings */}
                <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-6">
                  <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Privacy mode
                  </h3>

                  {/* Share activity data toggle */}
                  <div className="mb-4 pb-4 border-b border-[#f0f0f0]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Share activity data
                      </span>
                      <div className="w-[51px] h-[31px] bg-[#e0e0e0] rounded-full relative cursor-pointer">
                        <div className="absolute left-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
                      </div>
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Allow SafeCircle to track device usage patterns
                    </p>
                  </div>

                  {/* Push notifications only toggle */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Push notifications only
                      </span>
                      <div className="w-[51px] h-[31px] bg-[#f8918a] rounded-full relative cursor-pointer">
                        <div className="absolute right-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
                      </div>
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Maximum privacy - no data sharing, manual check-ins only
                    </p>
                  </div>
                </div>

                {/* Info box */}
                <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[8px] p-4">
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <strong>Your privacy matters.</strong> SafeCircle collects minimal data—just enough to confirm you're active, never what you're doing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Contact Dashboard (Two States) */}
        <div className="mb-16 sm:mb-20 lg:mb-[120px]">
          <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[28px] lg:text-[32px] text-[#323232] mb-6 sm:mb-8 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Screen 2: Contact Dashboard (Two States)
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 items-start">
            {/* All is well state */}
            <div className="w-full max-w-[375px] mx-auto lg:mx-0">
              <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-4 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                "All is well" state
              </p>
              <div className="bg-white rounded-[24px] border-[3px] border-black shadow-2xl overflow-hidden">
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

                {/* Content */}
                <div className="bg-[#fff5f0] min-h-[667px] p-6">
                  <div className="mb-8">
                    <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Sarah's Status
                    </h1>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Your trusted contact
                    </p>
                  </div>

                  {/* Status card */}
                  <div className="bg-white border-2 border-black rounded-[12px] p-8 text-center">
                    <div className="w-[80px] h-[80px] bg-[#38c77f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-[48px] h-[48px] text-[#38c77f]" />
                    </div>
                    <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      All is well
                    </h2>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Everything looks normal
                    </p>
                    
                    <div className="bg-[#fff5f0] border border-[#f0f0f0] rounded-[8px] p-4">
                      <div className="flex items-center justify-center gap-2 text-[#838383]">
                        <Clock className="w-[16px] h-[16px]" />
                        <span className="font-['Open_Sans:Regular',sans-serif] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Last activity: 2 hours ago
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info box */}
                  <div className="mt-6 bg-[#fff5f0] border-2 border-[#38c77f]/30 rounded-[8px] p-4">
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232] text-center leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Sarah is going about their normal routine. You'll be notified if anything changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Concern state */}
            <div className="w-full max-w-[375px] mx-auto lg:mx-0">
              <p className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-4 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                "Concern" state
              </p>
              <div className="bg-white rounded-[24px] border-[3px] border-black shadow-2xl overflow-hidden">
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

                {/* Content */}
                <div className="bg-[#fff5f0] min-h-[667px] p-6">
                  <div className="mb-8">
                    <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Sarah's Status
                    </h1>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Your trusted contact
                    </p>
                  </div>

                  {/* Alert banner */}
                  <div className="bg-[#FFA500]/10 border-2 border-[#FFA500] rounded-[8px] p-4 mb-6">
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ⚠️ No recent activity detected
                    </p>
                  </div>

                  {/* Status card */}
                  <div className="bg-white border-2 border-black rounded-[12px] p-6 mb-4">
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Details
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Clock className="w-[20px] h-[20px] text-[#838383]" />
                        <div className="flex-1">
                          <p className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Last activity
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            18 hours ago
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPinned className="w-[20px] h-[20px] text-[#838383]" />
                        <div className="flex-1">
                          <p className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Location
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            At home
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Battery className="w-[20px] h-[20px] text-[#838383]" />
                        <div className="flex-1">
                          <p className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Phone battery
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            45%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] flex items-center justify-center gap-2 font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <Phone className="w-[18px] h-[18px]" />
                      Call Sarah
                    </button>
                    <button className="w-full bg-white border-2 border-black h-[48px] rounded-[8px] flex items-center justify-center gap-2 font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <MessageSquare className="w-[18px] h-[18px]" />
                      Send message
                    </button>
                  </div>

                  {/* Settings toggle */}
                  <div className="mt-6 bg-white border border-[#f0f0f0] rounded-[8px] p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Share location when concern arises
                      </span>
                      <div className="w-[40px] h-[24px] bg-[#f8918a] rounded-full relative">
                        <div className="absolute right-[2px] top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 3: User Control & Monitoring Settings */}
        <div className="mb-16 sm:mb-20 lg:mb-[120px]">
          <h2 className="font-['Open_Sans:Bold',sans-serif] text-[22px] sm:text-[28px] lg:text-[32px] text-[#323232] mb-6 sm:mb-8 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Screen 3: Monitoring Control Settings
          </h2>
          
          <div className="flex justify-center">
            <div className="w-full max-w-[375px] bg-white rounded-[24px] border-[3px] border-black shadow-2xl overflow-hidden">
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

              {/* Content */}
              <div className="bg-[#fff5f0] min-h-[667px] p-6">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Monitoring Settings
                  </h1>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.5]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Customize how SafeCircle works for you
                  </p>
                </div>

                {/* Status banner - Paused */}
                <div className="bg-[#FFA500]/10 border-2 border-[#FFA500] rounded-[12px] p-4 mb-6 text-center">
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ⏸️ Monitoring paused
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Resumes: Tomorrow 9:00 AM
                  </p>
                </div>

                {/* Main monitoring toggle */}
                <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Monitoring active
                      </h3>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Currently paused
                      </p>
                    </div>
                    <div className="w-[51px] h-[31px] bg-[#e0e0e0] rounded-full relative cursor-pointer">
                      <div className="absolute left-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#f8918a] h-[44px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Resume Monitoring
                  </button>
                </div>

                {/* Alert timing */}
                <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-6">
                  <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Send alert after
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        24 hours
                      </span>
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        of inactivity
                      </span>
                    </div>
                    
                    {/* Slider */}
                    <div className="relative h-[6px] bg-[#f0f0f0] rounded-full">
                      <div className="absolute left-0 top-0 h-full w-[50%] bg-[#f8918a] rounded-full"></div>
                      <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20px] h-[20px] bg-white border-2 border-[#f8918a] rounded-full shadow"></div>
                    </div>
                    
                    <div className="flex justify-between mt-2">
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>12h</span>
                      <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>48h</span>
                    </div>
                  </div>
                  
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Your trusted contacts will be notified if no activity is detected for this period.
                  </p>
                </div>

                {/* Privacy mode option */}
                <div className="bg-white border-2 border-black rounded-[12px] p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <input type="radio" className="mt-1 w-[18px] h-[18px] accent-[#f8918a]" />
                    <div className="flex-1">
                      <h3 className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Push notifications only
                      </h3>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Maximum privacy - no data sharing. You'll receive a daily notification to confirm you're okay.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Manual check-in button */}
                <button className="w-full bg-white border-2 border-black h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ✓ Check in now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Screens Section - Onboarding & Key Flows */}
        <div className="mb-16 sm:mb-20 lg:mb-[120px]">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
              Onboarding & Key User Flows
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] text-[#838383] max-w-[700px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Core screens for first-time setup and daily use
            </p>
          </div>

          <WelcomeScreen />
          <PrivacyLevelScreen />
          <HomeDashboardScreen />
          <ManualCheckinScreen />
          <AddContactsScreen />
          <AlertTimingScreen />
        </div>

        {/* Download Instructions */}
        <div className="text-center bg-white border-2 border-black rounded-[12px] p-8 max-w-[800px] mx-auto">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            How to use these screenshots
          </h3>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#838383] leading-[1.6] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            Right-click on any screen above and select "Save image as..." to download. You can then import these into Figma or any design tool as reference mockups.
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            These are high-fidelity HTML/CSS mockups that follow the SafeCircle design system.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}