import React from "react";
import Logo from "../../assets/logo.png";
import { TbMenu2 } from "react-icons/tb";
import "./nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
const Nav = () => {
  const [hamburger, setHamburger] = useState(0);
  console.log(hamburger);
  return (
    <div className="font-pulpdisplay">
      <div
        className={`shadow-[0_1px_0px_rgba(219,219,219,0.5)] flex items-center justify-center ${
          !hamburger ? "mb-10" : ""
        }`}
      >
        <div className="flex items-center justify-between py-5 w-[90%]  res-nav-1">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="flex items-center res-nav-1a">
            <p className="text-[#0C0114] mx-4">
              <Link to="/catigories">Categories</Link>
            </p>
            <p className="text-[#0C0114] mx-4">Past editions</p>
            <p className="text-[#0C0114] mx-4">
              <Link to="/futureeditions">Future editions</Link>
            </p>
            <p className="text-[#0C0114] mx-4">
              <Link to="/aboutus">About us</Link>
            </p>
            <p className="text-[#0C0114] mx-4">
              <Link to="/donation">Make a donation</Link>
            </p>
          </div>
          <div className="flex items-center res-nav-2">
            <Link
              to="/login"
              className="bg-[#EEE8F2] rounded-[4px] px-4 py-3 text-[#3E0563]"
            >
              Log In
            </Link>
            <Link
              to="/createaccount"
              className="bg-[#3E0563] rounded-[4px] text-[#EEE8F2] px-4 py-3 inline-flex ml-3 res-nav-3"
            >
              Create Account
            </Link>
          </div>
          <div
            className="res-nav-4"
            onClick={() => {
              setHamburger(!hamburger);
            }}
          >
            {!hamburger ? (
              <TbMenu2 className={`text-[#3E0563] text-[30px]`} />
            ) : (
              <MdClose className={` text-[#3E0563] text-[30px]`} />
            )}
          </div>
        </div>
      </div>
      <div className={`${hamburger ? "" : "hidden"} mb-14`}>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">
            <Link to="/catigories">Categories</Link>
          </p>
        </div>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">Past editions</p>
        </div>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">
            <Link to="/futureeditions">Future editions</Link>
          </p>
        </div>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">
            <Link to="/aboutus">About us</Link>
          </p>
        </div>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">
            <Link to="/donation">Make a donation</Link>
          </p>
        </div>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">
            <Link to="/login">Log in</Link>
          </p>
        </div>
        <div className="border-b-[1px] border-[#EDEDED] py-5 text-[18px] font-semibold">
          <p className="ml-6">
            <Link to="/createaccount">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
