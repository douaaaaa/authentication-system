import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { FaThList } from "react-icons/fa";
import { useMenuStore } from "../store/menu.auth";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore();
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
    <nav className=" nav relative z-20 section flex items-center justify-between text-sml">
      <Link to={"/"}>
        <h1 className=" text-[16px] font-bold ">
          Secure<span className=" text-blue-1">Auth</span>
        </h1>
      </Link>
      <ul className=" gap-[34px]">
        <li className=" hoverClass hover:text-blue-1 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/services"}>Services</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/more"}>More</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/support"}>Support</Link>
        </li>
      </ul>
      {isAuthenticated && user.isVerified ? (
        <div className=" flex items-center gap-4">
          <p className=" capitalize">{user.name}</p>
          <button
            onClick={(e) => clickHandler(e)}
            className=" w-[88px] h-[32px] rounded-md bg-blue-2 font-semibold shadow-none hoverClass hover:shadow-blue hover:bg-blue-1"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className=" flex gap-[14px] items-center">
          <Link to={"/login"}>
            <button className=" w-[88px] h-[32px] rounded-md bg-gradient-to-r from-blue-1 to-blue-3 font-semibold p-[2px] shadow-none hoverClass hover:shadow-blue">
              <div className=" bg-blue-5 w-full h-full rounded-md flex items-center justify-center ">
                Login
              </div>
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className=" w-[88px] h-[32px] rounded-md bg-blue-2 font-semibold shadow-none hoverClass hover:shadow-blue hover:bg-blue-1">
              Sign up
            </button>
          </Link>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className=" button size-8 relative z-50 rounded-lg bg-blue-1 shadow-blue hover:bg-blue-2 transition duration-300"
      >
        <FaThList className=" flex mx-auto inset-y-0 text-md" />
      </button>
    </nav>
  );
}

export default Navbar;
