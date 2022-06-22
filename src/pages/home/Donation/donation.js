import React from "react";
import "./donation.css";
import MoreAbout from "../../../assets/donations.png";
import { FaDollarSign } from "react-icons/fa";
const Donation = () => {
  return (
    <div className="font-pulpdisplay">
      <div>
        <div className="text-center font-semibold text-[36px]">
          Make a Donation
        </div>
        <p className="text-center text-[16px] mb-10 text-[#808080]">
          Complete your nomination by contributing to the growth of technology
          in Africa
        </p>
      </div>

      <div className="container mx-auto px-10 flex items-start justify-between ">
        <div className="flex flex-col container mx-auto pr-16">
          <p className="text-[16px] font-semibold mb-3">
            Enter Donation Amount
          </p>
          <div className="flex rounded-[4px] border-[1px] border-[#DCDCDC] mb-6">
            <div className="flex items-center justify-center bg-[#3E0563] rounded-l-[4px] w-[20%]">
              <FaDollarSign className="text-[white]" />
            </div>
            <input type="number" className="py-3 px-5 outline-none w-[80%]" />
          </div>
          <button className="bg-[#3E0563] px-8 py-3 rounded-[4px] text-[white] w-full mb-6">
            Make Donation
          </button>
          <p className="text-justify text-[18px] mb-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer{" "}
          </p>
          <ul>
            <li>The Connected Hack-ton in Major Cities across Africa</li>
            <li>The Connected Hack-ton in Major Cities across Africa</li>
            <li>The Connected Hack-ton in Major Cities across Africa</li>
            <li>The Connected Hack-ton in Major Cities across Africa</li>
            <li>The Connected Hack-ton in Major Cities across Africa</li>
          </ul>
        </div>
        <img src={MoreAbout} alt="more about us" />
      </div>
    </div>
  );
};

export default Donation;
