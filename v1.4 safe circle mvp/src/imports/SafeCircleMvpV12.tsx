import svgPaths from "./svg-g9zpitiydz";
import imgImageWomanReadingBookAloneAtHome from "figma:asset/85986970382cf0787f06862b543e8b8721cd944f.png";
import imgImageDailyConfirmationScreen from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import { imgVector } from "./svg-eboal";

function Container() {
  return <div className="absolute bg-gradient-to-b blur-3xl filter from-[#ffe388] left-[727px] opacity-20 rounded-[1.67772e+07px] size-[600px] to-[#ffdd6e] top-[-100px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-gradient-to-b blur-3xl filter from-[#f9a49e] left-[-100px] opacity-20 rounded-[1.67772e+07px] size-[500px] to-[#f9675d] top-[514px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="bg-[#f8918a] h-[60px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get Started
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[60px] relative rounded-[8px] shrink-0 w-[180px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#323232] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#323232] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Why SafeCircle
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[60px] relative shrink-0 w-[523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[27px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[516.781px] relative shrink-0 w-[523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[29px] items-start pb-0 pt-[80px] px-0 relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[77px] min-w-full relative shrink-0 text-[#323232] text-[70px] tracking-[-2.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Daily reassurance on auto-pilot
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[33.6px] relative shrink-0 text-[#838383] text-[24px] tracking-[0.3px] w-[512px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          SafeCircle quietly checks that everything’s okay. If something seems off, a trusted contact gets notified to check in with you.
        </p>
        <Container2 />
      </div>
    </div>
  );
}

function ImageWomanReadingBookAloneAtHome() {
  return (
    <div className="h-[594px] relative shrink-0 w-full" data-name="Image (Woman reading book alone at home)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWomanReadingBookAloneAtHome} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[600px] relative rounded-[10px] shrink-0 w-[500px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageWomanReadingBookAloneAtHome />
      </div>
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[600px] items-start justify-between left-[70px] top-[157px] w-[1087px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#fff5f0] h-[914px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <Container />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[12px] px-0 relative shrink-0">
      <Container6 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px px-0 py-px relative shrink-0" data-name="Paragraph">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#323232] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
          /some more information from the jtbd perspective of this product
        </span>{" "}
        <span className="text-[#838383]">just as designed as it is now. please come up with three bullets here. For instance:</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Paragraph />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[12px] px-0 relative shrink-0">
      <Container8 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px px-0 py-px relative shrink-0" data-name="Paragraph">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#323232] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Out of sight does not mean out of mind,
        </span>{" "}
        <span className="text-[#838383]">{`but it is not always visible if you end up in a situation where you need help. `}</span>
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <Paragraph1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[12px] px-0 relative shrink-0">
      <Container10 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px px-0 py-px relative shrink-0" data-name="Paragraph">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#323232] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
          /I do want to be found,
        </span>{" "}
        <span className="text-[#838383]">{`but I don’t want to be monitored. `}</span>
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27px] left-[450.03px] text-[#838383] text-[18px] text-center top-0 translate-x-[-50%] w-[870px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        /Iterate on the description that is currently here. For wellbeing monitor only it does not make much sense.
      </p>
    </div>
  );
}

function Problem() {
  return (
    <div className="bg-white h-[763.188px] relative shrink-0 w-full" data-name="Problem">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-0 pt-[120px] px-[163.5px] relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] relative shrink-0 text-[#323232] text-[56px] text-center tracking-[-1.12px] w-[870px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`I don't want to be unnoticed if something goes wrong`}</p>
        <Container7 />
        <Container9 />
        <Container11 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[123.188px] left-0 top-0 w-[1087px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[543.98px] text-[#323232] text-[56px] text-center top-[-0.5px] tracking-[-1.12px] translate-x-[-50%] w-[952px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Simple. Private. In your control.
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[90px] left-[101.5px] top-[139.19px] w-[884px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] left-[442.06px] text-[#838383] text-[20px] text-center top-[-1px] translate-x-[-50%] w-[870px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        By default, SafeCircle only uses your smartphone. It collects the minimum information needed to let your loved ones know that everything seems fine. No buttons to press, no devices to remember.
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[229.188px] left-[70px] top-[120px] w-[1087px]" data-name="Container">
      <Heading />
      <Paragraph4 />
    </div>
  );
}

function ImageDailyConfirmationScreen() {
  return (
    <div className="h-[533.328px] pointer-events-none relative rounded-[16px] shrink-0 w-full" data-name="Image (Daily confirmation screen)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageDailyConfirmationScreen} />
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[533.328px] relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageDailyConfirmationScreen />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] left-0 text-[#323232] text-[40px] top-[-0.5px] tracking-[-0.8px] w-[542px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maximum reassurance with minimal data collection
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[86.391px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[#838383] text-[18px] top-0 w-[555px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.8px] mb-0">You remain in control at all times:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28.8px]">No cameras, no audio, no recording</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28.8px]">Only signs of usage are tracked (e.g., unlocking your phone, turning on your smart light)</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28.8px]">Data is less than what many popular apps collect</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28.8px]">You can opt to share no activity data at all — just push notifications to confirm you’re okay</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[234.391px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading1 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[96px] h-[533.328px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[57.594px] relative shrink-0 w-full" data-name="Paragraph">
      <ul className="absolute block font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[#838383] text-[18px] top-0 w-[563px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[28.8px]">{`Your loved ones don’t see where you are or what you do. Just that you are ok. `}</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[28.8px]">If something seems off we’ll send them an alertYou can decide what information you want to share in case something seems off, such as your location</span>
        </li>
      </ul>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[161.594px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#323232] text-[40px] tracking-[-0.8px] w-[476px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`/Catchy title, `}</p>
        <Paragraph6 />
      </div>
    </div>
  );
}

function ImageAlertNotificationScreen() {
  return (
    <div className="h-[533.328px] pointer-events-none relative rounded-[16px] shrink-0 w-full" data-name="Image (Alert notification screen)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageDailyConfirmationScreen} />
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[533.328px] relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageAlertNotificationScreen />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[96px] h-[533.328px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[100px] h-[1166.656px] items-start left-[133.5px] top-[429.19px] w-[960px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pd6d0500} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(248,145,138,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] top-0 w-[204px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reassurance without losing independence
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] top-0 w-[187px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        works with what you already have
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow h-[96px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[148px] items-start left-0 pb-[2px] pt-[26px] px-[26px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container22 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(248,145,138,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] top-0 w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quiet updates for your loved ones
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        No daily check-in calls
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 grow h-[75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] h-[75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[148px] items-start left-[375.66px] pb-[2px] pt-[26px] px-[26px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container26 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p369f8680} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p21b0a2c0} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(248,145,138,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thoughtful alerts
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] top-0 w-[191px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peace of mind your way, with alerts tuned to your needs.
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[148px] items-start left-[751.33px] pb-[2px] pt-[26px] px-[26px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[148px] left-[70px] top-[1695.84px] w-[1087px]" data-name="Container">
      <Container23 />
      <Container27 />
      <Container31 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24px] left-[429.96px] top-[1903.84px] w-[367.07px]" data-name="Button">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[184px] text-[#f8918a] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn more about how Wellbeing Monitor works
      </p>
    </div>
  );
}

function WellbeingMonitor() {
  return (
    <div className="bg-[#fff5f0] h-[2047.844px] relative shrink-0 w-full" data-name="WellbeingMonitor">
      <Container12 />
      <Container19 />
      <Container32 />
      <Button2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[123.188px] left-0 top-0 w-[1087px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[543.79px] text-[#323232] text-[56px] text-center top-[-0.5px] tracking-[-1.12px] translate-x-[-50%] w-[963px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Legacy Planner: Everything organized, finally
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[90px] left-[101.5px] top-[139.19px] w-[884px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] left-[442.42px] text-[#838383] text-[20px] text-center top-[-1px] translate-x-[-50%] w-[841px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`One secure place for everything someone would need if something happened to you—financial accounts, important contacts, recurring bills, personal wishes. So your loved ones aren't left searching.`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[229.188px] left-[70px] top-[120px] w-[1087px]" data-name="Container">
      <Heading3 />
      <Paragraph13 />
    </div>
  );
}

function ImageLegacyPlannerGuideScreen() {
  return (
    <div className="h-[533.328px] pointer-events-none relative rounded-[16px] shrink-0 w-full" data-name="Image (Legacy Planner guide screen)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageDailyConfirmationScreen} />
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[533.328px] relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageLegacyPlannerGuideScreen />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] left-0 text-[#323232] text-[40px] top-[-0.5px] tracking-[-0.8px] w-[496px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`We guide you to make sure nothing's missed.`}</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[57.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[28.8px] left-0 text-[#838383] text-[18px] top-0 w-[547px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        SafeCircle helps you build a complete list and makes filling it in as effortless as possible.
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[161.594px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading4 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[96px] h-[533.328px] items-center left-[133.5px] top-[429.19px] w-[960px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clarity instead of uncertainty
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Everything in one place
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[51px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[16px] h-[51px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#fff5f0] content-stretch flex flex-col h-[103px] items-start left-0 pb-[2px] pt-[26px] px-[26px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container39 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 6V12L16 14" id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pace200} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fill in at your own pace
      </p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        No need to do it all at once
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow h-[51px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[16px] h-[51px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#fff5f0] content-stretch flex flex-col h-[103px] items-start left-[375.66px] pb-[2px] pt-[26px] px-[26px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container43 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2dfab7c0} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c300c0} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#323232] text-[16px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Private until needed
      </p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        You control access completely
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 grow h-[51px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] h-[51px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#fff5f0] content-stretch flex flex-col h-[103px] items-start left-[751.33px] pb-[2px] pt-[26px] px-[26px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[103px] left-[70px] top-[1062.52px] w-[1087px]" data-name="Container">
      <Container40 />
      <Container44 />
      <Container48 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[442.48px] top-[1225.52px] w-[342.047px]" data-name="Button">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[171.5px] text-[#f8918a] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn more about how Legacy Planner works
      </p>
    </div>
  );
}

function LegacyPlanner() {
  return (
    <div className="bg-white h-[1369.516px] relative shrink-0 w-full" data-name="LegacyPlanner">
      <Container33 />
      <Container36 />
      <Container49 />
      <Button3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[61.594px] relative shrink-0 w-[697.586px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-0 text-[#323232] text-[56px] text-nowrap top-[-0.5px] tracking-[-1.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Choose Your Peace of Mind
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f8918a] h-[37px] relative rounded-[4px] shrink-0 w-[86.945px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-[43.5px] text-[14px] text-center text-nowrap text-white top-[8px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Monthly
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#ffe388] content-stretch flex h-[17px] items-start left-[62.82px] px-[6px] py-px rounded-[3px] top-[11px] w-[60.961px]" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#323232] text-[11px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save 20%
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-[36px] text-[#323232] text-[14px] text-center text-nowrap top-[8px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Yearly
        </p>
        <Text />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[53px] relative rounded-[6px] shrink-0 w-[250.727px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[61.594px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container50 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#838383] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        All plans come with a 14-day money-back guarantee. Cancel anytime.
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[105.594px] items-start relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Paragraph21 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[42px] left-[40px] top-[40px] w-[251.664px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#323232] text-[28px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wellbeing Monitor
      </p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[42px] left-[40px] top-[90px] w-[251.664px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] top-0 w-[228px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Daily reassurance for you and your loved ones
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[122.391px]" data-name="Text">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[72px] left-0 text-[#323232] text-[48px] top-[-1px] w-[123px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $9.99
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[27px] left-[130.39px] top-[34.5px] w-[89.141px]" data-name="Text">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#838383] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        per month
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[72px] left-[40px] top-[156px] w-[251.664px]" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intelligent daily monitoring
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] top-[-0.5px] w-[195px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`ensures loved ones know you're okay`}</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[61.5px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container54 />
        <Container57 />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col h-[61.5px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container58 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Smart device integration
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        works with what you already have
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
        <Container62 />
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container63 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Smart alert notifications
      </p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        alerts only when needed
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container64 />
        <Container67 />
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container68 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        24/7 monitoring
      </p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        constant reassurance
      </p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container69 />
        <Container72 />
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container73 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[235.5px] items-start left-[40px] top-[260px] w-[251.664px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-white content-stretch flex h-[52px] items-center justify-center left-[40px] p-[2px] rounded-[8px] top-[527.5px] w-[251.664px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#323232] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get Started
      </p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-white border-2 border-black border-solid h-[708.5px] left-0 rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <Heading6 />
      <Paragraph22 />
      <Container53 />
      <List />
      <Link />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[42px] left-[40px] top-[40px] w-[251.664px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#323232] text-[28px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Legacy Planner
      </p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[42px] left-[40px] top-[90px] w-[251.664px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#838383] text-[14px] top-0 w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Organize everything they'd need, ahead of time`}</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[149.836px]" data-name="Text">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[72px] left-0 text-[#323232] text-[48px] top-[-1px] w-[150px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $14.99
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[27px] left-[157.84px] top-[34.5px] w-[89.141px]" data-name="Text">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#838383] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        per month
      </p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[72px] left-[40px] top-[156px] w-[251.664px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secure information vault
      </p>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        all your important info in one place
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container76 />
        <Container79 />
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container80 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`Financial & bill tracking`}</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        never leave loved ones scrambling
      </p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container81 />
        <Container84 />
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container85 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`Contact & wishes storage`}</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] top-[-0.5px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        clear guidance if something happens
      </p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[61.5px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container86 />
        <Container89 />
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex flex-col h-[61.5px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container90 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Emergency protocol access
      </p>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        all instructions ready when needed
      </p>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container91 />
        <Container94 />
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container95 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#323232] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Biometric security options
      </p>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#838383] text-[13px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        your data stays private
      </p>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[32px] top-0 w-[219.664px]" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[251.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container96 />
        <Container99 />
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container100 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[293.5px] items-start left-[40px] top-[260px] w-[251.664px]" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[52px] items-center justify-center left-[40px] p-[2px] rounded-[8px] top-[585.5px] w-[251.664px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#323232] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get Started
      </p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-white border-2 border-black border-solid h-[708.5px] left-[375.66px] rounded-[12px] top-0 w-[335.664px]" data-name="Container">
      <Heading7 />
      <Paragraph23 />
      <Container75 />
      <List1 />
      <Link1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[44.1px] left-[42.1px] top-[42.1px] w-[264.247px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-nowrap text-white top-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Complete Care
      </p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[44.1px] left-[42.1px] top-[94.6px] w-[264.247px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#fff5f0] text-[14px] top-[0.05px] w-[231px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        All-in-one peace of mind, independence, and preparedness
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[75.6px] left-0 top-0 w-[157.328px]" data-name="Text">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[72px] left-0 text-[48px] text-white top-[-0.85px] w-[158px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $19.99
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[28.35px] left-[165.73px] top-[36.23px] w-[93.598px]" data-name="Text">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#fff5f0] text-[18px] text-nowrap top-[0.05px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        per month
      </p>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[75.6px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[61.425px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#ffd966] text-[13px] top-[-0.47px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Bundle both Wellbeing Monitor & Legacy Planner and save 25% vs buying separately`}</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.2px] h-[141.225px] items-start left-[42.1px] top-[163.9px] w-[264.247px]" data-name="Container">
      <Container102 />
      <Paragraph25 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 12.6">
        <g id="Icon">
          <path d={svgPaths.p3fa27d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[21px] top-[2.1px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[47.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[15px] text-white top-[0.05px] w-[172px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Everything in Wellbeing Monitor
      </p>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[20.475px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(255,245,240,0.8)] text-nowrap top-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ongoing reassurance
      </p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.725px] items-start left-[33.6px] top-0 w-[230.647px]" data-name="Container">
      <Container105 />
      <Container106 />
    </div>
  );
}

function Container108() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[264.247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container104 />
        <Container107 />
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex flex-col h-[67.725px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container108 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 12.6">
        <g id="Icon">
          <path d={svgPaths.p3fa27d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[21px] top-[2.1px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[23.625px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[15px] text-nowrap text-white top-[0.05px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Everything in Legacy Planner
      </p>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[20.475px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(255,245,240,0.8)] text-nowrap top-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        preparedness ensured
      </p>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.1px] items-start left-[33.6px] top-0 w-[230.647px]" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[264.247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container109 />
        <Container112 />
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex flex-col h-[44.1px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container113 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 12.6">
        <g id="Icon">
          <path d={svgPaths.p3fa27d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[21px] top-[2.1px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[23.625px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[15px] text-nowrap text-white top-[0.05px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Priority support
      </p>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[20.475px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(255,245,240,0.8)] text-nowrap top-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        fast help when needed
      </p>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.1px] items-start left-[33.6px] top-0 w-[230.647px]" data-name="Container">
      <Container115 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[264.247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container114 />
        <Container117 />
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex flex-col h-[44.1px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container118 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 12.6">
        <g id="Icon">
          <path d={svgPaths.p3fa27d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[21px] top-[2.1px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[23.625px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[15px] text-nowrap text-white top-[0.05px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Complete peace of mind
      </p>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[40.95px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(255,245,240,0.8)] top-[-0.48px] w-[203px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        full solution for independence + security
      </p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col h-[64.575px] items-start left-[33.6px] top-0 w-[230.647px]" data-name="Container">
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[264.247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container119 />
        <Container122 />
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex flex-col h-[64.575px] items-start relative shrink-0 w-full" data-name="List Item">
      <Container123 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.8px] h-[270.9px] items-start left-[42.1px] top-[338.73px] w-[264.247px]" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex h-[54.6px] items-center justify-center left-[42.1px] p-[2px] rounded-[8px] top-[643.23px] w-[264.247px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#f8918a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get Started
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[17.325px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[12px] text-nowrap text-white top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MOST POPULAR
      </p>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[#f8918a] content-stretch flex flex-col h-[37.8px] items-start left-[107.96px] pb-[2px] pt-[11.55px] px-[18.9px] rounded-[20px] top-[-16.7px] w-[132.521px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Text7 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute bg-[#323232] border-2 border-black border-solid h-[743.925px] left-[742.94px] rounded-[12px] top-[-17.71px] w-[352.447px]" data-name="Container">
      <Heading8 />
      <Paragraph24 />
      <Container103 />
      <List2 />
      <Link2 />
      <Container124 />
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[708.5px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container101 />
      <Container125 />
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-[#fff5f0] h-[1134.094px] relative shrink-0 w-full" data-name="PricingSection">
      <div className="content-stretch flex flex-col gap-[80px] items-start pb-0 pt-[120px] px-[70px] relative size-full">
        <Container52 />
        <Container126 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[61.594px] left-0 top-0 w-[1000px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[500.09px] text-[#323232] text-[56px] text-center text-nowrap top-[-0.5px] tracking-[-1.12px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your privacy is protected
      </p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[56px] left-[150px] top-[77.59px] w-[700px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[28px] left-[350.22px] text-[#838383] text-[20px] text-center top-[-1px] translate-x-[-50%] w-[674px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We designed SafeCircle to give you peace of mind without exposing your health status or invading your privacy.
      </p>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[133.594px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph26 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3f2787f0} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[28.594px] left-[32px] top-[88px] w-[416px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[28.6px] left-0 text-[#323232] text-[22px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        No health data shared
      </p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[128.59px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#838383] text-[16px] top-0 w-[360px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`SafeCircle doesn't track or share your health information. We only monitor activity patterns—nothing medical or personal.`}</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute bg-white border-2 border-black border-solid h-[236.594px] left-0 rounded-[12px] top-0 w-[484px]" data-name="Container">
      <Icon19 />
      <Heading10 />
      <Paragraph27 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p10196e00} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p11b952f0} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[28.594px] left-[32px] top-[88px] w-[416px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[28.6px] left-0 text-[#323232] text-[22px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bank-level encryption
      </p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[128.59px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#838383] text-[16px] top-0 w-[412px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your data is encrypted with the same technology banks use. Only people you explicitly authorize can access your information.
      </p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute bg-white border-2 border-black border-solid h-[236.594px] left-[516px] rounded-[12px] top-0 w-[484px]" data-name="Container">
      <Icon20 />
      <Heading11 />
      <Paragraph28 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1a96b600} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3f0c3c00} id="Vector_2" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p376e9780} id="Vector_3" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p1517b200} id="Vector_4" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[28.594px] left-[32px] top-[88px] w-[416px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[28.6px] left-0 text-[#323232] text-[22px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        You control who sees what
      </p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[128.59px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#838383] text-[16px] top-0 w-[407px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Choose exactly what each trusted contact can see. You can change permissions anytime—it's always your decision.`}</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute bg-white border-2 border-black border-solid h-[236.594px] left-0 rounded-[12px] top-[268.59px] w-[484px]" data-name="Container">
      <Icon21 />
      <Heading12 />
      <Paragraph29 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.pe853b80} id="Vector" stroke="var(--stroke-0, #F8918A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[28.594px] left-[32px] top-[88px] w-[416px]" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[28.6px] left-0 text-[#323232] text-[22px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        No cameras or GPS
      </p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[128.59px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#838383] text-[16px] top-0 w-[414px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We never track your location or use cameras. SafeCircle respects your space while keeping you safe.
      </p>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute bg-white border-2 border-black border-solid h-[236.594px] left-[516px] rounded-[12px] top-[268.59px] w-[484px]" data-name="Container">
      <Icon22 />
      <Heading13 />
      <Paragraph30 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[505.188px] relative shrink-0 w-full" data-name="Container">
      <Container128 />
      <Container129 />
      <Container130 />
      <Container131 />
    </div>
  );
}

function PrivacySecurity() {
  return (
    <div className="bg-[#fff5f0] h-[958.781px] relative shrink-0 w-full" data-name="PrivacySecurity">
      <div className="content-stretch flex flex-col gap-[80px] items-start pb-0 pt-[120px] px-[113.5px] relative size-full">
        <Container127 />
        <Container132 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[61.594px] left-[70px] top-[120px] w-[1087px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[543.88px] text-[#323232] text-[56px] text-center text-nowrap top-[-0.5px] tracking-[-1.12px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Common questions
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[27px] relative shrink-0 w-[371.898px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#323232] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Will I need to remember to check in daily?
        </p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative size-full">
          <Text8 />
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-white h-[79px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Button6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[27px] relative shrink-0 w-[306.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#323232] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          How is my information protected?
        </p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative size-full">
          <Text9 />
          <Icon24 />
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="bg-white h-[79px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Button7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[27px] relative shrink-0 w-[378.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#323232] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`Can I change what information I've added?`}</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative size-full">
          <Text10 />
          <Icon25 />
        </div>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-white h-[79px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Button8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[27px] relative shrink-0 w-[411.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#323232] text-[18px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          What if I go on vacation or change my routine?
        </p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative size-full">
          <Text11 />
          <Icon26 />
        </div>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-white h-[79px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Button9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[364px] items-start left-[163.5px] top-[261.59px] w-[900px]" data-name="Container">
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#fff5f0] h-[745.594px] relative shrink-0 w-full" data-name="FAQ">
      <Heading14 />
      <Container137 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[123.188px] left-[213.5px] top-[120px] w-[800px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[400.34px] text-[#323232] text-[56px] text-center top-[-0.5px] tracking-[-1.12px] translate-x-[-50%] w-[616px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Live independently, stay prepared
      </p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[213.5px] top-[267.19px] w-[800px]" data-name="Paragraph">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#838383] text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Join SafeCircle today. 14-day money-back guarantee.
      </p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#f8918a] h-[60px] left-[519.45px] rounded-[8px] top-[335.19px] w-[188.109px]" data-name="Button">
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[94.5px] text-[20px] text-center text-nowrap text-white top-[14px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get Started
      </p>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="bg-white h-[515.188px] relative shrink-0 w-full" data-name="FinalCTA">
      <Heading15 />
      <Paragraph31 />
      <Button10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[24.32%_17.5%_16.09%_17.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.185px_-5.837px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6144 14.3012">
          <path d={svgPaths.pc782100} fill="var(--fill-0, #F8918A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p10637500} fill="var(--fill-0, #F8918A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Container138() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[37.414px] relative shrink-0 w-[109.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[37.415px] left-0 text-[24.943px] text-nowrap text-white top-[0.5px] tracking-[-0.7458px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          SafeCircle
        </p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex gap-[5.289px] h-[37.414px] items-center relative shrink-0 w-full" data-name="Container">
      <Container138 />
      <Container139 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[44.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#fff5f0] text-[14px] top-[-0.5px] w-[203px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peace of mind for independent living.
      </p>
    </div>
  );
}

function Container141() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container140 />
      <Paragraph32 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[96.367px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why SafeCircle
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[165.555px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pricing & What's Included`}</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[115.734px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Privacy & Security`}</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[92.555px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Smart Devices
      </p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Container142() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <List3 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support
      </p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[77.766px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Help Center
      </p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[70.813px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Us
      </p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem17 />
      <ListItem18 />
    </div>
  );
}

function Container143() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading16 />
      <List4 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Legal
      </p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[87.445px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy Policy
      </p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[107.688px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terms of Service
      </p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[52.094px]" data-name="Link">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fff5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Security
      </p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem19 />
      <ListItem20 />
      <ListItem21 />
    </div>
  );
}

function Container144() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading17 />
      <List5 />
    </div>
  );
}

function Container145() {
  return (
    <div className="gap-[80px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[172px] relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Container142 />
      <Container143 />
      <Container144 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#fff5f0] text-[14px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2025 SafeCircle. All rights reserved.
      </p>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Paragraph33 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#323232] h-[406px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[60px] items-start pb-0 pt-[60px] px-[70px] relative size-full">
        <Container145 />
        <Container146 />
      </div>
    </div>
  );
}

function LiveAlonePage() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[8934.203px] items-start left-0 pb-0 pt-[80px] px-0 top-0 w-[1227px]" data-name="LiveAlonePage">
      <Hero />
      <Problem />
      <WellbeingMonitor />
      <LegacyPlanner />
      <PricingSection />
      <PrivacySecurity />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[24.32%_17.5%_16.09%_17.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.185px_-5.837px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6144 14.3012">
          <path d={svgPaths.pc782100} fill="var(--fill-0, #F8918A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p10637500} fill="var(--fill-0, #F8918A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup1 />
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="basis-0 grow h-[37.414px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[37.415px] left-0 text-[#323232] text-[24.943px] text-nowrap top-[0.5px] tracking-[-0.7458px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          SafeCircle
        </p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[37.414px] relative shrink-0 w-[138.633px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.289px] items-center relative size-full">
        <Container147 />
        <Container148 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[69.5px] text-[#323232] text-[16px] text-center text-nowrap top-0 tracking-[-0.14px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Why SafeCircle
        </p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[112.641px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[56px] text-[#323232] text-[16px] text-center text-nowrap top-0 tracking-[-0.14px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          How it works
        </p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.547px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[25px] text-[#323232] text-[16px] text-center text-nowrap top-0 tracking-[-0.14px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Pricing
        </p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[132.633px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[66px] text-[#323232] text-[16px] text-center text-nowrap top-0 tracking-[-0.14px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Privacy & Security`}</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-center justify-end relative">
        <Button11 />
        <Button12 />
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f8918a] h-[40px] relative rounded-[6px] shrink-0 w-[121.195px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-0 relative size-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get started
        </p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[40px] relative shrink-0 w-[792.469px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center justify-end relative size-full">
        <Container149 />
        <Button15 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 pb-px pt-0 px-[70px] top-0 w-[1227px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Link12 />
      <Navigation />
    </div>
  );
}

function App() {
  return (
    <div className="h-[8934.203px] overflow-clip relative shrink-0 w-full" data-name="App">
      <LiveAlonePage />
      <Header />
    </div>
  );
}

export default function SafeCircleMvpV() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="safe circle mvp v1.2">
      <App />
    </div>
  );
}