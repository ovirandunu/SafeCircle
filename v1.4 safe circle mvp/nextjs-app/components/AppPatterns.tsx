import { Home, Bell, Settings, User, Search, X, ChevronRight, Loader, Wifi, WifiOff, Battery, Menu, Filter, Trash2, Edit, Share2, MoreVertical, CheckCircle, AlertCircle, Clock, Phone, MessageSquare } from 'lucide-react';

export function NavigationPatterns() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-[100px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
        Navigation Patterns
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bottom Navigation */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Bottom Navigation
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-black rounded-[12px] p-4">
            <div className="flex items-center justify-around">
              <div className="flex flex-col items-center gap-1">
                <Home className="w-[24px] h-[24px] text-[#f8918a]" />
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[11px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Home
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <Bell className="w-[24px] h-[24px] text-[#838383]" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Alerts
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <User className="w-[24px] h-[24px] text-[#838383]" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Contacts
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <Settings className="w-[24px] h-[24px] text-[#838383]" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Settings
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            App Header
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-black rounded-[12px] p-4">
            <div className="flex items-center justify-between">
              <button className="w-[40px] h-[40px] flex items-center justify-center">
                <Menu className="w-[24px] h-[24px] text-[#323232]" />
              </button>
              
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Status
              </h3>
              
              <button className="w-[40px] h-[40px] flex items-center justify-center relative">
                <Bell className="w-[24px] h-[24px] text-[#323232]" />
                <div className="absolute top-[8px] right-[8px] w-[8px] h-[8px] bg-[#f8918a] rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Search Bar
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white border-2 border-black rounded-[8px] px-4 h-[48px] flex items-center gap-3">
              <Search className="w-[20px] h-[20px] text-[#838383]" />
              <input 
                type="text" 
                placeholder="Search..."
                className="flex-1 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232] outline-none bg-transparent" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            <div className="bg-white border-2 border-[#f8918a] rounded-[8px] px-4 h-[48px] flex items-center gap-3">
              <Search className="w-[20px] h-[20px] text-[#f8918a]" />
              <input 
                type="text" 
                value="Active search"
                readOnly
                className="flex-1 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232] outline-none bg-transparent" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
              <X className="w-[20px] h-[20px] text-[#838383] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tab Navigation
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-1 flex gap-1">
            <button className="flex-1 h-[40px] bg-white border-2 border-black rounded-[6px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Overview
            </button>
            <button className="flex-1 h-[40px] bg-transparent font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              History
            </button>
            <button className="flex-1 h-[40px] bg-transparent font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Settings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ListPatterns() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-[100px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
        List Patterns
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Simple List */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Simple List Items
          </h3>
          
          <div className="space-y-3">
            <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center justify-between cursor-pointer hover:bg-white transition-colors">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                List item with arrow
              </span>
              <ChevronRight className="w-[20px] h-[20px] text-[#838383]" />
            </div>

            <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center justify-between">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                List item with value
              </span>
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Active
              </span>
            </div>

            <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[#f8918a]/10 rounded-full flex items-center justify-center">
                  <User className="w-[20px] h-[20px] text-[#f8918a]" />
                </div>
                <div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Sarah Johnson
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Trusted Contact
                  </p>
                </div>
              </div>
              <ChevronRight className="w-[20px] h-[20px] text-[#838383]" />
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Settings List Pattern
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-black rounded-[12px] overflow-hidden">
            <div className="p-4 border-b-2 border-black flex items-center justify-between">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Notifications
              </span>
              <div className="w-[51px] h-[31px] bg-[#f8918a] rounded-full relative">
                <div className="absolute right-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
              </div>
            </div>

            <div className="p-4 border-b-2 border-black flex items-center justify-between cursor-pointer hover:bg-white transition-colors">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Privacy Settings
              </span>
              <ChevronRight className="w-[20px] h-[20px] text-[#838383]" />
            </div>

            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-white transition-colors">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Account
              </span>
              <ChevronRight className="w-[20px] h-[20px] text-[#838383]" />
            </div>
          </div>
        </div>

        {/* Action List */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Action List Items
          </h3>
          
          <div className="space-y-3">
            <button className="w-full bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center gap-3 hover:bg-white transition-colors">
              <Phone className="w-[20px] h-[20px] text-[#f8918a]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Call Contact
              </span>
            </button>

            <button className="w-full bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center gap-3 hover:bg-white transition-colors">
              <MessageSquare className="w-[20px] h-[20px] text-[#f8918a]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Send Message
              </span>
            </button>

            <button className="w-full bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center gap-3 hover:bg-white transition-colors">
              <Edit className="w-[20px] h-[20px] text-[#838383]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Edit Details
              </span>
            </button>

            <button className="w-full bg-[#fff5f0] border-2 border-black rounded-[8px] p-4 flex items-center gap-3 hover:bg-white transition-colors">
              <Trash2 className="w-[20px] h-[20px] text-[#f8918a]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Delete Contact
              </span>
            </button>
          </div>
        </div>

        {/* Menu Item with Icon */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Menu Options
          </h3>
          
          <button className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-3 flex items-center gap-3 mb-4">
            <MoreVertical className="w-[20px] h-[20px] text-[#323232]" />
          </button>

          <div className="bg-white border-2 border-black rounded-[8px] shadow-lg">
            <button className="w-full p-3 flex items-center gap-3 hover:bg-[#fff5f0] transition-colors border-b border-[#f0f0f0]">
              <Edit className="w-[18px] h-[18px] text-[#323232]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Edit
              </span>
            </button>
            <button className="w-full p-3 flex items-center gap-3 hover:bg-[#fff5f0] transition-colors border-b border-[#f0f0f0]">
              <Share2 className="w-[18px] h-[18px] text-[#323232]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Share
              </span>
            </button>
            <button className="w-full p-3 flex items-center gap-3 hover:bg-[#fff5f0] transition-colors">
              <Trash2 className="w-[18px] h-[18px] text-[#f8918a]" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatusBadges() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-[100px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status Indicators & Badges
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Status Badges */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Status Badges
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#38c77f] text-white px-3 py-1 rounded-[6px] font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Active
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Success state
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#FFA500] text-white px-3 py-1 rounded-[6px] font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Concern
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Warning state
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#f8918a] text-white px-3 py-1 rounded-[6px] font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Paused
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Neutral state
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#e0e0e0] text-[#838383] px-3 py-1 rounded-[6px] font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Inactive
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Disabled state
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white border-2 border-[#f8918a] text-[#f8918a] px-3 py-1 rounded-[6px] font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                New
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Outlined variant
              </span>
            </div>
          </div>
        </div>

        {/* Notification Badges */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Notification Badges
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-[32px] h-[32px] text-[#323232]" />
                <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-[#f8918a] rounded-full flex items-center justify-center">
                  <span className="font-['Open_Sans:Bold',sans-serif] text-[10px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    3
                  </span>
                </div>
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Number badge
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-[32px] h-[32px] text-[#323232]" />
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] bg-[#f8918a] rounded-full border-2 border-white"></div>
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dot indicator
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-[32px] h-[32px] text-[#838383]" />
              </div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No notifications
              </span>
            </div>
          </div>
        </div>

        {/* Status Dots */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Status Dots
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[12px] h-[12px] bg-[#38c77f] rounded-full"></div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Online / Active
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[12px] h-[12px] bg-[#FFA500] rounded-full"></div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Away / Warning
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[12px] h-[12px] bg-[#f8918a] rounded-full"></div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Needs Attention
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[12px] h-[12px] bg-[#e0e0e0] rounded-full"></div>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Offline / Inactive
              </span>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Progress Indicators
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Setup Progress
                </span>
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  75%
                </span>
              </div>
              <div className="h-[8px] bg-[#f0f0f0] rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-[#f8918a] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Battery Level
                </span>
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#38c77f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  45%
                </span>
              </div>
              <div className="h-[8px] bg-[#f0f0f0] rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-[#38c77f] rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Loader className="w-[24px] h-[24px] text-[#f8918a] animate-spin" />
              <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Loading spinner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EmptyStates() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-[100px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empty & Error States
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Empty State */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Empty State
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-[#f0f0f0] rounded-[12px] p-12 text-center">
            <div className="w-[80px] h-[80px] bg-[#f8918a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-[40px] h-[40px] text-[#f8918a]" />
            </div>
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              No contacts yet
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add trusted contacts to get started with SafeCircle
            </p>
            <button className="bg-[#f8918a] h-[44px] px-6 rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add Contact
            </button>
          </div>
        </div>

        {/* Error State */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Error State
          </h3>
          
          <div className="bg-[#f8918a]/5 border-2 border-[#f8918a]/30 rounded-[12px] p-8 text-center">
            <div className="w-[64px] h-[64px] bg-[#f8918a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-[32px] h-[32px] text-[#f8918a]" />
            </div>
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              Connection Error
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Unable to connect to SafeCircle. Please check your internet connection.
            </p>
            <button className="bg-white border-2 border-black h-[40px] px-6 rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Try Again
            </button>
          </div>
        </div>

        {/* Loading State */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Loading State
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-[#f0f0f0] rounded-[12px] p-12 text-center">
            <Loader className="w-[48px] h-[48px] text-[#f8918a] animate-spin mx-auto mb-4" />
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Loading your data...
            </p>
          </div>
        </div>

        {/* No Connection State */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            No Connection State
          </h3>
          
          <div className="bg-[#fff5f0] border-2 border-[#f0f0f0] rounded-[12px] p-8 text-center">
            <div className="w-[64px] h-[64px] bg-[#838383]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <WifiOff className="w-[32px] h-[32px] text-[#838383]" />
            </div>
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              You're offline
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Some features may not be available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Alerts() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-[100px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alerts & Notifications
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Success Alert */}
        <div className="bg-[#38c77f]/10 border-2 border-[#38c77f] rounded-[12px] p-5 flex items-start gap-4">
          <CheckCircle className="w-[24px] h-[24px] text-[#38c77f] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              Check-in successful
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your trusted contacts have been notified that you're okay.
            </p>
          </div>
          <button className="flex-shrink-0">
            <X className="w-[20px] h-[20px] text-[#323232]" />
          </button>
        </div>

        {/* Warning Alert */}
        <div className="bg-[#FFA500]/10 border-2 border-[#FFA500] rounded-[12px] p-5 flex items-start gap-4">
          <AlertCircle className="w-[24px] h-[24px] text-[#FFA500] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              No recent activity detected
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Sarah hasn't been active for 18 hours. You may want to check in.
            </p>
          </div>
          <button className="flex-shrink-0">
            <X className="w-[20px] h-[20px] text-[#323232]" />
          </button>
        </div>

        {/* Info Alert */}
        <div className="bg-[#f8918a]/10 border-2 border-[#f8918a]/30 rounded-[12px] p-5 flex items-start gap-4">
          <AlertCircle className="w-[24px] h-[24px] text-[#f8918a] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              Privacy reminder
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              You're in push-only mode. Remember to check in daily.
            </p>
          </div>
          <button className="flex-shrink-0">
            <X className="w-[20px] h-[20px] text-[#323232]" />
          </button>
        </div>

        {/* Toast Notification */}
        <div className="bg-white border-2 border-black rounded-[12px] p-4 flex items-center gap-3 shadow-lg max-w-[400px]">
          <div className="w-[40px] h-[40px] bg-[#38c77f]/10 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-[20px] h-[20px] text-[#38c77f]" />
          </div>
          <div className="flex-1">
            <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Settings saved
            </p>
          </div>
          <button className="flex-shrink-0">
            <X className="w-[18px] h-[18px] text-[#838383]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Modals() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-[100px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modals & Dialogs
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Confirmation Dialog */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Confirmation Dialog
          </h3>
          
          <div className="bg-white border-2 border-black rounded-[12px] p-6 shadow-xl">
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
              Pause monitoring?
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your trusted contacts won't be notified if you're inactive while monitoring is paused.
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-white border-2 border-black h-[44px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Cancel
              </button>
              <button className="flex-1 bg-[#f8918a] h-[44px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                Pause
              </button>
            </div>
          </div>
        </div>

        {/* Destructive Dialog */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Destructive Action
          </h3>
          
          <div className="bg-white border-2 border-black rounded-[12px] p-6 shadow-xl">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-[40px] h-[40px] bg-[#f8918a]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <div>
                <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Delete contact?
                </h4>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-white border-2 border-black h-[44px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Cancel
              </button>
              <button className="flex-1 bg-[#f8918a] h-[44px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Action Sheet */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Action Sheet (Mobile)
          </h3>
          
          <div className="bg-white border-2 border-black rounded-t-[16px] shadow-xl">
            <div className="p-4 border-b-2 border-[#f0f0f0] text-center">
              <div className="w-[40px] h-[4px] bg-[#e0e0e0] rounded-full mx-auto mb-3"></div>
              <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Choose an action
              </h4>
            </div>
            <button className="w-full p-4 text-left hover:bg-[#fff5f0] transition-colors border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Edit Contact
              </span>
            </button>
            <button className="w-full p-4 text-left hover:bg-[#fff5f0] transition-colors border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Call Contact
              </span>
            </button>
            <button className="w-full p-4 text-left hover:bg-[#fff5f0] transition-colors">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[16px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Remove Contact
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Sheet */}
        <div className="bg-white border-2 border-black rounded-[12px] p-8">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Bottom Sheet Filter
          </h3>
          
          <div className="bg-white border-2 border-black rounded-t-[16px] shadow-xl">
            <div className="p-5 border-b-2 border-[#f0f0f0]">
              <div className="w-[40px] h-[4px] bg-[#e0e0e0] rounded-full mx-auto mb-4"></div>
              <div className="flex items-center justify-between">
                <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Filter
                </h4>
                <button>
                  <X className="w-[24px] h-[24px] text-[#323232]" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#f8918a] rounded-[4px] bg-[#f8918a] flex items-center justify-center">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active Only
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-[4px]"></div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Show Paused
                  </span>
                </div>
              </div>
              <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
