import React from "react";
import "./catigories.css";
import { HiSearch } from "react-icons/hi";
import CatigoriesLogo from "../../../assets/catigories.png";
import CatigoriesItems from "./data";
import { BsArrowRight } from "react-icons/bs";

const Catigories = () => {
  return (
    <div className="font-pulpdisplay">
      <div className="text-center font-semibold text-[36px] mb-10">
        Voting Catigories
      </div>
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center justify-between w-[30%] catigories-search-res">
          <div className="border-[1px] border-[#DBDBDB] rounded-[4px] flex items-center pl-6 py-1 w-[78%]">
            <HiSearch className="text-[#BABABA] text-[20px]" />
            <input
              type="text"
              placeholder="Nominee's Name, Nominee's Category"
              className="outline-none p-2 w-[100%]"
            />
          </div>
          <button className="bg-[#3E0563] px-8 py-3 rounded-[4px] text-[white]">
            Search
          </button>
        </div>
      </div>
      {/* -----------------------------------Volting Catigories-------------------------------- */}
      <div className="container mx-auto mt-8 grid grid-cols-4 gap-4">
        {CatigoriesItems.map((value) => {
          return (
            <div className="flex flex-col items-center justify-center px-4 py-6 rounded-[8px] shadow-[0px_2px_15px_rgba(230,230,230,0.5)] mx-5 mb-4 widget-animate transition-all ease-in-out">
              <img src={CatigoriesLogo} alt="img" className="mb-4" />
              <p className="mb-6 font-semibold">{value.content}</p>
              <div className="flex items-center justify-end w-[100%]">
                <BsArrowRight className="text-[20px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catigories;
