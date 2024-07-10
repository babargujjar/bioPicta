"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import temImg from "@/assets/tempalte.png";
import createposter from "@/assets/createposter.png";
import vector from "@/assets/vector.png";
import addposter from "@/assets/addposter.png";
import settings from "@/assets/settings.png";
import inbox from "@/assets/inbox.png";
import arrowup from "@/assets/arrowup.png";
import arrowdown from "@/assets/arrowdown.png";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Templates");
  return (
    <div className="w-[226px] px-[18px] border-r-2 pt-[30px] border-r-[#DBDBDB] bg-[#FFFFFF]">
      <div className="flex justify-center flex-col gap-[24px]">
        <Link href={"/"}>
          <div
            className={`w-full h-[44px] flex gap-4 py-[10px] px-[13px] items-center justify-start cursor-pointer ${
              activeItem === "Templates" ? "bg-[#E5EAE9] rounded-lg" : ""
            }`}
            onClick={() => setActiveItem("Templates")}
          >
            <Image className="w-[18px] h-[18px]" src={temImg} alt="" />
            <h2 className="font-semibold text-[12px]">Templates</h2>
          </div>
        </Link>
        {/* <div className="flex cursor-pointer items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <Image className="w-[20px] h-[20px]" src={createposter} alt="" />
            <h2 className="font-semibold text-[12px]">Create New</h2>
          </div>
          <Image className="w-3 h-[7px]" src={arrowdown} alt="" />
        </div> */}
        {activeItem !== "Profile" && (
          <div className="flex px-[13px] cursor-pointer items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <Image className="w-[20px] h-[20px]" src={createposter} alt="" />
              <h2 className="font-semibold text-[12px]">Create New</h2>
            </div>
            <Image className="w-3 h-[7px]" src={arrowdown} alt="" />
          </div>
        )}
        <div className="flex cursor-pointer px-[13px] items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <Image className="w-[20px] h-[20px]" src={inbox} alt="" />
            <h2 className="font-semibold text-[12px]">Your Work</h2>
          </div>
          <Image className="w-3 h-[7px]" src={arrowup} alt="" />
        </div>
        <div className="ml-[22px] gap-4 flex flex-col justify-start">
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Image className="w-[16px] h-[16px]" src={vector} alt="" />
            <h6 className="font-semibold text-[12px] text-[#929498]">
              Agriculture
            </h6>
          </div>
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Image className="w-[16px] h-[16px]" src={vector} alt="" />
            <h6 className="font-semibold text-[12px] text-[#929498]">
              Food Science
            </h6>
          </div>
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Image className="w-[16px] h-[16px]" src={vector} alt="" />
            <h6 className="font-semibold text-[12px] text-[#929498]">
              User Resourch
            </h6>
          </div>
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Image className="w-[16px] h-[16px]" src={vector} alt="" />
            <h6 className="font-semibold text-[12px] text-[#929498]">
              Marketing Sale
            </h6>
          </div>
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Image className="w-[16px] h-[16px]" src={vector} alt="" />
            <h6 className="font-semibold text-[12px] text-[#929498]">
              New Poster
            </h6>
          </div>
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Image className="w-[16px] h-[16px]" src={addposter} alt="" />
            <h6 className="font-semibold text-[12px] text-[#929498]">
              Add New Poster
            </h6>
          </div>
        </div>
        <Link href="/profile">
          <div
            className={`flex cursor-pointer items-center py-[10px] px-[13px] gap-[10px] ${
              activeItem === "Profile" ? "bg-[#E5EAE9] rounded-lg" : ""
            }`}
            onClick={() => setActiveItem("Profile")}
          >
            <Image className="w-[18px] h-[18px]" src={settings} alt="" />
            <h2 className="font-semibold text-[12px]">Settings</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
