import React from "react";

function CardFour() {
  return (
    <div>
      <h5 className=" text-sm text-center mb-2 font-semibold">Users</h5>
      {/* USERs */}
      <div className=" flex flex-col gap-2">
        <div className=" flex gap-2 items-center">
          {/* img */}
          <div className=" size-14 bg-blue-100 rounded-lg  bg-cover bg-center bg-no-repeat bg-[url('./Images/user2.jpeg')]"></div>
          {/* DEsc */}
          <div className=" leading-4">
            <h6 className=" font-semibold">Jane Doe</h6>
            <p className=" text-[10px] text-light-white">Jane@gmail.com</p>
            <p className=" text-[10px] text-light-white">J********</p>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          {/* img */}
          <div className=" size-14 bg-blue-100 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('./Images/user1.jpeg')]"></div>
          {/* DEsc */}
          <div className=" leading-4">
            <h6 className=" font-semibold">Jane Doe</h6>
            <p className=" text-[10px] text-light-white">Jane@gmail.com</p>
            <p className=" text-[10px] text-light-white">J********</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFour;
