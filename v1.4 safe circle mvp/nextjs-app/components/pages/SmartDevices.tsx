'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SmartDevices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const devices = [
    {
      category: 'Smart Home Hubs & Assistants',
      items: [
        { name: 'Amazon Alexa', description: 'All Echo devices and Alexa-enabled smart speakers' },
        { name: 'Google Home / Nest', description: 'Google Assistant devices and Nest smart home products' }
      ]
    },
    {
      category: 'Smart Lighting',
      items: [
        { name: 'Philips Hue', description: 'All Philips Hue smart bulbs, strips, and fixtures' },
        { name: 'LIFX', description: 'Wi-Fi enabled smart bulbs' }
      ]
    },
    {
      category: 'Smart Thermostats',
      items: [
        { name: 'Nest Learning Thermostat', description: 'All Nest thermostat models' },
        { name: 'Ecobee', description: 'SmartThermostat and room sensors' }
      ]
    },
    {
      category: 'Smart Locks & Security',
      items: [
        { name: 'August Smart Lock', description: 'Keyless entry and access control' },
        { name: 'Ring Video Doorbell', description: 'Doorbell cameras and motion sensors' }
      ]
    },
    {
      category: 'Smart Plugs & Switches',
      items: [
        { name: 'TP-Link Kasa Smart Plug', description: 'Wi-Fi enabled outlet control' },
        { name: 'Amazon Smart Plug', description: 'Works with Alexa' }
      ]
    },
    {
      category: 'Wearables & Health Devices',
      items: [
        { name: 'Apple Watch', description: 'Activity and health monitoring' },
        { name: 'Fitbit', description: 'All Fitbit fitness trackers and smartwatches' }
      ]
    },
    {
      category: 'Your Smartphone',
      items: [
        { name: 'iPhone', description: 'iOS 14 and later' },
        { name: 'Android', description: 'Android 9.0 and later' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Which smart devices can I connect?',
      answer: 'SafeCircle integrates with the most popular smart home devices and platforms. We support all major brands including Philips Hue, Amazon Alexa, Google Home/Nest, Apple HomeKit, Ring, Fitbit, and more. We are actively working on adding more device integrations. Your smartphone alone provides valuable data, but adding smart devices improves accuracy.'
    },
    {
      question: 'Do I need to buy new devices?',
      answer: 'Not at all! SafeCircle works with devices you likely already own. Your smartphone is the most important device, and many people already have a smart speaker (Alexa, Google Home) or a smart thermostat. If you don\'t have any smart devices, we can recommend affordable options starting at $10-15 for a smart plug.'
    },
    {
      question: 'How does SafeCircle connect to my devices?',
      answer: 'SafeCircle uses secure API connections through the manufacturer\'s cloud services. You simply authorize SafeCircle to access your device data during setup—similar to linking your smart speaker to a music app. We never require physical access to your devices and can\'t control them.'
    },
    {
      question: 'What data does SafeCircle collect from my devices?',
      answer: 'SafeCircle only collects activity timestamps and basic usage patterns—not specific details. For example, we see "phone was unlocked at 8:15 AM" but not what you did on it. For smart lights, we see "living room light turned on" but not brightness or color. We never access cameras, microphones, or personal content.'
    },
    {
      question: 'Can SafeCircle control my devices?',
      answer: 'No. SafeCircle is read-only—it monitors your device activity patterns but cannot control, adjust, or activate any of your devices. We can\'t turn lights on/off, adjust your thermostat, or unlock doors. Your devices remain fully under your control.'
    },
    {
      question: 'What if a device I own isn\'t listed?',
      answer: 'We\'re constantly adding new device integrations. If your device works with Alexa, Google Home, or Apple HomeKit, it likely works with SafeCircle even if not explicitly listed. Contact our support team and we\'ll help you check compatibility and potentially add integration for your specific device.'
    },
    {
      question: 'How many devices do I need for SafeCircle to work well?',
      answer: 'Your smartphone alone provides a solid foundation for monitoring. Adding 1-2 smart devices in key areas (like a smart plug for your bedroom lamp or a smart speaker in your living room) significantly improves detection accuracy. Most users find 2-4 connected devices provides excellent coverage.'
    },
    {
      question: 'Is my smart home data secure?',
      answer: 'Absolutely. We use bank-level encryption (AES-256) for all data transmission and storage. Device connections are authorized through official manufacturer APIs with your explicit permission. We never sell device data, and you can revoke access or disconnect any device at any time from your SafeCircle dashboard.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px] pt-[92px] sm:pt-[96px] lg:pt-[120px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[48px] lg:text-[70px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Compatible Smart Devices
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              SafeCircle works with the most popular smart home devices you already own. We are actively working on adding more device integrations. No cameras, no intrusion—just intelligent monitoring through your existing technology.
            </p>
          </div>
        </div>
      </section>

      {/* Devices List */}
      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[40px] mb-12 sm:mb-16 lg:mb-[80px]">
            {devices.map((category, idx) => (
              <div key={idx} className="bg-[#fff5f0] border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[40px]">
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[24px] text-[#323232] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {category.category}
                </h3>
                <ul className="space-y-[16px]">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-[12px] items-start">
                      <div className="w-[8px] h-[8px] bg-[#f8918a] rounded-full mt-[8px] shrink-0" />
                      <div>
                        <div className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.name}
                        </div>
                        <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.description}
                        </div>
                      </div>
                    </li>
                  ))}
                  {category.category !== 'Your Smartphone' && (
                    <li className="flex gap-[12px] items-start pt-[8px]">
                      <div className="w-[8px] h-[8px] bg-[#838383] rounded-full mt-[8px] shrink-0" />
                      <div className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
                        More devices coming soon
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-[70px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-[80px]">
            <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Smart Device Questions
            </h2>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.4] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Everything you need to know about device compatibility
            </p>
          </div>

          <div className="space-y-[16px]">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-[2px] border-black rounded-[8px] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 lg:px-[32px] py-4 sm:py-5 lg:py-[24px] flex items-center justify-between text-left hover:bg-[#fff5f0] transition-colors cursor-pointer"
                >
                  <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-[#323232] pr-4 sm:pr-6 lg:pr-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] text-[#323232] shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 lg:px-[32px] pb-4 sm:pb-5 lg:pb-[24px] pt-[0px]">
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}