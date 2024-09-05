import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/auth.store";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import Input from "../components/Input";
import { RiLockPasswordLine } from "react-icons/ri";

function ResetPassword() {
  const { token } = useParams();
  const [Password, setPassword] = useState("");
  const [isPassword, setisPassword] = useState("");
  const { isLoading, error, setNewPassword, clearError } = useAuthStore();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await setNewPassword(token, Password);
      if (Password !== isPassword) {
        return console.log("wrong password");
      }
      navigate("/login");
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
          <h3 className="  text-blue-1 font-bold text-xl">Forget Password</h3>
          <p className="  text-txt-clr max-w-[300px] mx-auto text-[10px] mt-[7px] mb-[16px]">
            Enter your email address and we'll send you a link to reset password
          </p>
          <form className=" px-[28px]" onSubmit={submitHandler}>
            <Input
              icon={RiLockPasswordLine}
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              icon={RiLockPasswordLine}
              placeholder="Verify password"
              value={isPassword}
              onChange={(e) => setisPassword(e.target.value)}
            />
            <p className=" text-red-500 text-[10px] text-left mb-[10px] capitalize">
              {error}
            </p>
            <button
              disabled={isLoading}
              className=" bg-blue-2 text-[10px] w-full py-[7px] rounded-md font-bold hoverClass hover:bg-blue-1 disabled:bg-blue-3"
            >
              {isLoading ? (
                <AiOutlineLoading className=" mx-auto animate-spin" />
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        </div>
        <div className=" text-[10px] text-center text-light-white bg-bg-footer w-full py-[10px]">
          <p className=" max-w-[221px] mx-auto ">
            You don't have an account?
            <Link to={"/signup"} className=" pl-1 text-blue-1 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default ResetPassword;
