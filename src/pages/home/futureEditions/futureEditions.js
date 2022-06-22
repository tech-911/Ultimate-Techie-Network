import React from "react";
import "./futureEditions.css";
import { content } from "./data";
import futureEditionLogo from "../../../assets/futureEditionLogo.png";

const FutureEdition = () => {
  console.log(content);
  return (
    <div>
      <div>
        <div className="text-center font-semibold text-[36px] mb-4">
          Future Editions
        </div>
        <p className="text-center text-[16px] mb-10">
          Nominate candidates for future editions
        </p>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-4 gap-4">
        {content.map((value) => {
          return (
            <div className="flex flex-col items-center justify-center px-4 py-6 rounded-[8px] shadow-[0px_2px_15px_rgba(230,230,230,0.5)] mx-8 mb-4 widget-animate transition-all ease-in-out">
              <img src={futureEditionLogo} alt="img" className="mb-4" />
              <p className="mb-8 font-semibold text-center">{value.content}</p>
              <button className="bg-[#3E0563] px-8 py-3 rounded-[2px] text-[white] w-[90%]">
                Nominate
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FutureEdition;
