import svgPaths from "./svg-tpbn7h743g";
const imgIllustration1 = '/images/placeholder.png';
const imgIllustration2 = '/images/placeholder.png';

function HeaderIllustration() {
  return (
    <div className="absolute inset-[0_0.08%_0.15%_0]" data-name="header-illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663.441 605.103">
        <g id="header-illustration">
          <path clipRule="evenodd" d={svgPaths.p14c63b00} fill="url(#paint0_linear_2001_116)" fillRule="evenodd" id="Path" />
          <path d={svgPaths.p2a0bfbf0} fill="var(--fill-0, #FFF4D0)" id="Shape" />
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p4ab3000} fill="url(#paint1_linear_2001_116)" fillRule="evenodd" id="Path_2" />
            <path d={svgPaths.p28261700} fill="var(--fill-0, #F9A49E)" id="Shape_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_116" x1="39678.5" x2="3521.43" y1="21439.8" y2="21439.8">
            <stop stopColor="#FFE388" />
            <stop offset="1" stopColor="#FFDD6E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2001_116" x1="-519.014" x2="-32625.1" y1="3021.02" y2="1261.13">
            <stop offset="0.0278405" stopColor="#F79089" />
            <stop offset="1" stopColor="#F9675D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_0.08%_0.15%_0]" data-name="Page-1">
      <HeaderIllustration />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[606px] left-1/2 top-0 translate-x-[-50%] w-[664px]" data-name="Frame">
      <Page />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute h-[606px] left-[calc(60%+112px)] overflow-clip top-[-129px] w-[664px]" data-name="hero image 1">
      <Frame />
    </div>
  );
}

function HeaderIllustration1() {
  return (
    <div className="absolute inset-[0_0.08%_0.15%_0]" data-name="header-illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663.441 605.103">
        <g id="header-illustration">
          <path clipRule="evenodd" d={svgPaths.p14c63b00} fill="url(#paint0_linear_2001_116)" fillRule="evenodd" id="Path" />
          <path d={svgPaths.p2a0bfbf0} fill="var(--fill-0, #FFF4D0)" id="Shape" />
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p4ab3000} fill="url(#paint1_linear_2001_116)" fillRule="evenodd" id="Path_2" />
            <path d={svgPaths.p28261700} fill="var(--fill-0, #F9A49E)" id="Shape_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_116" x1="39678.5" x2="3521.43" y1="21439.8" y2="21439.8">
            <stop stopColor="#FFE388" />
            <stop offset="1" stopColor="#FFDD6E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2001_116" x1="-519.014" x2="-32625.1" y1="3021.02" y2="1261.13">
            <stop offset="0.0278405" stopColor="#F79089" />
            <stop offset="1" stopColor="#F9675D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute contents inset-[0_0.08%_0.15%_0]" data-name="Page-1">
      <HeaderIllustration1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[606px] left-1/2 top-0 translate-x-[-50%] w-[664px]" data-name="Frame">
      <Page1 />
    </div>
  );
}

function HeroImage1() {
  return (
    <div className="absolute h-[606px] left-[-227px] overflow-clip top-[516px] w-[664px]" data-name="Hero image 2">
      <Frame2 />
    </div>
  );
}

function HeroTextMain() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Hero text main">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] h-[137px] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-1.2px] w-[778px]">
        <p className="leading-[62px] text-[60px]">
          <span className="text-[#1f2937]">Elevate Your Brand with</span> <span className="text-[#1f2937]">{`Custom Design `}</span>
          <span className="text-[#f8918a]">Solutions</span>
        </p>
      </div>
    </div>
  );
}

function HeroMainContent() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-center ml-[13px] mt-[39px] relative" data-name="Hero main content">
      <HeroTextMain />
    </div>
  );
}

function HeroHeaderMain() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mb-[-11px] place-items-start relative shrink-0" data-name="Hero header main">
      <HeroMainContent />
      <div className="[grid-area:1_/_1] h-[51.734px] ml-0 mt-0 relative w-[125.266px]" data-name="Illustration 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIllustration1} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[50px] ml-[500px] mt-[156px] relative w-[258px]" data-name="Illustration 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIllustration2} />
        </div>
      </div>
    </div>
  );
}

function HeroTectContent() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] pb-[11px] pt-0 px-0 relative shrink-0" data-name="Hero tect content">
      <HeroHeaderMain />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[63px] justify-center mb-[-11px] not-italic relative shrink-0 text-[#838383] text-[24px] text-center tracking-[1px] w-[665px]">
        <p className="leading-[26px]">
          <span>{`Let our `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:SemiBold',sans-serif] not-italic text-[#f8918a] underline">badass product</span>
          <span>{` help you create a powerful online presence that lasts with Klumsi`}</span>
        </p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#f8918a] content-stretch flex h-[62px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[221px]" data-name="Primary button">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[28.571px]">Get Started</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Buttons">
      <PrimaryButton />
    </div>
  );
}

function HeroMainContent1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[calc(20%+36px)] top-[229px]" data-name="Hero main content">
      <HeroTectContent />
      <Buttons />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[21.173px] relative shrink-0 w-[22.309px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3091 21.173">
        <g id="Group 3">
          <path d={svgPaths.p29df0e72} fill="var(--fill-0, #F8918A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[5.293px] h-[25.585px] items-center justify-center ml-0 mt-0 relative w-[113px]">
      <Group />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[19.11px] justify-center leading-[0] relative shrink-0 text-[24.943px] text-black tracking-[-0.7458px] w-[77.272px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.307px]">klumsi</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Group1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Logo">
      <Frame3 />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.14px]">
        <p className="leading-[20px]">About us</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.14px]">
        <p className="leading-[20px]">Products</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.14px]">
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
    <div className="bg-[#f8918a] content-stretch flex h-[40px] items-center justify-between p-[10px] relative rounded-[20px] shrink-0 w-[124px]" data-name="Header button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap text-white tracking-[-0.14px]">
        <p className="leading-[20px]">Get started</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[20px] shrink-0" data-name="Tabs">
      <HeaderButton />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[70px] py-[20px] top-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_1px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Logo />
      <Tabs />
      <Tabs1 />
    </div>
  );
}

function MainHero() {
  return (
    <div className="bg-[#ffedec] h-[800px] overflow-clip relative shrink-0 w-[1440px]" data-name="Main hero">
      <HeroImage />
      <HeroImage1 />
      <HeroMainContent1 />
      <Header />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Landing page 26">
      <MainHero />
    </div>
  );
}