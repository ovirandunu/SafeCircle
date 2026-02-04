'use client';

import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-[4px] hover:bg-black/5 transition-colors cursor-pointer"
        aria-label="Select language"
      >
        <Globe className="w-[18px] h-[18px] text-[#323232]" />
        <span className="text-[15px] font-['Open_Sans:SemiBold',sans-serif] text-[#323232]">
          {currentLanguage.flag}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[180px] bg-white border-[2px] border-black rounded-[8px] shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors cursor-pointer first:rounded-t-[6px] last:rounded-b-[6px] ${
                lang.code === i18n.language
                  ? 'bg-[#fff5f0] text-[#f8918a]'
                  : 'hover:bg-[#f5f5f5] text-[#323232]'
              }`}
            >
              <span className="text-[20px]">{lang.flag}</span>
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[15px]">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
