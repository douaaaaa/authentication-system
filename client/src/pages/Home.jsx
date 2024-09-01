import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className=" section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className=" flex flex-col items-center justify-center my-[51px]"
      >
        <h1 className=" font-bold text-[32px]">
          Secure <span className=" text-blue-1">Authentication</span> for Users
        </h1>
        <p className=" text-light-white text-sml text-center max-w-[680px] mb-[22px] mt-[13px]">
          Welcome to SecureAuth, a powerful yet simple authentication system
          built with the MERN stack. Designed for developers who want to learn
          and implement robust authentication solutions
        </p>
        <Link to={"/signup"}>
          <button className=" bg-blue-1 font-semibold w-[118px] h-[41px] rounded-[9px] text-[13px] shadow-blue hoverClass hover:shadow-blueSm">
            Get started
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;
