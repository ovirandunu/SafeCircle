import svgPaths from "./svg-dbls1q5a9i";
const imgPlaceholderImage = '/images/placeholder.png';

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[118px] top-[1706px] w-[550px]">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#323232] text-[40px] tracking-[-1.6px] w-[592px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screenshot title
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#838383] text-[18px] w-[592px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screenshot description
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-1/2 top-[2458px] translate-x-[-50%]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f8918a] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn more about how Wellbeing Monitor works
      </p>
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[276px] items-center left-[237.11px] text-center top-[120px] w-[885px]">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#323232] text-[56px] tracking-[-2.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product name: Catchy title
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#838383] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Few sentence summary of the product
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[650px] top-[705px] w-[596px]" data-name="Container">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#323232] text-[40px] tracking-[-1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screenshot title
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#838383] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screenshot description
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3fe18e80} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(248,145,138,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#323232] text-[15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Selling point title
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#838383] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Selling point description
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[16px] relative size-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[44px] h-[96px] items-start justify-center left-[132px] top-[2307px] w-[1088px]">
      {[...Array(3).keys()].map((_, i) => (
        <Container3 key={i} />
      ))}
    </div>
  );
}

function PlaceholderImage() {
  return (
    <div className="absolute h-[852px] left-[113px] pointer-events-none rounded-[16px] top-[483px] w-[393px]" data-name="Placeholder image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgPlaceholderImage} />
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function PlaceholderImage1() {
  return (
    <div className="absolute h-[852px] left-[827px] pointer-events-none rounded-[16px] top-[1301px] w-[393px]" data-name="Placeholder image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgPlaceholderImage} />
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function WellbeingMonitor() {
  return (
    <div className="absolute bg-[#fff5f0] h-[2602px] left-0 top-0 w-[1359px]" data-name="WellbeingMonitor">
      <Frame1 />
      <Frame3 />
      <Frame />
      <Container />
      <Frame2 />
      <PlaceholderImage />
      <PlaceholderImage1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[1219px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] left-[609.48px] text-[#323232] text-[56px] text-center text-nowrap top-[-0.5px] tracking-[-2.4px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product name: Catchy title
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[159.5px] px-[8px] py-0 top-[84px]" data-name="Paragraph">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#838383] text-[20px] text-center w-[884px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Few sentence summary of the product
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[236px] left-[70px] top-[120px] w-[1219px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[637px] top-[757px] w-[596px]" data-name="Container">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#323232] text-[40px] tracking-[-1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screenshot title
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#838383] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Screenshot description
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcfbcf00} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#323232] text-[15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Selling point title
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#838383] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Selling point description
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-[#fff5f0] grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[16px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[44px] h-[96px] items-start justify-center left-[143px] top-[1423px] w-[1088px]">
      {[...Array(3).keys()].map((_, i) => (
        <Container8 key={i} />
      ))}
    </div>
  );
}

function PlaceholderImage2() {
  return (
    <div className="absolute h-[852px] left-[139px] pointer-events-none rounded-[16px] top-[440px] w-[393px]" data-name="Placeholder image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgPlaceholderImage} />
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-1/2 top-[1584px] translate-x-[-50%]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f8918a] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn more about how Legacy Planner works
      </p>
      <Icon3 />
    </div>
  );
}

function LegacyPlanner() {
  return (
    <div className="absolute bg-white h-[1733px] left-0 top-[2602px] w-[1359px]" data-name="LegacyPlanner">
      <Container4 />
      <Container5 />
      <Frame4 />
      <PlaceholderImage2 />
      <Frame5 />
    </div>
  );
}

export default function ExampleWithCopyAsSemanticDescription() {
  return (
    <div className="relative size-full" data-name="Example with copy as semantic description">
      <WellbeingMonitor />
      <LegacyPlanner />
    </div>
  );
}