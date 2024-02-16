import React from "react";

function OnlineAccountDiv({ image }) {
  return (
    <div className="rounded-full relative h-14 w-14">
      <img src={image} alt="image" className="h-14 w-14 rounded-full" />
      <div className="absolute h-[14px] w-[14px] rounded-full bottom-0 right-0 bg-[#82CF9C] border border-white z-10" />
    </div>
  );
}

export default OnlineAccountDiv;
