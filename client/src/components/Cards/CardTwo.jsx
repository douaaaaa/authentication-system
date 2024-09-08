import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { IoIosFingerPrint } from "react-icons/io";
// shadow + animation

function CardTwo() {
  return (
    <div className=" h-full flex flex-col items-center justify-between">
      <h5 className=" text-sm font-semibold">Security</h5>
      <div>
        <IoIosFingerPrint className=" text-7xl text-[#6CEA30]" />
      </div>
      <div className=" flex items-center justify-between w-full">
        <p className=" ml-4 text-lg font-semibold leading-5">
          Crypted <br></br> Approach
        </p>
        <FaCaretRight />
      </div>
    </div>
  );
}

export default CardTwo;
