"use client"
import React,{useState} from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
import less from "@/assets/lessthen.png"
import Button from '../button/Button'
import notification from "@/assets/notification.png"
import user from "@/assets/user.png"

const Navbar = () => {
  const options = ["File", "Edit", "View","Share","Spell Check", "Settings"];

   const [activeIndex, setActiveIndex] = useState(null);

   const handleClick = (index) => {
     setActiveIndex(index);
   };
  return (
    <div className="items-center border-b-2 border-b-[#DBDBDB] flex w-full bg-[#FFFFFF]">
      <div className="flex border-r-2 gap-2 bg-[#FFFFFF] pr-[26px] pl-[35px] py-[17px] justify-center items-center">
        {/* <Image src="/images/Group.svg" alt="Logo" width={133} height={41} /> */}
        <Image
          className="h-[41px] w-[133px]"
          src={logo}
          alt=""
        />
        <Image src="/images/lessthen.png" alt="Logo" width={20} height={20} />
      </div>
      <div className="px-[18px] flex justify-between items-center w-full">
        <div className="flex gap-[5px] flex-col items-start">
          <h2 className="text-[18px] font-bold">
            Untitled Poster (8.27 x 11.69 Inches)
          </h2>
          <div className="flex gap-6">
            {options.map((item, index) => (
              <h2
                key={index}
                className={`text-[13px] text-[#444444] font-medium cursor-pointer ${
                  activeIndex === index
                    ? "border-b-2 border-[#444444] font-bold"
                    : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item}
              </h2>
            ))}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button className="rounded-full px-[20px] py-[13px] text-[14px] text-[#787486] border-[#DBDBDB] border bg-[#F4F7FE] text-center">
            Export
          </button>
          <button className="rounded-full px-[20px] py-[13px] text-[14px] text-[#787486] border-[#DBDBDB] border bg-[#F4F7FE] text-center">
            Present
          </button>
          <Button classNames="bg-[#2A5650]" text="Upgrade" />
          <Image src="/images/notification.png" alt="" width={17} height={22} />
          <Image
            className="rounded-full"
            src="/images/user.png"
            alt=""
            width={44}
            height={44}
          />
          <div>
            <h2 className="text-3 font-bold">Name</h2>
            <h2 className="text-[10px] font-normal">Gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar