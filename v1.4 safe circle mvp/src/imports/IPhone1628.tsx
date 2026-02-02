import imgIPhone1626 from "figma:asset/605fb072405170ad155bf7a6e072cd3618d22317.png";
import imgIPhone1627 from "figma:asset/03f6484f46f1ee259183c9c7e19d83e5f39fa4f7.png";

export default function IPhone() {
  return (
    <div className="bg-[#fff5f0] relative size-full" data-name="iPhone 16 - 28">
      <div className="absolute bg-[#464646] h-[2234px] left-[-66px] top-[-130px] w-[525px]" />
      <p className="absolute font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[61.6px] left-[18px] text-[32px] text-white top-[34px] tracking-[-1.12px] w-[355px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For Trusted Contacts
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[30px] left-[18px] text-[20px] text-white top-[96px] w-[355px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Being designated as a trusted contact means you're there when it matters most. Without consistently asking if everything is fine. `}</p>
      <div className="absolute h-[777px] left-[29px] rounded-[24px] shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] top-[259px] w-[334px]" data-name="iPhone 16 - 26">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone1626} />
        </div>
      </div>
      <div className="absolute h-[777px] left-[29px] rounded-[24px] shadow-[0px_0px_1px_0px_rgba(24,24,27,0.3),0px_8px_16px_0px_rgba(24,24,27,0.1)] top-[1170px] w-[334px]" data-name="iPhone 16 - 27">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone1627} />
        </div>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-[29px] text-[16px] text-white top-[1067px] w-[334px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Install the app to see everything is fine. If you’re loved one is going about their day you see that nothing unusual is detected. `}</p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-white top-[1978px] w-[334px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        If something seems off, you receive an alert with helpful information. If you choose not to install the app, you get alerts via SMS.
      </p>
    </div>
  );
}