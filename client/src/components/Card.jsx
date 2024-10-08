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
      </div>
    </motion.div>
  );
}

export default Card;
