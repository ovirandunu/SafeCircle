const imgIPhone1626 = '/images/placeholder.png';
const imgIPhone1627 = '/images/placeholder.png';

function Heading() {
  return (
    <div className="h-[61.594px] relative shrink-0 w-[1211px]" data-name="Heading 2">
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[605.2px] text-[56px] text-center text-nowrap text-white top-[-0.5px] tracking-[-1.12px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For Trusted Contacts
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0" data-name="Container">
      <Heading />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-center text-white w-[744px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Being designated as a trusted contact means you're there when it matters most. Without consistently asking if everything is fine. `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <div className="h-[777px] relative rounded-[16px] shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] shrink-0 w-[334px]" data-name="iPhone 16 - 26">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone1626} />
        </div>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Install the app to see everything is fine. If you’re loved one is going about their day you see that nothing unusual is detected. `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <div className="h-[777px] relative rounded-[16px] shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] shrink-0 w-[334px]" data-name="iPhone 16 - 27">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone1627} />
        </div>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white w-[334px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        If something seems off, you receive an alert with helpful information. If you choose not to install the app, you get alerts via SMS.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[96px] items-center relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#464646] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-center p-[64px] relative w-full">
          <Container />
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}