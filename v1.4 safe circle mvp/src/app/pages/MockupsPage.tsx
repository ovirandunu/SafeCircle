import { CheckCircle, Lock, Bell, FileText, DollarSign, File, Heart, Home, Activity, Users, Settings, Menu, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import svgPaths from '../../imports/svg-hencj1gkca';

// iOS Status Bar Component
function IOSStatusBar() {
  return (
    <div className="bg-white h-[54px] w-full flex items-end pb-[11px] px-0">
      <div className="flex items-center justify-between w-full px-[16px]">
        {/* Time */}
        <div className="flex-1 min-w-0">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
        
        {/* Dynamic Island Spacer */}
        <div className="w-[124px] h-[10px] shrink-0" />
        
        {/* Signal Indicators */}
        <div className="flex-1 min-w-0 flex items-center justify-end gap-[7px]">
          {/* Cellular */}
          <div className="h-[12.226px] w-[19.2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          
          {/* WiFi */}
          <div className="h-[12.328px] w-[17.142px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          
          {/* Battery */}
          <div className="h-[13px] w-[27.328px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
              <g>
                <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="0.5" y="0.5" />
                <path d={svgPaths.p3bbd9700} fill="black" opacity="0.4" />
                <rect fill="black" height="9" rx="2.5" width="21" x="2" y="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Screen 1: Daily Check-in Overview
function DailyCheckInMockup() {
  return (
    <div className="w-[351px] mx-auto">
      <div className="bg-white rounded-[32px] overflow-hidden shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] border-2 border-black">
        {/* iOS Status Bar */}
        <IOSStatusBar />

        {/* Top Navigation Bar */}
        <div className="bg-white border-b-[2px] border-black px-[24px] py-[16px] flex items-center justify-between">
          <Menu className="w-[24px] h-[24px] text-[#323232]" />
          <h1 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]">Dashboard</h1>
          <Bell className="w-[24px] h-[24px] text-[#323232]" />
        </div>

        {/* Screen content */}
        <div className="px-[24px] py-[24px] min-h-[520px] bg-[#fff5f0]">
          {/* Date */}
          <div className="mb-[24px]">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>Today, Dec 30</p>
          </div>

          {/* Main status card */}
          <div className="bg-white border-[3px] border-black rounded-[16px] p-[32px] mb-[24px] shadow-[4px_4px_0px_0px_rgba(50,50,50,1)]">
            <div className="flex items-center justify-center mb-[16px]">
              <div className="w-[64px] h-[64px] bg-[#e8f5e9] rounded-full flex items-center justify-center">
                <CheckCircle className="w-[36px] h-[36px] text-[#4caf50]" />
              </div>
            </div>
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] text-[#323232] text-center mb-[8px]">All good</h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] text-center">Last activity: 8:15 AM</p>
          </div>

          {/* Trusted contacts */}
          <div className="bg-white border-[2px] border-black rounded-[12px] p-[20px]">
            <h3 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-[16px]">Trusted Contacts</h3>
            <div className="space-y-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] bg-[#f8918a] rounded-full flex items-center justify-center">
                  <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-white">JD</span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]">Jane Doe</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] bg-[#FFE388] rounded-full flex items-center justify-center border-[2px] border-black">
                  <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#323232]">MS</span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]">Michael Smith</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bg-white border-t-[2px] border-black px-[24px] py-[12px]">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] bg-[#f8918a] rounded-[12px] flex items-center justify-center">
                <Home className="w-[20px] h-[20px] text-white" />
              </div>
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[10px] text-[#323232]">Home</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Activity className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Activity</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <FileText className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Planner</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Users className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Contacts</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Settings className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Screen 2: Missed Check-in Alert
function MissedCheckInMockup() {
  return (
    <div className="w-[351px] mx-auto">
      <div className="bg-white rounded-[32px] overflow-hidden shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] border-2 border-black">
        {/* iOS Status Bar */}
        <IOSStatusBar />

        {/* Top Navigation Bar */}
        <div className="bg-white border-b-[2px] border-black px-[24px] py-[16px] flex items-center justify-between">
          <ArrowLeft className="w-[24px] h-[24px] text-[#323232]" />
          <h1 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]">Alert Details</h1>
          <div className="w-[24px]" /> {/* Spacer for alignment */}
        </div>

        {/* Screen content */}
        <div className="px-[24px] pt-[40px] pb-[24px] min-h-[520px] bg-[#fff5f0]">
          {/* Date */}
          <div className="mb-[24px]">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>Today, Dec 30</p>
          </div>

          {/* Alert status card */}
          <div className="bg-white border-[3px] border-black rounded-[16px] p-[32px] mb-[24px] shadow-[4px_4px_0px_0px_rgba(50,50,50,1)]">
            <div className="flex items-center justify-center mb-[16px]">
              <div className="w-[64px] h-[64px] bg-[#fff3e0] rounded-full flex items-center justify-center">
                <Bell className="w-[36px] h-[36px] text-[#f8918a]" />
              </div>
            </div>
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] text-[#323232] text-center mb-[8px]">No response detected</h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] text-center mb-[20px]">No activity since yesterday at 9:00 PM</p>
            
            <div className="bg-[#fff5f0] border-[2px] border-[#f8918a] rounded-[12px] p-[16px]">
              <p className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] text-center">Trusted contacts have been notified</p>
            </div>
          </div>

          {/* Who was notified */}
          <div className="bg-white border-[2px] border-black rounded-[12px] p-[20px]">
            <h3 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] mb-[16px]">Notifications Sent</h3>
            <div className="space-y-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] bg-[#f8918a] rounded-full flex items-center justify-center">
                  <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-white">JD</span>
                </div>
                <div className="flex-1">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]">Jane Doe</span>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">Notified 2:15 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] bg-[#FFE388] rounded-full flex items-center justify-center border-[2px] border-black">
                  <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#323232]">MS</span>
                </div>
                <div className="flex-1">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]">Michael Smith</span>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">Notified 2:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bg-white border-t-[2px] border-black px-[24px] py-[12px]">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Home className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Home</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] bg-[#f8918a] rounded-[12px] flex items-center justify-center">
                <Activity className="w-[20px] h-[20px] text-white" />
              </div>
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[10px] text-[#323232]">Activity</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <FileText className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Planner</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Users className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Contacts</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Settings className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Screen 3: Legacy/Preparedness Overview
function LegacyOverviewMockup() {
  return (
    <div className="w-[351px] mx-auto">
      <div className="bg-white rounded-[32px] overflow-hidden shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] border-2 border-black">
        {/* iOS Status Bar */}
        <IOSStatusBar />

        {/* Top Navigation Bar */}
        <div className="bg-white border-b-[2px] border-black px-[24px] py-[16px] flex items-center justify-between">
          <ArrowLeft className="w-[24px] h-[24px] text-[#323232]" />
          <h1 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]">Legacy Planner</h1>
          <Settings className="w-[24px] h-[24px] text-[#323232]" />
        </div>

        {/* Screen content */}
        <div className="px-[24px] py-[24px] min-h-[520px] bg-[#fff5f0]">
          {/* Subtitle */}
          <div className="mb-[24px]">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>Everything organized</p>
          </div>

          {/* Security badge */}
          <div className="bg-white border-[3px] border-black rounded-[16px] p-[20px] mb-[24px] shadow-[4px_4px_0px_0px_rgba(50,50,50,1)]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[40px] h-[40px] bg-[#f8918a] rounded-full flex items-center justify-center">
                <Lock className="w-[20px] h-[20px] text-white" />
              </div>
              <div>
                <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]">Securely encrypted</p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">Access controlled by you</p>
              </div>
            </div>
          </div>

          {/* Information sections */}
          <div className="space-y-[12px]">
            <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-[#fff5f0] rounded-[8px] flex items-center justify-center border-[2px] border-black">
                  <Users className="w-[20px] h-[20px] text-[#f8918a]" />
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]">Contacts</p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">5 entries</p>
                </div>
              </div>
              <div className="w-[20px] h-[20px] bg-[#e8f5e9] rounded-full flex items-center justify-center">
                <CheckCircle className="w-[14px] h-[14px] text-[#4caf50]" />
              </div>
            </div>

            <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-[#fff5f0] rounded-[8px] flex items-center justify-center border-[2px] border-black">
                  <DollarSign className="w-[20px] h-[20px] text-[#f8918a]" />
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]">Financial Information</p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">3 accounts</p>
                </div>
              </div>
              <div className="w-[20px] h-[20px] bg-[#e8f5e9] rounded-full flex items-center justify-center">
                <CheckCircle className="w-[14px] h-[14px] text-[#4caf50]" />
              </div>
            </div>

            <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-[#fff5f0] rounded-[8px] flex items-center justify-center border-[2px] border-black">
                  <File className="w-[20px] h-[20px] text-[#f8918a]" />
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]">Important Documents</p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">7 documents</p>
                </div>
              </div>
              <div className="w-[20px] h-[20px] bg-[#e8f5e9] rounded-full flex items-center justify-center">
                <CheckCircle className="w-[14px] h-[14px] text-[#4caf50]" />
              </div>
            </div>

            <div className="bg-white border-[2px] border-black rounded-[12px] p-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-[#fff5f0] rounded-[8px] flex items-center justify-center border-[2px] border-black">
                  <Heart className="w-[20px] h-[20px] text-[#f8918a]" />
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]">Wishes</p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]">Completed</p>
                </div>
              </div>
              <div className="w-[20px] h-[20px] bg-[#e8f5e9] rounded-full flex items-center justify-center">
                <CheckCircle className="w-[14px] h-[14px] text-[#4caf50]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bg-white border-t-[2px] border-black px-[24px] py-[12px]">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Home className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Home</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Activity className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Activity</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] bg-[#f8918a] rounded-[12px] flex items-center justify-center">
                <FileText className="w-[20px] h-[20px] text-white" />
              </div>
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[10px] text-[#323232]">Planner</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Users className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Contacts</span>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <Settings className="w-[20px] h-[20px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[10px] text-[#838383]">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MockupsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1440px] mx-auto px-[70px]">
          <div className="text-center mb-[80px]">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[60px] tracking-[-2.4px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle Mockups
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Mobile screen designs showing how SafeCircle works
            </p>
          </div>

          {/* Screen 1: Daily Check-in Overview */}
          <div className="mb-[120px]">
            <div className="flex items-center gap-[80px]">
              <div className="flex-1">
                <DailyCheckInMockup />
              </div>
              <div className="flex-1">
                <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] tracking-[-1.6px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Daily reassurance, without effort
                </h2>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Each day, a simple check-in confirms everything is okay.
                </p>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  If something feels off, your loved ones are automatically informed.
                </p>
              </div>
            </div>
          </div>

          {/* Screen 2: Missed Check-in Alert */}
          <div className="mb-[120px] bg-[#fff5f0] rounded-[20px] p-[60px]">
            <div className="flex items-center gap-[80px]">
              <div className="flex-1">
                <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] tracking-[-1.6px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  If something happens, the right people know
                </h2>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  When a check-in is missed, trusted contacts are notified automatically — so help can reach you without guesswork or delay.
                </p>
              </div>
              <div className="flex-1">
                <MissedCheckInMockup />
              </div>
            </div>
          </div>

          {/* Screen 3: Legacy Overview */}
          <div>
            <div className="flex items-center gap-[80px]">
              <div className="flex-1">
                <LegacyOverviewMockup />
              </div>
              <div className="flex-1">
                <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] leading-[44px] tracking-[-1.6px] text-[#323232] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Everything important, clearly organized
                </h2>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#838383] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Keep essential information in one secure place — so loved ones know what to do, when it matters most.
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