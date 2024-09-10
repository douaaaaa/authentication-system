import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { FaChevronRight } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { RiInformation2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import SearchBar from "./SearchBar";
import { useMenuStore } from "../store/menu.auth";

function Menu() {
  const { isAuthenticated, logout } = useAuthStore();
  const { toggleMenu } = useMenuStore();
  const navigate = useNavigate();
  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await logout();
      if (response && response.status === 200 && response.data.success) {
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" menu flex-col absolute h-[100vh] w-[60%] z-40  top-0 right-0 bg-[#050B31]  shadow-xl p-10 text-sml">
      <div className="  flex w-full h-fit items-center mb-8">
        <HiViewList className=" text-2xl" />
        <Link to={"/"}>
          <h1 className="  text-[16px] font-bold ml-2">SecureAuth</h1>
        </Link>
        <button
          onClick={toggleMenu}
          className=" ml-auto size-8 rounded-lg bg-blue-1 shadow-blue hover:bg-blue-2 transition duration-300"
        >
          <FaChevronRight className=" mx-auto" />
        </button>
      </div>
      <div className=" flex flex-col gap-4 mb-auto">
        <SearchBar />
        <div className=" flex flex-col gap-2">
          {isAuthenticated ? (
            <Link to={"/dashboard"} className=" menuLink">
              <LuLayoutDashboard className=" text-xl" />
              <span>Dashboard</span>
            </Link>
          ) : (
            <Link to={"/"} className=" menuLink">
              <BiHomeAlt className=" text-2xl" />
              <span>Home</span>
            </Link>
          )}
          <Link to={"/about"} className=" menuLink">
            <RiInformation2Line className=" text-2xl" />
            <span>About</span>
          </Link>
          <Link to={"/services"} className=" menuLink">
            <RiServiceLine className=" text-2xl" />
            <span>Services</span>
          </Link>
          <Link to={"/more"} className=" menuLink">
            <CgMoreO className=" text-2xl" />
            <span>More</span>
          </Link>
          <Link to={"/support"} className=" menuLink">
            <MdOutlineSupportAgent className=" text-2xl" />
            <span>Support</span>
          </Link>
        </div>
      </div>
      <div>
        {isAuthenticated ? (
          <div>
            <button onClick={(e) => clickHandler(e)} className=" menuLink">
              <TbLogout2 className=" text-2xl" />
              <span>Logout</span>
            </button>
            <Link className=" menuLink">
              <IoSettingsOutline className=" text-2xl" />
              <span>Settings</span>
            </Link>
          </div>
        ) : (
          <div className=" flex flex-col gap-2 ">
            <Link to={"/login"}>
              <div className=" menuLink">
                <BiLogIn className=" text-2xl" />
                <span>Login</span>
              </div>
            </Link>
            <Link to={"/signup"}>
              <div className=" menuLink">
                <BiUserCircle className=" text-2xl" />
                <span>Sign Up</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
