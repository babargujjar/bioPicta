import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-[226px] px-[18px] border-r-2 pt-[23px] border-r-[#DBDBDB] bg-[#FFFFFF]">
      <div>
        <h2 className="text-[18px] font-bold mb-1">Insert Content</h2>
        <p className="text-[12px] text-[#444444] mb-5">
          Drag and Drop add section and content to your poster
        </p>
      </div>
      <div className="bg-[#DBDBDB]">
        <h2 className="font-bold text-[16px] text-[#1F2633]">Layout</h2>
      </div>
    </div>
  );
}

export default Sidebar