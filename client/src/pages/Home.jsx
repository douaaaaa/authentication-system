import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className=" section">
      <div className=" flex flex-col items-center justify-center my-[51px]">
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
      </div>
    </section>
  );
}

export default Home;
