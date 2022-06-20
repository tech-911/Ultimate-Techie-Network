import React from "react";
import "./createAccount.css";
import GoogleImg from "../../assets/google.svg";
import { BiChevronDown } from "react-icons/bi";
const CreateAccount = () => {
  return (
    <div className="wrapper flex items-center justify-center font-pulpdisplay">
      <div className="bg-[white] w-[40%] rounded-[4px] px-6 py-6">
        <div className="Heading-container mb-4">
          <div className="flex items-center justify-center">
            <h1 className=" font-bold text-center text-[24px] mb-7 w-[80%]">
              Time to vote your favourite Techie, let's make this amazing!
            </h1>
          </div>

          <p className="text-center font-semibold mb-3">Create an Account</p>
          <p className="text-center mb-4">
            Have an account?{" "}
            <span className="text-[#FA9706] font-medium">Log in</span>
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
          <div className="flex items-start justify-between flex-wrap mb-4">
            <div className="flex flex-col w-[46%]">
              <label
                htmlFor="first-name"
                className="text-[12px] font-semibold mb-1"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                className="rounded-[4px] p-2 border outline-none w-[100%]"
              />
            </div>
            <div className="flex flex-col w-[46%]">
              <label
                htmlFor="Last-name"
                className="text-[12px] font-semibold mb-1"
              >
                Last Name
              </label>
              <input
                id="Last-name"
                type="text"
                className="rounded-[4px] p-2 border outline-none w-[100%]"
              />
            </div>
          </div>
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
            <label htmlFor="phone" className="text-[12px] font-semibold mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              className="rounded-[4px] p-2 border outline-none w-[100%]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="set-password"
              className="text-[12px] font-semibold mb-1"
            >
              Set Password
            </label>
            <input
              id="set-password"
              type="password"
              className="rounded-[4px] p-2 border outline-none w-[100%]"
            />
          </div>
          <div>
            <p className="text-[12px] font-semibold mb-1">Gender</p>
            <div className="rounded-[4px] border outline-none w-[100%] flex items-center justify-between">
              <input type="text" className="outline-none p-2 w-[80%]" />
              <BiChevronDown className="mr-2 text-[24px] cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
