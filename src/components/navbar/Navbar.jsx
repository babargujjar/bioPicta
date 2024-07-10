"use client"
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"
import Image from 'next/image'
import less from "../../assets/lessthen.png"
import Button from '../button/Button'
import notification from "@/assets/notification.png"
import user from "@/assets/user.png"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
    const [pathname, setPathname] = useState("");
   useEffect(() => {
     if (router) {
       setPathname(router.pathname);
     }
   }, [router]);
   console.log('pathName', router.pathname) 
  return (
    <div className='items-center border-b-2 border-b-[#DBDBDB] flex w-full bg-[#FFFFFF]'>
        <div className='flex border-r-2 gap-2 bg-[#FFFFFF] pr-[26px] pl-[35px] py-[17px] justify-center items-center'>
            <Image className='h-[41px] w-[133px] mx-4' src={logo} alt=''/>
            <Image className='w-5 h-5' src={less} alt='' />
        </div>
        <div className='px-[18px] flex justify-between items-center w-full'>
            <div className='flex items-center'>
              <h2 className='text-[#1F2633] text-[18px] font-bold mr-[30px]'>{pathname === '/profile' ? 'Settings' : 'Tamplates'}</h2>
              <input className='bg-[#F4F7FE] placeholder-[#DBDBDB] text-center rounded-full w-[238px] h-[44px] ' type="text" placeholder='Join Resourch Community' />
            </div>
            <div className='flex gap-3 items-center'>
              <Button classNames='bg-[#2A5650]' text="Upgrade" />
              <Image className='w-[17px] h-[22px]' src={notification} alt='' />
              <Image className='w-[44px] h-[44px] rounded-full' src={user} alt='' />
              <div>
                <h2 className='text-3 font-bold'>Name</h2>
                <h2 className='text-[10px] font-normal'>Gmail.com</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar