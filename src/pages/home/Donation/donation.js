import React from "react";
import "./donation.css";
import MoreAbout from "../../../assets/donations.png";

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

      <div className="container mx-auto px-10 flex items-start justify-between">
        <div className="flex flex-col ">
          <p className="text-[48px] font-semibold mb-5 container mx-auto pr-8 tracking-[-0.04em]">
            Connecting Techies Globally
          </p>
          <p className="text-justify text-[18px] container mx-auto pr-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img src={MoreAbout} alt="more about us" />
      </div>
    </div>
  );
};

export default Donation;
