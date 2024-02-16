import React from "react";
import { edit1, gallery, attachment, microphone, telegram } from "../assets";

function Footer() {
  return (
    <div className="h-[44px] w-full absolute bottom-[2%]">
      <div className="flex ml-12 mr-8 space-x-3 items-center justify-between ">
        <div className="ml-8 flex items-center justify-center space-x-2">
          <img src={edit1} alt="edit" />
          <input
            className="sub-heading_dark p-2 focus:outline-none placeholder:sub-heading_light"
            placeholder="Your message...."
          />
        </div>
        <div className="flex items-center justify-center">
          <img src={microphone} alt="edit" className="mx-3" />
          <img src={gallery} alt="edit" className="mx-3" />
          <img src={attachment} alt="edit" className="mx-3" />
          <div className="ml-5">
            <img src={telegram} alt="edit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
