import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore();
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
    <nav className=" relative z-20 section flex items-center justify-between text-sml">
      <Link to={"/"}>
        <h1 className=" text-[16px] font-bold">
          Secure<span className=" text-blue-1">Auth</span>
        </h1>
      </Link>
      <ul className=" flex gap-[34px]">
        <li className=" hoverClass hover:text-blue-1 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/"}>Product</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/"}>More</Link>
        </li>
        <li className=" hoverClass hover:text-blue-1">
          <Link to={"/"}>Support</Link>
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
    </nav>
  );
}

export default Navbar;
