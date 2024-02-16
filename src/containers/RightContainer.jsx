import React from "react";
import {
  architecture1,
  architecture2,
  architecture3,
  architecture4,
  clg_grp,
  gallery,
  hamburger,
  link,
  shared,
} from "../assets";
import { ArchitectureLI } from "../components";

function RightContainer() {
  return (
    <div className="right-container">
      <div className="mt-[30px]">
        {/* header */}
        <div className="upper h-[150px] flex flex-col items-center justify-center space-y-2 px-3 my-auto">
          <img src={clg_grp} alt="user1" className="mx-3 h-14 w-14" />
          <div className="flex flex-col items-center justify-center space-y-1">
            <h1 className="text-xl font-bold leading-6 text-left text-black">
              College group
            </h1>
            <h2 className="sub-heading_light">@collegefriends</h2>
          </div>
        </div>

        {/* divider */}
        <div className="mt-5 mb-2 divider" />

        {/* tab section */}
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2 flex items-center justify-center heading text-[#A19791]">
            Participants
          </div>
          <div className="w-1/2 flex items-center justify-center heading">
            Shared Files
          </div>
        </div>

        {/* divider */}
        <div className="my-2 divider relative">
          <div className="divider w-[76px] border-2 border-[#FF731D] absolute right-[14%] -top-1" />
        </div>

        {/* Main content */}
        <main className="flex flex-col m-5 space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center justify-center ">
              <img src={gallery} alt="gallery" className="h-[18px] w-[18px]" />
              <div className="text-[16px] font-[600] leading-[19.64px] text-black ml-2">
                Shared Media
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={hamburger}
                alt="gallery"
                className="h-[16px] w-[16px]"
              />
            </div>
          </div>

          <div className="my-2">
            <ul className="grid grid-cols-2 gap-2">
              <img
                src={architecture1}
                alt="architecture1"
                className="h-[150px] w-[150px] rounded-[20px] mt-2"
              />
              <img
                src={architecture2}
                alt="architecture1"
                className="h-[150px] w-[150px] rounded-[20px] mt-2"
              />
              <img
                src={architecture3}
                alt="architecture1"
                className="h-[150px] w-[150px] rounded-[20px] mt-2"
              />
              <img
                src={architecture4}
                alt="architecture1"
                className="h-[150px] w-[150px] rounded-[20px] mt-2"
              />
            </ul>
          </div>

          {/* Shared files */}
          <div className="my-3">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center justify-center ">
                <img src={shared} alt="gallery" className="h-[18px] w-[15px]" />
                <div className="text-[16px] font-[600] leading-[19.64px] text-black ml-2">
                  Shared Media
                </div>
              </div>
            </div>

            <ul className="my-4 space-y-4">
              <ArchitectureLI
                heading={"Architecture21.doc"}
                subheading={"04/09/2023 at 09:34am"}
              />
              <ArchitectureLI
                heading={"Architecture28.doc"}
                subheading={"02/09/2023 at 10:43am"}
              />
              <ArchitectureLI
                heading={"Architecture16.doc"}
                subheading={"01/09/2023 at 08:21am"}
              />
            </ul>
          </div>
          {/* Shared links */}
          <div className="my-3">
            <div className="flex items-center justify-between space-x-2 mb-4">
              <div className="flex items-center justify-center ">
                <img
                  src={link}
                  alt="gallery"
                  className="h-[8px] w-[18px] mt-1"
                />
                <div className="text-[16px] font-[600] leading-[19.64px] text-black ml-2">
                  Shared Links
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start my-2 ml-2">
              <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center bg-[#F7F5F4] mr-2">
                <img src={link} alt="gallery" className="h-[18px] w-[15px]" />
              </div>
              <p className="text-[#000000] text-[12px] leading-[14.52px] font-[400] ml-2">
                https://dribbble/hafsadeartisto.....
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RightContainer;
