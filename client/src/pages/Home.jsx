import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/auth.store";
import Homepage from "../Images/Homepage.png";
import Card from "../components/Card";
import CardOne from "../components/Cards/CardOne";
import CardTwo from "../components/Cards/CardTwo";
import CardThree from "../components/Cards/CardThree";
import CardFour from "../components/Cards/CardFour";
import Thorus from "../Images/Thorus 2.png";
import Pyramid from "../Images/Pyramid 2.png";

function Home() {
  const { clearError } = useAuthStore();
  useEffect(() => {
    clearError();
  }, [useLocation().pathname]);
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
      <div className="  border-white bg-[#] relative flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          src={Homepage}
          width={400}
          className=" relative z-10"
        />
        <Card
          bottom="50px"
          left="15px"
          width="206px"
          height="300px"
          rotate="8deg"
          z-index="40"
          delay={1.2}
          children={<CardOne />}
        />
        <Card
          bottom="50px"
          right="15px"
          width="206px"
          height="280px"
          rotate="-8deg"
          z-index="40"
          delay={1.4}
          children={<CardThree />}
        />
        <Card
          bottom="-150px"
          right="230px"
          width="206px"
          height="290px"
          rotate="-8deg"
          z-index="40"
          delay={1.6}
          children={<CardFour />}
        />
        <Card
          top="70px"
          right="260px"
          width="200px"
          height="200px"
          rotate="8deg"
          z-index="0"
          delay={1.8}
          children={<CardTwo />}
        />{" "}
        <Card
          top="200px"
          left="260px"
          width="150px"
          height="150px"
          rotate="-8deg"
          z-index="0"
          delay={2}
        />
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className=" absolute top-2 left-48 size-32 blur-sm"
          src={Thorus}
        />
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className=" absolute top-0 right-28 size-36"
          src={Pyramid}
        />
      </div>
    </section>
  );
}

export default Home;
