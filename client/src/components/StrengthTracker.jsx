import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

function StrengthTracker() {
  return (
    <div className=" text-[8px] text-light-white mb-[10px]">
      <div className=" flex justify-between">
        <p>Password Strength</p>
        <p>Weak</p>
      </div>
      <div className=" flex gap-1 my-[6px]">
        <div className=" bg-blue-1 shadow-blueSm h-[3px] w-1/4 rounded-full"></div>
        <div className=" bg-light-white h-[3px] w-1/4 rounded-full"></div>
        <div className=" bg-light-white h-[3px] w-1/4 rounded-full"></div>
        <div className=" bg-light-white h-[3px] w-1/4 rounded-full"></div>
      </div>
      <ul className=" text-left">
        <li className=" flex items-center gap-1">
          <RxCross2 className=" size-3" />
          <p className=" ">At least 6 chaaracters</p>
        </li>{" "}
        <li className=" flex items-center gap-1">
          <RxCross2 className=" size-3" />
          <p className=" ">Contains uppercase letters</p>
        </li>{" "}
        <li className=" flex items-center gap-1 text-blue-1">
          <IoMdCheckmark className=" size-3" />
          <p className=" ">Contains lowercase letters</p>
        </li>{" "}
        <li className=" flex items-center gap-1">
          <RxCross2 className=" size-3" />
          <p className=" ">Contains at least one number</p>
        </li>{" "}
        <li className=" flex items-center gap-1">
          <RxCross2 className=" size-3" />
          <p className=" ">Contains a special characters</p>
        </li>
      </ul>
    </div>
  );
}

export default StrengthTracker;
