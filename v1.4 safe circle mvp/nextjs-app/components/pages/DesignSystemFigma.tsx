import { CheckCircle, Camera, Mic, MapPin, Activity, Phone, MessageSquare, Clock, AlertCircle, Info, User, Bell, Settings, Home, Search, X, ChevronRight, Plus, Loader, Wifi, WifiOff, Trash2, Edit, Share2, MoreVertical } from 'lucide-react';
import { NavigationPatternsFigma, ListPatternsFigma, StatusBadgesFigma, EmptyStatesFigma, AlertsFigma, ModalsFigma } from '@/components/AppPatternsFigma';

export default function DesignSystemFigma() {
  return (
    <div className="bg-[#fff5f0] w-[1440px] flex flex-col items-center py-[80px] px-[70px] gap-[100px]">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          SafeCircle Design System
        </h1>
        <p className="font-['Open_Sans:Regular',sans-serif] text-[20px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Visual language, components, and guidelines
        </p>
      </div>

      {/* Color Palette Section */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Color Palette
        </h2>
        
        <div className="flex gap-[24px] flex-wrap">
          {/* Primary Coral */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[380px]">
            <div className="w-full h-[120px] bg-[#f8918a] rounded-[8px] border-2 border-black"></div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary Coral
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                #f8918a
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary actions, CTAs, highlights
              </p>
            </div>
          </div>

          {/* Background Peachy */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[380px]">
            <div className="w-full h-[120px] bg-[#fff5f0] rounded-[8px] border-2 border-black"></div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Background Peachy
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                #fff5f0
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Page backgrounds, soft containers
              </p>
            </div>
          </div>

          {/* Success Green */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[380px]">
            <div className="w-full h-[120px] bg-[#38c77f] rounded-[8px] border-2 border-black"></div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Success Green
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                #38c77f
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Success states, positive confirmations
              </p>
            </div>
          </div>

          {/* Dark Gray */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[380px]">
            <div className="w-full h-[120px] bg-[#323232] rounded-[8px] border-2 border-black"></div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dark Gray
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                #323232
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary text, headers, borders
              </p>
            </div>
          </div>

          {/* Medium Gray */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[380px]">
            <div className="w-full h-[120px] bg-[#838383] rounded-[8px] border-2 border-black"></div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Medium Gray
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                #838383
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Secondary text, captions
              </p>
            </div>
          </div>

          {/* Warning Orange */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[380px]">
            <div className="w-full h-[120px] bg-[#FFA500] rounded-[8px] border-2 border-black"></div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Warning Orange
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                #FFA500
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Warnings, concerns, alerts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Section */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Typography
        </h2>
        
        <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px]">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type Scale
          </h3>
          
          <div className="flex flex-col gap-[24px]">
            {/* H1 */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                H1 / ExtraBold / 56px / -0.02em tracking
              </span>
              <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Page Heading
              </h1>
            </div>

            {/* H2 */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                H2 / ExtraBold / 40px
              </span>
              <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Section Heading
              </h2>
            </div>

            {/* H3 */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                H3 / Bold / 28px
              </span>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Subsection Heading
              </h3>
            </div>

            {/* H4 */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                H4 / Bold / 20px
              </span>
              <h4 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Card Heading
              </h4>
            </div>

            {/* Body Large */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Body Large / Regular / 18px / 1.6 line-height
              </span>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[1.6] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                This is large body text used for important paragraphs.
              </p>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Body / Regular / 16px / 1.5 line-height
              </span>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                This is standard body text used for general content.
              </p>
            </div>

            {/* Body Small */}
            <div className="flex flex-col gap-[8px] pb-[24px] border-b border-[#f0f0f0]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Body Small / Regular / 14px / 1.5 line-height
              </span>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                This is small body text for supporting information.
              </p>
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-[8px]">
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Caption / Regular / 13px / 1.4 line-height
              </span>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                This is caption text for labels and hints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Buttons
        </h2>
        
        <div className="flex gap-[24px]">
          {/* Primary Buttons */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px] flex-1">
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary Button
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Main action buttons, CTAs
              </p>
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <button className="w-full h-[52px] bg-[#f8918a] rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Primary Button
                </span>
              </button>
              
              <button className="w-full h-[48px] bg-[#f8918a] rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Medium Primary
                </span>
              </button>
              
              <button className="w-full h-[44px] bg-[#f8918a] rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Small Primary
                </span>
              </button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px] flex-1">
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Secondary Button
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Alternative actions
              </p>
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <button className="w-full h-[52px] bg-white border-2 border-black rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Secondary Button
                </span>
              </button>
              
              <button className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Medium Secondary
                </span>
              </button>
              
              <button className="w-full h-[44px] bg-white border-2 border-black rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Small Secondary
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Elements Section */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Form Elements
        </h2>
        
        <div className="flex gap-[24px]">
          {/* Text Inputs */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Text Inputs
            </h3>
            
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Label
                </label>
                <input 
                  type="text" 
                  placeholder="Placeholder text"
                  className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-[16px] font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  With value
                </label>
                <input 
                  type="text" 
                  value="Entered text"
                  readOnly
                  className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-[16px] font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </div>
          </div>

          {/* Toggle Switches */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Toggle Switches
            </h3>
            
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center justify-between">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Toggle On
                </span>
                <div className="w-[51px] h-[31px] bg-[#f8918a] rounded-full flex items-center px-[2px]">
                  <div className="w-[27px] h-[27px] bg-white rounded-full ml-auto"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Toggle Off
                </span>
                <div className="w-[51px] h-[31px] bg-[#e0e0e0] rounded-full flex items-center px-[2px]">
                  <div className="w-[27px] h-[27px] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Cards & Containers
        </h2>
        
        <div className="flex gap-[24px]">
          {/* Standard Card */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[8px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Standard Card
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Border: 2px solid black
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Border Radius: 12px
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[12px] p-[32px] flex flex-col gap-[8px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Info Card
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Background: #fff5f0
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Border: 2px coral/30%
            </p>
          </div>

          {/* Success Card */}
          <div className="bg-[#38c77f]/5 border-2 border-[#38c77f]/30 rounded-[12px] p-[32px] flex flex-col gap-[8px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Success Card
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Background: green/5%
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Border: 2px green/30%
            </p>
          </div>
        </div>
      </div>

      {/* App Components - Bottom Navigation */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Navigation Components
        </h2>
        
        <div className="flex gap-[24px]">
          {/* Bottom Navigation */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Bottom Navigation
            </h3>
            
            <div className="bg-[#fff5f0] border-2 border-black rounded-[12px] p-[16px] flex items-center justify-around">
              <div className="flex flex-col items-center gap-[4px]">
                <Home className="w-[24px] h-[24px] text-[#f8918a]" />
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[11px] text-[#f8918a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Home
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-[4px]">
                <Bell className="w-[24px] h-[24px] text-[#838383]" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Alerts
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-[4px]">
                <User className="w-[24px] h-[24px] text-[#838383]" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Contacts
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-[4px]">
                <Settings className="w-[24px] h-[24px] text-[#838383]" />
                <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Settings
                </span>
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[24px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              App Header
            </h3>
            
            <div className="bg-[#fff5f0] border-2 border-black rounded-[12px] p-[16px] flex items-center justify-between">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <MoreVertical className="w-[24px] h-[24px] text-[#323232]" />
              </div>
              
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Status
              </h3>
              
              <div className="w-[40px] h-[40px] flex items-center justify-center relative">
                <Bell className="w-[24px] h-[24px] text-[#323232]" />
                <div className="absolute top-[8px] right-[8px] w-[8px] h-[8px] bg-[#f8918a] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Items */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          List Items
        </h2>
        
        <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[12px]">
          {/* Simple List Item */}
          <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-[16px] flex items-center justify-between">
            <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              List item with arrow
            </span>
            <ChevronRight className="w-[20px] h-[20px] text-[#838383]" />
          </div>

          {/* List Item with Avatar */}
          <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-[16px] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="w-[40px] h-[40px] bg-[#f8918a]/10 rounded-full flex items-center justify-center">
                <User className="w-[20px] h-[20px] text-[#f8918a]" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Sarah Johnson
                </span>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Trusted Contact
                </span>
              </div>
            </div>
            <ChevronRight className="w-[20px] h-[20px] text-[#838383]" />
          </div>

          {/* Action List Item */}
          <div className="bg-[#fff5f0] border-2 border-black rounded-[8px] p-[16px] flex items-center gap-[12px]">
            <Phone className="w-[20px] h-[20px] text-[#f8918a]" />
            <span className="font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Call Contact
            </span>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Status Indicators
        </h2>
        
        <div className="flex gap-[24px]">
          {/* Badges */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[16px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Status Badges
            </h3>
            
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="bg-[#38c77f] text-white px-[12px] py-[4px] rounded-[6px] flex items-center justify-center">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Success state
                </span>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="bg-[#FFA500] text-white px-[12px] py-[4px] rounded-[6px] flex items-center justify-center">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Concern
                  </span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Warning state
                </span>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="bg-[#f8918a] text-white px-[12px] py-[4px] rounded-[6px] flex items-center justify-center">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Paused
                  </span>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Neutral state
                </span>
              </div>
            </div>
          </div>

          {/* Notification Badges */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[32px] flex flex-col gap-[16px] flex-1">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Notification Badges
            </h3>
            
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-[16px]">
                <div className="relative">
                  <Bell className="w-[32px] h-[32px] text-[#323232]" />
                  <div className="absolute -top-[4px] -right-[4px] w-[18px] h-[18px] bg-[#f8918a] rounded-full flex items-center justify-center">
                    <span className="font-['Open_Sans:Bold',sans-serif] text-[10px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      3
                    </span>
                  </div>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Number badge
                </span>
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="relative">
                  <Bell className="w-[32px] h-[32px] text-[#323232]" />
                  <div className="absolute -top-[4px] -right-[4px] w-[10px] h-[10px] bg-[#f8918a] rounded-full border-2 border-white"></div>
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Dot indicator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Alerts & Notifications
        </h2>
        
        <div className="flex flex-col gap-[16px]">
          {/* Success Alert */}
          <div className="bg-[#38c77f]/10 border-2 border-[#38c77f] rounded-[12px] p-[20px] flex items-start gap-[16px]">
            <CheckCircle className="w-[24px] h-[24px] text-[#38c77f]" />
            <div className="flex-1 flex flex-col gap-[4px]">
              <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Check-in successful
              </h4>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Your trusted contacts have been notified that you're okay.
              </p>
            </div>
            <X className="w-[20px] h-[20px] text-[#323232]" />
          </div>

          {/* Warning Alert */}
          <div className="bg-[#FFA500]/10 border-2 border-[#FFA500] rounded-[12px] p-[20px] flex items-start gap-[16px]">
            <AlertCircle className="w-[24px] h-[24px] text-[#FFA500]" />
            <div className="flex-1 flex flex-col gap-[4px]">
              <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No recent activity detected
              </h4>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Sarah hasn't been active for 18 hours. You may want to check in.
              </p>
            </div>
            <X className="w-[20px] h-[20px] text-[#323232]" />
          </div>

          {/* Info Alert */}
          <div className="bg-[#f8918a]/10 border-2 border-[#f8918a]/30 rounded-[12px] p-[20px] flex items-start gap-[16px]">
            <AlertCircle className="w-[24px] h-[24px] text-[#f8918a]" />
            <div className="flex-1 flex flex-col gap-[4px]">
              <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Privacy reminder
              </h4>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                You're in push-only mode. Remember to check in daily.
              </p>
            </div>
            <X className="w-[20px] h-[20px] text-[#323232]" />
          </div>
        </div>
      </div>

      {/* Modals */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Modals & Dialogs
        </h2>
        
        <div className="flex gap-[24px]">
          {/* Confirmation Dialog */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[400px]">
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Pause monitoring?
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your trusted contacts won't be notified if you're inactive while monitoring is paused.
            </p>
            <div className="flex gap-[12px]">
              <button className="flex-1 h-[44px] bg-white border-2 border-black rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Cancel
                </span>
              </button>
              <button className="flex-1 h-[44px] bg-[#f8918a] rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Pause
                </span>
              </button>
            </div>
          </div>

          {/* Destructive Dialog */}
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] w-[400px]">
            <div className="flex items-start gap-[12px]">
              <div className="w-[40px] h-[40px] bg-[#f8918a]/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Delete contact?
                </h4>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <button className="flex-1 h-[44px] bg-white border-2 border-black rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Cancel
                </span>
              </button>
              <button className="flex-1 h-[44px] bg-[#f8918a] rounded-[8px] flex items-center justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Empty States */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Empty States
        </h2>
        
        <div className="bg-[#fff5f0] border-2 border-[#f0f0f0] rounded-[12px] p-[48px] flex flex-col items-center gap-[24px]">
          <div className="w-[80px] h-[80px] bg-[#f8918a]/10 rounded-full flex items-center justify-center">
            <User className="w-[40px] h-[40px] text-[#f8918a]" />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              No contacts yet
            </h4>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add trusted contacts to get started with SafeCircle
            </p>
          </div>
          <button className="h-[44px] px-[24px] bg-[#f8918a] rounded-[8px] flex items-center justify-center">
            <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add Contact
            </span>
          </button>
        </div>
      </div>

      {/* App Patterns - Navigation, Lists, Status, Empty States, Alerts, Modals */}
      <NavigationPatternsFigma />
      <ListPatternsFigma />
      <StatusBadgesFigma />
      <EmptyStatesFigma />
      <AlertsFigma />
      <ModalsFigma />

      {/* Design Principles */}
      <div className="flex flex-col gap-[32px] w-full">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Design Principles
        </h2>
        
        <div className="flex gap-[24px]">
          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] flex-1">
            <div className="w-[48px] h-[48px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
              <CheckCircle className="w-[24px] h-[24px] text-[#f8918a]" />
            </div>
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Clarity First
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.6]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Every element should have clear purpose. Strong contrast, defined borders, and consistent spacing ensure nothing is ambiguous.
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] flex-1">
            <div className="w-[48px] h-[48px] bg-[#38c77f]/10 rounded-[8px] flex items-center justify-center">
              <Activity className="w-[24px] h-[24px] text-[#38c77f]" />
            </div>
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Reassurance
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.6]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Soft colors and rounded corners create warmth while maintaining professionalism. The design reduces anxiety, not increases it.
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-[12px] p-[24px] flex flex-col gap-[16px] flex-1">
            <div className="w-[48px] h-[48px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
              <Info className="w-[24px] h-[24px] text-[#f8918a]" />
            </div>
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Accessibility
            </h3>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.6]" style={{ fontVariationSettings: "'wdth' 100" }}>
              High contrast ratios, clear typography, and generous spacing ensure the interface works for everyone, regardless of ability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}