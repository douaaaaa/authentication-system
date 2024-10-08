import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/auth.store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

function Verify() {
  const [Code, setCode] = useState("");
  const { isLoading, error, verify, clearError } = useAuthStore();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await verify(Code);
      if (response && response.status === 200 && response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    clearError();
  }, [useLocation().pathname]);
  return (
    <section className="section flex items-center justify-center h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className=" relative w-[357px]  bg-gradient-to-b from-light-white to-bg-footer p-[1px] rounded-lg"
      >
        <div className=" bg-bg-from max-w-[357px]  rounded-t-lg text-center py-7">
          <h3 className="  text-blue-1 font-bold text-xl">Verify Your Email</h3>
          <p className="  text-txt-clr text-[10px] mt-[7px] mb-[16px]">
            Enter the 6 digits code sent to your email address.
          </p>
          <form className=" px-[28px]" onSubmit={submitHandler}>
            {/* <VerificationCode /> */}
            <input
              onChange={(e) => setCode(e.target.value)}
              value={Code}
              maxLength={6}
              className=" mb-[20px] bg-input-field outline-none w-[80px]  py-[6px] text-center text-sml rounded-md focus:border-blue-1 focus:shadow-bluexSm"
            />
            {error && (
              <p className=" text-red-500 text-[10px] text-left mb-[10px] capitalize">
                {error}
              </p>
            )}
            <button className=" bg-blue-2 text-[10px] w-full py-[7px] rounded-md font-bold hoverClass hover:bg-blue-1">
              {isLoading ? (
                <AiOutlineLoading className=" mx-auto animate-spin" />
              ) : (
                "Verify"
              )}
            </button>
          </form>
        </div>
        <div className=" text-[10px] text-center text-light-white bg-bg-footer w-full py-[10px]">
          <p className=" max-w-[221px] mx-auto ">
            You already have an account?
            <Link to={"/login"} className=" pl-1 text-blue-1 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Verify;
