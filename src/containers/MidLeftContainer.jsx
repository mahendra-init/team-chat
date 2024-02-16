import React from "react";
import {
  edit,
  heart,
  search,
  user1,
  user2,
  user3,
  user4,
  user5,
} from "../assets";
import { messages } from "../constant/messages.js";
import { MessengersDiv, OnlineAccountDiv } from "../components";

function MidLeftContainer() {
  return (
    <div className="mid-container_left flex flex-col">
      {/* profile card */}
      <div className="upper flex items-center justify-start space-x-2 px-3 pt-1 mt-[30px] h-[134px] pb-10 ">
        <img src={user1} alt="user1" className="mx-3 h-14 w-14" />
        <div className="flex flex-col items-start justify-center ml-3">
          <h1 className="text-xl font-bold leading-6 text-left text-black">
            John Doe
          </h1>
          <h2 className="sub-heading_light">My account</h2>
        </div>
      </div>

      {/* horizontal ruler */}
      <div className="divider" />

      {/* online users */}
      <div className="middle flex flex-col space-y-3 px-4 py-4">
        <h1 className="text-3xl font-bold leading-10 text-left text-black">
          Online Now
        </h1>
        <div className="flex items-center justify-start space-x-2">
          <OnlineAccountDiv image={user2} />
          <OnlineAccountDiv image={user3} />
          <OnlineAccountDiv image={user4} />
          <OnlineAccountDiv image={user5} />
          <div className="rounded-full h-14 w-14 flex items-center justify-center bg-[#FBE5D9]">
            <div className="font-public-sans text-base font-semibold leading-6 text-left text-[#FF731D] bg-transparent">
              18+
            </div>
          </div>
        </div>
      </div>

      {/* messages  */}
      <div className="lower flex flex-col px-4">
        <div className="messages-header flex items-center justify-between ">
          <h1 className="text-xl font-bold leading-6 text-left text-black">
            Messages
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <img src={edit} alt="edit" />
            <img src={heart} alt="heart" />
          </div>
        </div>

        {/* search box */}
        <div className="bg-white shadow-lg w-[360px] h-[44px] rounded-lg flex items-center justify-start px-4 mt-4">
          <div className="flex items-center justify-start space-x-3 px-3 py-2">
            <img src={search} alt="search" />
            <span className="sub-heading_light">Search</span>
          </div>
        </div>

        {/* messenger list */}
        <div className="flex flex-col items-center justify-center mt-4 space-y-3 rounded-sm">
          {messages.map(
            ({ id, image, messenger, message, unreadMessageNo, timestamp }) => (
              <MessengersDiv
                key={id}
                message={message}
                image={image}
                messenger={messenger}
                unreadMessageNo={unreadMessageNo}
                timestamp={timestamp}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default MidLeftContainer;
