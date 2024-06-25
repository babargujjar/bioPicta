import Image from "next/image";
import home1 from "@/assets/home1.png"
import home2 from "@/assets/home2.png"
import home3 from "@/assets/home3.png"
import home4 from "@/assets/home4.png"
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <div className="p-5 w-full bg-[#F4F7FE]">
     <div className="p-[22px] h-[100vh] overflow-y-scroll rounded-md custom-scrollbar bg-[#FFFFFF]">
      <div className="flex mb-5 justify-between items-center">
         <h2 className="text-[32px] font-semibold ">Choose Template</h2>
         <div className="flex justify-end gap-7 pr-[10px] items-center bg-[#F4F7FE] rounded-md border-2 mr-[46px] w-[363px] py-2">
           <Image className="w-6 h-6" src={home2} alt="" />
           <Image className="w-6 h-6" src={home3} alt="" />
           <Image className="w-6 h-6" src={home4} alt="" />
           <Image className="w-6 h-6" src={home1} alt="" />
         </div>
      </div>
      <div className="py-5 mb-5 flex gap-4 px-6 rounded-md w-full bg-[#F4F7FE]">
         <Button classNames='bg-[#2A5650]' text="All Templates" />
         <Button text="Agriculture" />
         <Button text="Food Science" />
         <Button text="Maths" />
         <Button text="Computer Science" />
         <Button text="Urdu Adab" />
         <Button text="English Litrature" />
      </div>
      <div className="bg-[#F4F7FE] grid gap-5 grid-cols-3  rounded-md p-5">
       <Card />
       <Card />
       <Card />
       <Card />
      </div>
     </div>
    </div>
  );
}
