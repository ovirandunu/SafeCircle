function Heading() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#323232] text-[28px] text-nowrap top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        How it works
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow h-[81.586px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27.2px] left-0 text-[#323232] text-[17px] top-0 w-[754px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`SafeCircle learns your normal daily patterns using your phone and any smart devices you already have. It observes that activity is happening during your typical routine—not what you're doing or where you are. (/emphasize that only with minimal data collection, less than many popular apps)`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[81.586px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="basis-0 grow h-[81.586px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27.2px] left-0 text-[#323232] text-[17px] top-0 w-[745px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Each day, when your activity matches your normal pattern, SafeCircle automatically marks you as checked in. Your trusted contacts receive quiet confirmation that you're going about your day. (/emphasize that this is the case only if trusted contact installed the app. if not, no news is good news)`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[81.586px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 grow h-[81.586px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27.2px] left-0 text-[#323232] text-[17px] top-0 w-[756px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`If your routine changes significantly—for example, no activity is detected for an unusual length of time—SafeCircle waits a reasonable period (/emphasize that user can decide what is this reasonable time), then alerts your trusted contacts. (/emphasize that this can be via the app but also sms/whatsapp/e-mail). They can reach out to you directly. `}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[81.586px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Paragraph2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f8918a] relative rounded-[1.67772e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          4
        </p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow h-[54.391px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[27.2px] left-0 text-[#323232] text-[17px] top-0 w-[714px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`You can manually check in anytime, adjust your settings, or pause monitoring when you're traveling or your schedule changes.`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[54.391px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Paragraph3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[359.148px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[425.148px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#323232] text-[24px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What this is not
      </p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[21.5px] items-start left-0 top-[2px] w-[195.242px]" data-name="Bold Text">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[25.6px] min-h-px min-w-px relative shrink-0 text-[#323232] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not emergency services.
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] left-0 text-[#323232] text-[16px] top-0 w-[731px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`SafeCircle alerts your contacts, not 911. It's designed for peace of mind, not crisis response.`}</p>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[21.5px] items-start left-0 top-[2px] w-[195.25px]" data-name="Bold Text">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[25.6px] min-h-px min-w-px relative shrink-0 text-[#323232] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not medical monitoring.
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText1 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] left-0 text-[#323232] text-[16px] top-0 w-[718px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`It doesn't track health metrics, fall detection, or vital signs. It observes general activity patterns only.`}</p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[21.5px] items-start left-0 top-[2px] w-[135.375px]" data-name="Bold Text">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[25.6px] min-h-px min-w-px relative shrink-0 text-[#323232] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not surveillance.
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText2 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] left-0 text-[#323232] text-[16px] top-0 w-[711px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`No cameras, no GPS tracking, no recording of what you're doing. Just pattern recognition from devices you already use.`}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[185.563px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[309.563px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading1 />
        <Container10 />
      </div>
    </div>
  );
}

export default function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative size-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}