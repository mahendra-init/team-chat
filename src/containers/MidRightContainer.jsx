import React from "react";
import { webcam, phone, clg_grp, user1, user3, user2, user10 } from "../assets";
import { Footer, Message } from "../components";
import {
  yesterdayMessageContent,
  todayMessageContent,
} from "../constant/messages";

function MidRightContainer() {
  return (
    <div className="mid-container_right relative">
      {/* message top bar */}
      <div className="upper w-full flex items-center justify-between px-[30px] pt-1 mt-[30px] h-[134px] pb-10">
        <div className="flex items-center justify-start space-x-2">
          <div className="circle relative">
            <img
              src={clg_grp}
              alt="user1"
              className="h-14 w-14 absolute inset-0 m-auto "
            />
          </div>
          <div className="flex flex-col items-start justify-center ml-3">
            <h1 className="text-xl font-bold leading-4 text-left text-black">
              College group
            </h1>
            <div className="mt-3 flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-[30px] w-[30px] rounded-full ring-2 ring-white"
                src={user1}
                alt=""
              />
              <img
                className="inline-block h-[30px] w-[30px] rounded-full ring-2 ring-white"
                src={user2}
              />
              <img
                className="inline-block h-[30px] w-[30px] rounded-full ring-2 ring-white"
                src={user3}
                alt=""
              />
              <div className="h-[30px] w-[30px] rounded-full ring-2 ring-white bg-[#FF731D] flex items-center justify-center">
                <div className="font-public-sans text-[12px] font-semibold leading-3 text-white bg-transparent">
                  7+
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="rounded-full h-[50px] w-[50px] flex items-center justify-center bg-[#F7F5F4]">
            <img src={webcam} alt="webcam" className="h-[18px] w-[18px]" />
          </div>
          <div className="rounded-full h-[50px] w-[50px] flex items-center justify-center bg-[#F7F5F4]">
            <img src={phone} alt="phone" className="h-[18px] w-[18px]" />
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="divider" />

      {/* message main block */}
      <div className="flex flex-col px-[30px] mt-2">
        <div className="sub-heading_dark text-center p-2">Yesterday</div>
        {yesterdayMessageContent.map(
          ({ id, image, name, timestamp, messages, type }) => (
            <Message
              key={id}
              image={image}
              name={name}
              timestamp={timestamp}
              messages={messages}
              type={type}
            />
          )
        )}
        <div className="sub-heading_dark text-center p-2">Today</div>
        {todayMessageContent.map(
          ({ id, image, name, timestamp, messages, type }) => (
            <Message
              key={id}
              image={image}
              name={name}
              timestamp={timestamp}
              messages={messages}
              type={type}
            />
          )
        )}
      </div>

      <div className="flex items-center justify-start space-x-2">
        <img src={user10} alt="user" className="h-[28px] w-[28px]" />
        <div>
          <p className="sub-heading_dark">
            Max Hob <span className="sub-heading_light">is Typing....</span>
          </p>
        </div>
      </div>

      {/* message footer */}
      <Footer />
    </div>
  );
}

export default MidRightContainer;
