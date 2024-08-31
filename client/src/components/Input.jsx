import React from "react";

function Input({ icon: Icon, ...props }) {
  return (
    <div className=" relative mb-[10px]">
      <div className=" absolute inset-y-0 flex items-center ml-3">
        <Icon className=" text-blue-1 size-[17px]" />
      </div>
      <input
        {...props}
        className=" outline-none bg-input-field w-full text-[10px] py-[6px] rounded-[5px] pl-9 focus:border focus:border-blue-1 focus:shadow-bluexSm"
      />
    </div>
  );
}

export default Input;
