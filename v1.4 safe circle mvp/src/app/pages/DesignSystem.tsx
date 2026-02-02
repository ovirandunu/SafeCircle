import { CheckCircle, Camera, Mic, MapPin, Activity, Phone, MessageSquare, Clock, AlertCircle, Info, User, Bell, Settings, Home, Search, X, ChevronRight, Plus, Minus, Loader, Wifi, WifiOff, Battery, BatteryCharging, Menu, Filter, Download, Upload, Trash2, Edit, Share2, MoreVertical } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavigationPatterns, ListPatterns, StatusBadges, EmptyStates, Alerts, Modals } from '../components/AppPatterns';

export default function DesignSystem() {
  return (
    <div className="bg-[#fff5f0] min-h-screen">
      <Header />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px] py-16 sm:py-20 lg:py-[120px]">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-[80px]">
          <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            SafeCircle Design System
          </h1>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] max-w-[800px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            Visual language, components, and guidelines
          </p>
          <div className="mt-6 bg-[#f8918a]/10 border-2 border-[#f8918a]/30 rounded-[12px] p-4 max-w-[600px] mx-auto">
            <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              💡 For Figma Import
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Visit <a href="/design-system-figma" className="text-[#f8918a] underline">/design-system-figma</a> for a version optimized for copy-pasting into Figma with proper auto layout structure.
            </p>
          </div>
        </div>

        {/* Color Palette */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Color Palette
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary */}
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-full h-[120px] bg-[#f8918a] rounded-[8px] mb-4 border-2 border-black"></div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary Coral
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                #f8918a
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary actions, CTAs, highlights
              </p>
            </div>

            {/* Background */}
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-full h-[120px] bg-[#fff5f0] rounded-[8px] mb-4 border-2 border-black"></div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Background Peachy
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                #fff5f0
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Page backgrounds, soft containers
              </p>
            </div>

            {/* Success */}
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-full h-[120px] bg-[#38c77f] rounded-[8px] mb-4 border-2 border-black"></div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Success Green
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                #38c77f
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Success states, positive confirmations
              </p>
            </div>

            {/* Dark Text */}
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-full h-[120px] bg-[#323232] rounded-[8px] mb-4 border-2 border-black"></div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dark Gray
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                #323232
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary text, headers, borders
              </p>
            </div>

            {/* Medium Gray */}
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-full h-[120px] bg-[#838383] rounded-[8px] mb-4 border-2 border-black"></div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Medium Gray
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                #838383
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Secondary text, captions
              </p>
            </div>

            {/* Warning Orange */}
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-full h-[120px] bg-[#FFA500] rounded-[8px] mb-4 border-2 border-black"></div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Warning Orange
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                #FFA500
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Warnings, concerns, alerts
              </p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Typography
          </h2>
          
          <div className="bg-white border-2 border-black rounded-[12px] p-8 mb-6">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Primary Font: Open Sans
            </h3>
            
            {/* Headings */}
            <div className="space-y-6">
              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    H1 / ExtraBold / 56px / -0.02em tracking
                  </span>
                </div>
                <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Page Heading
                </h1>
              </div>

              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    H2 / ExtraBold / 40px
                  </span>
                </div>
                <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[40px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Section Heading
                </h2>
              </div>

              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    H3 / Bold / 28px
                  </span>
                </div>
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Subsection Heading
                </h3>
              </div>

              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    H4 / Bold / 20px
                  </span>
                </div>
                <h4 className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Card Heading
                </h4>
              </div>

              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Body Large / Regular / 18px / 1.6 line-height
                  </span>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[18px] leading-[1.6] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This is large body text used for important paragraphs and introductions. It provides good readability and emphasis.
                </p>
              </div>

              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Body / Regular / 16px / 1.5 line-height
                  </span>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] leading-[1.5] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This is standard body text used for general content, descriptions, and most paragraphs throughout the application.
                </p>
              </div>

              <div className="border-b border-[#f0f0f0] pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Body Small / Regular / 14px / 1.5 line-height
                  </span>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] leading-[1.5] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This is small body text used for supporting information and secondary content.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Caption / Regular / 13px / 1.4 line-height
                  </span>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This is caption text used for labels, hints, and minor details.
                </p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div className="bg-white border-2 border-black rounded-[12px] p-8">
            <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Weights
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Regular
                </span>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  SemiBold
                </span>
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Bold
                </span>
                <span className="font-['Open_Sans:Bold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ExtraBold
                </span>
                <span className="font-['Open_Sans:ExtraBold',sans-serif] text-[20px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Buttons
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Button */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Primary Button
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Main action buttons, CTAs
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-[#f8918a] h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Primary Button
                </button>
                
                <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Medium Primary
                </button>
                
                <button className="w-full bg-[#f8918a] h-[44px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Small Primary
                </button>
              </div>
            </div>

            {/* Secondary Button */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Secondary Button
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Alternative actions, less emphasis
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white border-2 border-black h-[52px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Secondary Button
                </button>
                
                <button className="w-full bg-white border-2 border-black h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[15px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Medium Secondary
                </button>
                
                <button className="w-full bg-white border-2 border-black h-[44px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Small Secondary
                </button>
              </div>
            </div>

            {/* Button with Icon */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Buttons with Icons
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                For actions with visual context
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] flex items-center justify-center gap-2 font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <Phone className="w-[18px] h-[18px]" />
                  Call Contact
                </button>
                
                <button className="w-full bg-white border-2 border-black h-[48px] rounded-[8px] flex items-center justify-center gap-2 font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <MessageSquare className="w-[18px] h-[18px]" />
                  Send Message
                </button>
                
                <button className="w-full bg-[#38c77f] h-[48px] rounded-[8px] flex items-center justify-center gap-2 font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <CheckCircle className="w-[18px] h-[18px]" />
                  I'm Okay
                </button>
              </div>
            </div>

            {/* Button States */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Button States
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Hover, disabled, and active states
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white hover:bg-[#e67b70] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Hover Me
                </button>
                
                <button className="w-full bg-[#f8918a] h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white opacity-50 cursor-not-allowed" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Disabled State
                </button>
                
                <button className="w-full bg-[#e67b70] h-[48px] rounded-[8px] flex items-center justify-center font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Active/Pressed
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Form Elements
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Inputs */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text Inputs
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] mb-2 block" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Label
                  </label>
                  <input 
                    type="text" 
                    placeholder="Placeholder text"
                    className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-4 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                </div>

                <div>
                  <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] mb-2 block" style={{ fontVariationSettings: "'wdth' 100" }}>
                    With value
                  </label>
                  <input 
                    type="text" 
                    value="Entered text"
                    readOnly
                    className="w-full h-[48px] bg-white border-2 border-black rounded-[8px] px-4 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#323232]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                </div>

                <div>
                  <label className="font-['Open_Sans:SemiBold',sans-serif] text-[13px] text-[#323232] mb-2 block" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Disabled
                  </label>
                  <input 
                    type="text" 
                    placeholder="Disabled input"
                    disabled
                    className="w-full h-[48px] bg-[#f0f0f0] border-2 border-[#e0e0e0] rounded-[8px] px-4 font-['Open_Sans:Regular',sans-serif] text-[15px] text-[#838383] cursor-not-allowed" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                </div>
              </div>
            </div>

            {/* Toggle Switches */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Toggle Switches
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Toggle On
                  </span>
                  <div className="w-[51px] h-[31px] bg-[#f8918a] rounded-full relative cursor-pointer">
                    <div className="absolute right-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Toggle Off
                  </span>
                  <div className="w-[51px] h-[31px] bg-[#e0e0e0] rounded-full relative cursor-pointer">
                    <div className="absolute left-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between opacity-50">
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Toggle Disabled
                  </span>
                  <div className="w-[51px] h-[31px] bg-[#f0f0f0] rounded-full relative">
                    <div className="absolute left-[2px] top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Radio Buttons
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#f8918a] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-[10px] h-[10px] bg-[#f8918a] rounded-full"></div>
                  </div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Selected Option
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-full flex-shrink-0"></div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Unselected Option
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-full flex-shrink-0"></div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Disabled Option
                  </span>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Checkboxes
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#f8918a] rounded-[4px] bg-[#f8918a] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Checked
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-[4px] flex-shrink-0"></div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Unchecked
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-[20px] h-[20px] border-2 border-[#e0e0e0] rounded-[4px] flex-shrink-0"></div>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Disabled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards & Containers */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cards & Containers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard Card */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Standard Card
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Border: 2px solid black
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Border Radius: 12px
              </p>
            </div>

            {/* Info Card */}
            <div className="bg-[#fff5f0] border-2 border-[#f8918a]/30 rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Info Card
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Background: #fff5f0
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Border: 2px solid coral/30%
              </p>
            </div>

            {/* Success Card */}
            <div className="bg-[#38c77f]/5 border-2 border-[#38c77f]/30 rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Success Card
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Background: green/5%
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Border: 2px solid green/30%
              </p>
            </div>

            {/* Warning Card */}
            <div className="bg-[#FFA500]/10 border-2 border-[#FFA500] rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                Warning Card
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Background: orange/10%
              </p>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Border: 2px solid orange
              </p>
            </div>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Icons
          </h2>
          
          <div className="bg-white border-2 border-black rounded-[12px] p-8">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
              We use Lucide React icons. Standard sizes: 16px, 18px, 20px, 24px
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <CheckCircle className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  CheckCircle
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <Camera className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Camera
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <Mic className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Mic
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <MapPin className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  MapPin
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#38c77f]/10 rounded-[8px] flex items-center justify-center">
                  <Activity className="w-[24px] h-[24px] text-[#38c77f]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Activity
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <Phone className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Phone
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <MessageSquare className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  MessageSquare
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#838383]/10 rounded-[8px] flex items-center justify-center">
                  <Clock className="w-[24px] h-[24px] text-[#838383]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Clock
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#FFA500]/10 rounded-[8px] flex items-center justify-center">
                  <AlertCircle className="w-[24px] h-[24px] text-[#FFA500]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  AlertCircle
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center">
                  <Info className="w-[24px] h-[24px] text-[#f8918a]" />
                </div>
                <span className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#838383] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Info
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing System */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Spacing System
          </h2>
          
          <div className="bg-white border-2 border-black rounded-[12px] p-8">
            <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
              Consistent spacing scale based on 4px increments
            </p>
            
            <div className="space-y-4">
              {[
                { name: '2xs', value: '4px', width: '4px' },
                { name: 'xs', value: '8px', width: '8px' },
                { name: 'sm', value: '12px', width: '12px' },
                { name: 'md', value: '16px', width: '16px' },
                { name: 'lg', value: '24px', width: '24px' },
                { name: 'xl', value: '32px', width: '32px' },
                { name: '2xl', value: '48px', width: '48px' },
                { name: '3xl', value: '64px', width: '64px' },
                { name: '4xl', value: '80px', width: '80px' },
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-6">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {space.name}
                  </span>
                  <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {space.value}
                  </span>
                  <div className="h-[24px] bg-[#f8918a] rounded-[2px]" style={{ width: space.width }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Border Radius & Shadows */}
        <section className="mb-16 sm:mb-20 lg:mb-[100px]">
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Border Radius & Shadows
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Border Radius */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Border Radius
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-[4px] border-2 border-black"></div>
                  <div>
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Small
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      4px - Checkboxes, badges
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-[8px] border-2 border-black"></div>
                  <div>
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Medium
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      8px - Buttons, inputs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-[12px] border-2 border-black"></div>
                  <div>
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Large
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      12px - Cards, containers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-[24px] border-2 border-black"></div>
                  <div>
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      XL
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      24px - Phone mockups
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-[80px] h-[80px] bg-[#f8918a] rounded-full border-2 border-black"></div>
                  <div>
                    <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Full
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      9999px - Circular elements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div className="bg-white border-2 border-black rounded-[12px] p-8">
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] text-[#323232] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Shadows
              </h3>
              
              <div className="space-y-8">
                <div>
                  <div className="w-[120px] h-[80px] bg-white border-2 border-black rounded-[8px] shadow mb-3"></div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Small Shadow
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Subtle depth for buttons
                  </p>
                </div>

                <div>
                  <div className="w-[120px] h-[80px] bg-white border-2 border-black rounded-[8px] shadow-lg mb-3"></div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Large Shadow
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Elevated cards
                  </p>
                </div>

                <div>
                  <div className="w-[120px] h-[80px] bg-white border-2 border-black rounded-[8px] shadow-2xl mb-3"></div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    XL Shadow
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Phone mockups, modals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Patterns & Components */}
        <NavigationPatterns />
        <ListPatterns />
        <StatusBadges />
        <EmptyStates />
        <Alerts />
        <Modals />

        {/* Design Principles */}
        <section>
          <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[32px] lg:text-[40px] text-[#323232] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Design Principles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-[48px] h-[48px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center mb-4">
                <CheckCircle className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                Clarity First
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.6]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Every element should have clear purpose. Strong contrast, defined borders, and consistent spacing ensure nothing is ambiguous.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-[48px] h-[48px] bg-[#38c77f]/10 rounded-[8px] flex items-center justify-center mb-4">
                <Activity className="w-[24px] h-[24px] text-[#38c77f]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                Reassurance
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.6]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Soft colors and rounded corners create warmth while maintaining professionalism. The design reduces anxiety, not increases it.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-[12px] p-6">
              <div className="w-[48px] h-[48px] bg-[#f8918a]/10 rounded-[8px] flex items-center justify-center mb-4">
                <Info className="w-[24px] h-[24px] text-[#f8918a]" />
              </div>
              <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] text-[#323232] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                Accessibility
              </h3>
              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] leading-[1.6]" style={{ fontVariationSettings: "'wdth' 100" }}>
                High contrast ratios, clear typography, and generous spacing ensure the interface works for everyone, regardless of ability.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}