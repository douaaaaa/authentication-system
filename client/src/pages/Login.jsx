import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/auth.store";
import { motion } from "framer-motion";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { isLoading, error, login } = useAuthStore();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await login(Email, Password);
      if (response && response.status === 200 && response.data.success) {
        return navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section flex items-center justify-center h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className=" relative w-[357px] bg-gradient-to-b from-light-white to-bg-footer p-[1px] rounded-t-lg"
      >
        <div className=" bg-bg-from max-w-[357px]  rounded-t-lg text-center py-7">
          <h3 className="  text-blue-1 font-bold text-xl">Log In</h3>
          <p className="  text-txt-clr text-[10px] mt-[7px] mb-[16px]">
            Lets get started with your 30 days free trial
          </p>
          <form className=" px-[28px]" onSubmit={submitHandler}>
            <Input
              icon={MdOutlineMailOutline}
              placeholder=" Email"
              value={Email}
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={RiLockPasswordLine}
              placeholder=" Password"
              value={Password}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to={"/reset-password"}>
              <p className=" text-blue-1 text-[10px] text-left">
                Forgot Password ?
              </p>
            </Link>
            <p className=" text-red-500 text-[10px] text-left mb-[10px] capitalize">
              {error}
            </p>
            <button className=" bg-blue-2 text-[10px] w-full py-[7px] rounded-md font-bold hoverClass hover:bg-blue-1">
              {isLoading ? (
                <AiOutlineLoading className=" mx-auto animate-spin" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
        <div className="  rounded-b-lg  text-[10px] text-center text-light-white bg-bg-footer w-full py-[10px]">
          You don't have an account?
          <Link to={"/signup"} className=" font-semibold text-blue-1 ml-1">
            Sign up
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Login;
