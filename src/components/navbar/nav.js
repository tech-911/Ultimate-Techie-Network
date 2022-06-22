import React from "react";
import Logo from "../../assets/logo.png";
import { TbMenu2 } from "react-icons/tb";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="font-pulpdisplay">
      <div className="shadow-[0_1px_0px_rgba(219,219,219,0.5)] flex items-center justify-center mb-14">
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
          <TbMenu2 className="text-[#3E0563] text-[30px] hidden res-nav-4" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
