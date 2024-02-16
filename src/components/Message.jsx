import React from "react";

function Message({ image, name, timestamp, messages, type }) {
  return (
    <div
      className={`w-full flex ${
        type === "sent" ? "flex-row-reverse" : ""
      } items-start justify-start my-4`}
    >
      <img src={image} alt="image" className="mx-4" />
      <div className="flex flex-col">
        <div className="flex items-end space-x-1">
          <p className="heading">{name}</p>
          <span className="sub-heading_light">{timestamp}</span>
        </div>
        {messages &&
          messages.map((message) => (
            <div
              key={message}
              className={`${
                type === "sent" ? "outgoing_bubble" : "incoming_bubble"
              } sub-heading_dark`}
            >
              {message}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Message;
