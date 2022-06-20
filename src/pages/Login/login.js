import React from "react";
import "./login.css";
import GoogleImg from "../../assets/google.svg";
import { BiChevronDown } from "react-icons/bi";
const CreateAccount = () => {
  return (
    <div className="wrapper flex items-center justify-center font-pulpdisplay">
      <div className="bg-[white] w-[40%] rounded-[4px] px-6 py-6 ">
        <div className="Heading-container mb-4">
          <div className="flex items-center justify-center">
            <h1 className=" font-bold text-center text-[24px] mb-7 w-[90%]">
              Let’s pick up where we left off yeah?
            </h1>
          </div>

          <p className="text-center font-semibold mb-3">
            Log into your Account
          </p>
          <p className="text-center mb-4">
            Don't have an account?{" "}
            <span className="text-[#FA9706] font-medium cursor-pointer">
              Sign Up
            </span>
          </p>

          <button className="bg-[#FCFAFC] py-3 flex items-center justify-center w-[100%] border-[1px] border-[#D8CDE0] rounded-[4px] mb-4">
            {" "}
            <img src={GoogleImg} alt="google" className="mr-[2%]" />
            <p className="text-[14px] font-medium">Continue with google</p>
          </button>
          <div className="flex items-center justify-between">
            <p className="border  w-[45%] text-[#A6A6A6]"></p>
            <p className="text-[#A6A6A6] text-[14px]">OR</p>
            <p className="border w-[45%]  text-[#D8CDE0]"></p>
          </div>
        </div>

        <div className="form-container flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className="text-[12px] font-semibold mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="text"
              className="rounded-[4px] p-2 border outline-none w-[100%]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-[12px] font-semibold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="rounded-[4px] p-2 border outline-none w-[100%]"
            />
          </div>
          <div className="mb-4">
            <button className="w-[100%] text-center p-2 bg-[#3E0563] font-pulpdisplay text-[white] text-[14px] rounded-[4px]">
              Log in
            </button>
          </div>
          <div className="mb-4 mt-2">
            <p className="text-center text-[#3E0563] text-[14px] font-bold">
              Forgot Password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
