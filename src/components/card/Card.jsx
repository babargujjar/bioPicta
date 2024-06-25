import Image from 'next/image'
import agriculture from "@/assets/agriculture.jpg"


const Card = () => {
  return (
    <div className="relative group rounded-lg h-[266px]">
      <Image
        className="h-[201px] w-full rounded-t-lg"
        src={agriculture}
        alt=""
      />
      <h2 className="font-semibold rounded-b-lg text-[18px] px-[28px] py-4 bg-[#FFFFFF]">
        Desighning an Effective Splash
      </h2>
      <div className="absolute rounded-lg inset-0 flex items-center justify-center duration-300 bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-[#2A5650] text-center text-white px-4 py-2 rounded-full">
          Use Template
        </button>
      </div>
    </div>
  );
}

export default Card