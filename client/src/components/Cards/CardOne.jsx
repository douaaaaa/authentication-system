import React from "react";
import { Link } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import Trophy from "../../Images/Trophy_perspective_matte_s.png";

function CardOne() {
  const shcema = [
    { height: "40px", day: "S", top: false },
    { height: "90px", day: "M", top: false },
    { height: "70px", day: "T", top: false },
    { height: "120px", day: "W", top: true },
    { height: "85px", day: "T", top: false },
    { height: "50px", day: "F", top: false },
  ];
  return (
    <>
      <div className=" flex items-center justify-between">
        <h4 className=" text-sm font-semibold">Analysis</h4>
        <Link to={"/analysis"} className=" text-light-white hover:underline">
          View All
        </Link>
      </div>
      <div className=" flex flex-col gap-1">
        <div className=" flex  items-end w-full justify-between">
          {shcema.map((e) => (
            <div className=" flex flex-col gap-1 items-center">
              {e.top && (
                <GiRoundStar className=" text-[#FFE03D] text-sm shadow-[#FFE03D] drop-shadow-xl" />
              )}
              <div
                style={{ height: e.height }}
                className={`w-[23px] rounded-[7px] bg-gradient-to-b ${
                  e.top
                    ? "from-[#2746E6] to-[#213AB9]"
                    : "from-[#AEBBFC] to-[#8196FF]"
                }`}
              ></div>
              <p>{e.day}</p>
            </div>
          ))}
        </div>
        <div className=" border border-light-white w-full p-1 rounded-xl flex gap-2 items-center">
          <div className=" flex items-center justify-center size-12 bg-gradient-to-b from-[#AEBBFC] to-[#8196FF] rounded-xl">
            <img className=" size-9" src={Trophy} />
          </div>
          <div>
            <h5 className=" font-semibold">Jane Doe</h5>
            <p className=" text-light-white text-[10px]">Online analysis</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOne;
