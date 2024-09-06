import React from "react";
import { motion } from "framer-motion";

function Card({ delay, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ ...props }}
      className=" absolute cards"
    >
      <div className="  innerCard h-full w-full "></div>
    </motion.div>
  );
}

export default Card;
