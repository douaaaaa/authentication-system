import React from "react";
import { motion } from "framer-motion";

function Card({ delay, children, ...props }) {
  // const shcema = [
  //   { height: "40px", day: "S", top: false },
  //   { height: "90px", day: "M", top: false },
  //   { height: "70px", day: "T", top: false },
  //   { height: "120px", day: "W", top: true },
  //   { height: "85px", day: "T", top: false },
  //   { height: "50px", day: "F", top: false },
  // ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ ...props }}
      className=" absolute cards"
    >
      <div className="  innerCard h-full w-full text-sml flex flex-col justify-between">
        {children}
        {/* <div className=" flex items-center justify-between">
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
            <div className=" size-12 bg-gradient-to-b from-[#AEBBFC] to-[#8196FF] rounded-xl"></div>
            <div>
              <h5 className=" font-semibold">Jane Doe</h5>
              <p className=" text-light-white text-[10px]">Online analysis</p>
            </div>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}

export default Card;
