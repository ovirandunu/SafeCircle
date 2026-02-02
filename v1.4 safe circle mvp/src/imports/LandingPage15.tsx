import svgPaths from "./svg-moxezykatr";
import img621Cd45400297D7C8Aa0B832BannerImageP500Png from "figma:asset/9bcaf7ccf62709a41ffdb3efb123425f2fc74f39.png";
import img621Cd454Cde99E12747C802ETask20ExplanerPng from "figma:asset/d206d20adfb93c264907a931b238b66fef58c166.png";

function HeroTextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0" data-name="Hero text content">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold h-[152px] justify-center relative shrink-0 text-[#323232] text-[0px] tracking-[-3.2px] w-[743px]">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[70px]">
          <span className="text-[70px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`SaaS product experts on demand `}</span>
          <span className="text-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ⚡
          </span>
          <span className="text-[70px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ️
          </span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#838383] text-[24px] tracking-[1px] w-[674px]">
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[26px]">
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{`Let our `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#838383] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
            badass product
          </span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{` help you create a `}</span>
          <span className="text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
            powerful
          </span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{` online presence that lasts with Klumsi`}</span>
        </p>
      </div>
    </div>
  );
}

function HeroMainWithTags() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Hero main with tags">
      <HeroTextContent />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#323232] content-stretch flex h-[60px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[180px]" data-name="Primary button">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.571px]">See plans</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-white content-stretch flex h-[60px] items-center justify-center relative rounded-[4px] shrink-0 w-[180px]" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.571px]">Book a call</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[27px] items-start relative shrink-0" data-name="Buttons">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function HeroMainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29px] items-start left-[70px] top-[245px]" data-name="Hero main content">
      <HeroMainWithTags />
      <Buttons />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute h-[600px] left-[calc(60%-22px)] top-[135px] w-[500px]" data-name="Hero image">
      <div className="absolute h-[600px] left-0 pointer-events-none rounded-[10px] top-0 w-[500px]" data-name="621cd45400297d7c8aa0b832_banner-image-p-500.png">
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img621Cd45400297D7C8Aa0B832BannerImageP500Png} />
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[10px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[21.173px] relative shrink-0 w-[22.309px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3091 21.173">
        <g id="Group 3">
          <path d={svgPaths.p29df0e72} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[5.293px] h-[25.585px] items-center justify-center ml-0 mt-0 relative w-[113px]">
      <Group />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[19.11px] justify-center leading-[0] relative shrink-0 text-[#323232] text-[24.943px] tracking-[-0.7458px] w-[77.272px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.307px]">klumsi</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Group1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Logo">
      <Frame1 />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323232] text-[16px] text-nowrap tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">About us</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323232] text-[16px] text-nowrap tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Products</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323232] text-[16px] text-nowrap tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="bg-[#111] content-stretch flex h-[34px] items-center justify-between p-[10px] relative rounded-[4px] shrink-0 w-[100px]" data-name="Header button">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-nowrap text-white tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Book now</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Tabs">
      <Tabs />
      <HeaderButton />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f8f4ee] content-stretch flex h-[80px] items-center justify-between left-0 px-[70px] py-[10px] top-0 w-[1440px]" data-name="Header">
      <Logo />
      <Tabs1 />
    </div>
  );
}

function MainHero() {
  return (
    <div className="bg-[#f8f4ee] h-[800px] overflow-clip relative shrink-0 w-[1440px]" data-name="Main hero">
      <HeroMainContent />
      <HeroImage />
      <div className="absolute bottom-[93px] left-[calc(40%+101px)] pointer-events-none rounded-[10px] top-[465px] w-[275px]" data-name="621cd454cde99e12747c802e_Task%20explaner.png">
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img621Cd454Cde99E12747C802ETask20ExplanerPng} />
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[10px] shadow-[14px_0px_35px_0px_rgba(33,38,106,0.1)]" />
      </div>
      <Header />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Landing page 15">
      <MainHero />
    </div>
  );
}