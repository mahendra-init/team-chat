import React from "react";
import {
  fire,
  foursquare,
  message,
  bookmark,
  group,
  phone,
  info,
  shutdown,
} from "../assets";

function SideBar() {
  return (
    <div className="sideBar-container pt-[30px] border-r-1">
      <div className="flex flex-col h-full w-[60px] mx-auto">
        <div className="upper-div flex-none h-[134px] mt-6">
          <img src={fire} alt="fire" className="mx-auto" />
        </div>
        <div className="middle-div flex-grow flex flex-col items-center justify-start space-y-10 pt-3">
          <img src={foursquare} alt="foursquare" className="mx-auto" />
          <div className="rounded-full h-[36px] w-[36px] bg-[#FF731D] relative">
            <img
              src={message}
              alt="message"
              className="absolute inset-0 m-auto"
            />
          </div>

          <img src={group} alt="group" className="mx-auto" />
          <img src={phone} alt="phone" className="mx-auto" />
          <img src={bookmark} alt="bookmark" className="mx-auto" />
          <img src={info} alt="info" className="mx-auto" />
        </div>
        <div className="lower-div flex-none h-[40px] pt-2 mb-5">
          <img src={shutdown} alt="shutdown" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
