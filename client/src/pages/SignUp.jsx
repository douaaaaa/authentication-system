import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import StrengthTracker from "../components/StrengthTracker";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store.js";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";

function SignUp() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { isLoading, signup, error, clearError } = useAuthStore();
  const navigate = useNavigate("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(Name, Email, Password);
      if (response && response.status === 200 && response.data.success) {
        navigate("/verify-email");
      }
    } catch (err) {
      console.log(err);
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
        className=" relative w-[357px] min-h-[426px] bg-gradient-to-b from-light-white to-bg-footer p-[1px] rounded-lg"
      >
        <div className=" bg-bg-from max-w-[357px] min-h-[426px] rounded-lg text-center pt-7">
          <h3 className="  text-blue-1 font-bold text-xl">Sign up</h3>
          <p className="  text-txt-clr text-[10px] mt-[7px] mb-[16px]">
            Lets get started with your 30 days free trial
          </p>
          <form className=" px-[28px]" onSubmit={submitHandler}>
            <Input
              icon={FaRegUserCircle}
              placeholder=" User Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={MdOutlineMailOutline}
              placeholder=" Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={RiLockPasswordLine}
              placeholder=" Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className=" text-red-500 text-[10px] text-left mb-[10px] capitalize">
              {error}
            </p>
            <StrengthTracker />
            <button
              disabled={isLoading}
              className=" bg-blue-2 text-[10px] w-full py-[7px] rounded-md font-bold hoverClass hover:bg-blue-1 disabled:bg-blue-3"
            >
              {isLoading ? (
                <AiOutlineLoading className=" mx-auto animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <p className=" text-[10px] mt-[5px]">
            Already have an account?{" "}
            <Link to={"/login"} className=" font-semibold text-blue-1 ">
              Login
            </Link>
          </p>
        </div>
        <div className=" absolute bottom-0 text-[10px] text-center text-light-white bg-bg-footer w-full py-[10px]">
          <p className=" max-w-[221px] mx-auto ">
            By signing up to create an account I accept company's{" "}
            <span className=" text-blue-1">terms and privacy policy</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default SignUp;
