import React from "react";
import OnlineAccountDiv from "./OnlineAccountDiv";

function MessengersDiv({
  image,
  messenger,
  message,
  unreadMessageNo,
  timestamp,
}) {
  return (
    <div
      className={`h-[80px] w-full flex items-center justify-start space-x-3 p-2 rounded-2xl relative ${
        message?.type != "recieved" ? "bg-white" : "bg-transparent"
      }`}
    >
      <OnlineAccountDiv image={image} />
      <div className="h-full w-full flex flex-col items-start space-y-2 ml-4 mt-3 py-1">
        <div className="w-full flex items-center justify-between">
          <h1 className="heading">{messenger}</h1>
          {timestamp && <span className="sub-heading_light">{timestamp}</span>}
        </div>
        <div className="flex items-center justify-center space-x-2">
          {message.icon && (
            <img src={message.icon} alt="icon" className="text-[#A19791]" />
          )}
          {message?.type === "recieved" ? (
            <p className="sub-heading_light">{message.content}</p>
          ) : (
            <p className="sub-heading_dark">
              You: <span className="sub-heading_light">{message.content}</span>
            </p>
          )}
        </div>
      </div>
      {unreadMessageNo && (
        <div className="absolute top-1/2 -translate-y-1/2 right-0 rounded-full h-[30px] w-[30px] bg-[#FF731D] flex items-center justify-center">
          <div className="font-public-sans text-sm font-semibold text-white bg-transparent">
            {unreadMessageNo}
          </div>
        </div>
      )}
    </div>
  );
}

export default MessengersDiv;
