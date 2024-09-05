import React from "react";
import { motion } from "framer-motion";

function FloatingItem() {
  return (
    <>
      <motion.div
        animate={{ y: ["50%", "0%", "100%", "50%"] }}
        transition={{ transition: "linear", duration: 20, repeat: Infinity }}
        className=" absolute  top-0 bg-blue-1 size-[400px] blur-3xl opacity-50 rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          top: ["10%", "80%", "10%"],
        }}
        transition={{
          transition: "linear",
          duration: 25,
          repeat: Infinity,
          delay: 1,
        }}
        className=" absolute top-0 z-0 right-72 bg-blue-1 size-[100px] blur-2xl opacity-70 rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          top: ["80%", "10%", "80%"],
        }}
        transition={{
          transition: "linear",
          duration: 25,
          repeat: Infinity,
        }}
        className=" absolute top-0 z-0  right-96 bg-blue-1 size-[250px] blur-3xl opacity-50 rounded-full"
      ></motion.div>
    </>
  );
}

export default FloatingItem;
