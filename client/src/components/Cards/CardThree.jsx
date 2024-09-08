import React from "react";
import { PiContactlessPaymentFill } from "react-icons/pi";

function CardThree() {
  return (
    <div className=" py-2 flex flex-col justify-between h-full">
      <div className=" flex items-center justify-between">
        <div className=" flex relative">
          <div className=" absolute top-0 left-4 size-8 rounded-full bg-light-white "></div>
          <div className=" size-8 rounded-full bg-light-white "></div>
        </div>
        <PiContactlessPaymentFill className=" text-2xl text-[#FFE03D]" />
      </div>
      <div className=" text-sm">
        <div className=" mb-7">
          <p className=" text-light-white">acc balance</p>
          <p className=" text-3xl font-semibold">2.640.10$</p>
        </div>
        <p className=" text-light-white">**** 6728</p>
      </div>
    </div>
  );
}

export default CardThree;
