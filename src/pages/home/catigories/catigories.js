import React from "react";
import "./catigories.css";
import { HiSearch } from "react-icons/hi";
import CatigoriesLogo from "../../../assets/catigories.png";
import CatigoriesItems from "./data";

const Catigories = () => {
  
  return (
    <div className="font-pulpdisplay">
      <div className="text-center font-semibold text-[36px] mb-10">
        Voting Catigories
      </div>
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center justify-between w-[30%] landing-search-res">
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
      {CatigoriesItems.map((value)=>{
        return(
          <div className="">
          <img src={CatigoriesLogo} alt="img" />
          <p>{value.content}</p>
          <div className="flex items-center justify-end">
            
          </div>

          </div>
        )
      })}
  
      </div>
    </div>
  );
};

export default Catigories;
