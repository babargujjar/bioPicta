import React from "react";

const Button = ({ text, classNames = "" }) => {
  const hasBgColor = classNames.includes("bg-");
  const textColorClass = hasBgColor
    ? "text-white"
    : "text-[#575757] border-[#575757] border-2";

  return (
    <button
      className={`rounded-full px-[20px] py-[13px] text-[14px] font-normal text-center ${textColorClass} ${classNames}`}>
      {text}
    </button>
  );
};

export default Button;
