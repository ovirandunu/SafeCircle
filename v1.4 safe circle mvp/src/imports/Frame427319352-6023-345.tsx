import svgPaths from "./svg-cj6etlemvh";

function Heading1() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] left-0 text-[#323232] text-[40px] top-[-0.5px] tracking-[-1.6px] w-[456px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        If something happens, the right people know
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#838383] text-[18px] top-[-0.5px] w-[509px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        When a check-in is missed, trusted contacts are notified automatically — so help can reach you without guesswork or delay.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[200px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[892px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-0 pr-[67.25px] py-0 relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#fff5f0] content-stretch flex flex-col h-[1012px] items-start left-0 pb-0 pt-[60px] px-[60px] top-0 w-[782px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today, Dec 30
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p3a9caf00} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p3e8c6800} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#fff3e0] content-stretch flex items-center justify-center left-[111.5px] rounded-[1.67772e+07px] size-[64px] top-[35px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 px-[36px] py-0 top-[115px] w-[303px]" data-name="Heading 2">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#323232] text-[24px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No response detected
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[42px] left-[35px] top-[195px] w-[217px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-[108.66px] text-[#838383] text-[14px] text-center top-0 translate-x-[-50%] w-[189px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        No activity since yesterday at 9:00 PM
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[90.95px] text-[#323232] text-[13px] text-center top-[-0.5px] translate-x-[-50%] w-[168px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trusted contacts have been notified
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#fff5f0] content-stretch flex flex-col h-[75px] items-start left-[35px] pb-[2px] pt-[18px] px-[18px] rounded-[12px] top-[257px] w-[217px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8918a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Paragraph3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[367px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[16px] shadow-[4px_4px_0px_0px_#323232]" />
      <Container3 />
      <Heading3 />
      <Paragraph2 />
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notifications Sent
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[13.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] left-0 text-[14px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          JD
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[58.07px]" data-name="Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#323232] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jane Doe
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-0 top-[24px] w-[195px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#838383] text-[12px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notified 2:15 PM
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[42px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[42px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#323232] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          MS
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#ffe388] relative rounded-[1.67772e+07px] shrink-0 size-[36px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[2px] pr-[2.008px] py-[2px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[91.984px]" data-name="Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#323232] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Michael Smith
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[18px] left-0 top-[24px] w-[195px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#838383] text-[12px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notified 2:15 PM
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[42px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[42px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[2px] pt-[22px] px-[22px] relative size-full">
          <Heading2 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fff5f0] content-stretch flex flex-col gap-[24px] h-[664px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0 w-[351px]" data-name="Container">
      <Paragraph1 />
      <Container5 />
      <Container13 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p251be040} id="Vector_2" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[28.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#838383] text-[10px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Home
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[59px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container15 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6020_995)" id="Icon">
          <path d={svgPaths.p1fa1f780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_6020_995">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 bg-[#f8918a] grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[33.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[#323232] text-[10px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Activity
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[59px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container17 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p22bece00} id="Vector" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32c66f80} id="Vector_2" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33464 7.5H6.66797" id="Vector_3" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3346 10.833H6.66797" id="Vector_4" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3346 14.167H6.66797" id="Vector_5" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#838383] text-[10px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Planner
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[59px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container19 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p39a73980} id="Vector" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p5fae200} id="Vector_2" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2ceba900} id="Vector_3" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2262cff0} id="Vector_4" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[40.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#838383] text-[10px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Contacts
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[59px] relative shrink-0 w-[40.695px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container21 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p96b3700} id="Vector" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #838383)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[37.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#838383] text-[10px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Settings
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[59px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container23 />
        <Text8 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8.625px] pr-[8.648px] py-0 relative size-full">
          <Container16 />
          <Container18 />
          <Container20 />
          <Container22 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[85px] items-start pb-0 pt-[14px] px-[24px] relative shrink-0 w-[351px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[54px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[351px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-[104.25px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#323232] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Alert Details
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex h-[61px] items-center justify-between left-0 pb-[2px] pt-0 px-[24px] top-[54px] w-[351px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-black border-solid inset-0 pointer-events-none" />
      <Icon6 />
      <Heading />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white h-[757px] left-[904px] rounded-[32px] top-[132px] w-[351px]" data-name="Container">
      <div className="content-stretch flex flex-col items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container26 />
        <StatusBarIPhone />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <Container2 />
      <Container29 />
    </div>
  );
}