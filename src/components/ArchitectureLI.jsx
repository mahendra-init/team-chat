import { hamburger, shared } from "../assets";

function ArchitectureLI({ heading, subheading }) {
  return (
    <li className="flex items-center justify-between ml-2">
      <div className="flex items-center justify-start space-x-2">
        <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center bg-[#F7F5F4] mr-2">
          <img src={shared} alt="gallery" className="h-[18px] w-[15px]" />
        </div>
        <div className="flex flex-col items-start justify-center ml-3 space-y-1">
          <p className="text-[#000000] text-[14px] leading-[16.94px] font-[500]">
            {heading}
          </p>
          <p className="text-[#A19791] text-[12px] leading-[14.52px] font-[400]">
            {subheading}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={hamburger} alt="gallery" className="h-[16px] w-[16px]" />
      </div>
    </li>
  );
}

export default ArchitectureLI;
