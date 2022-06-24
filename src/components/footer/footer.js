import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer pt-16 pb-12 px-80 mt-20">
        <div className="grid grid-cols-5 footer-res-1">
          <div className="flex flex-col">
            <p className="text-[#FA9706] text-[16px] mb-6">About</p>
            <p className="text-[white] text-[16px] mb-6">
              The Connected Magazine
            </p>
            <p className="text-[white] text-[16px] mb-6">Past Editions</p>
            <p className="text-[white] text-[16px] mb-6">Celebrated Techies</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FA9706] text-[16px] mb-6">Legal</p>
            <p className="text-[white] text-[16px] mb-6">Terms of Service</p>
            <p className="text-[white] text-[16px] mb-6">Privacy Policy</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FA9706] text-[16px] mb-6">Social</p>
            <p className="text-[white] text-[16px] mb-6">Linkedin</p>
          </div>
          <div className="flex flex-col col-span-2 footer-res-2">
            <p className="text-[#FA9706] text-[16px] mb-6">Contact</p>
            <p className="text-[white] text-[16px] mb-6">+23458304823</p>
            <p className="text-[white] text-[16px] mb-6">Past Editions</p>
            <p className="text-[white] text-[16px] mb-6">Celebrated Techies</p>
          </div>
        </div>
        <div className="flex items-end justify-between mt-20 footer-res-3">
          <div className="flex flex-col items-center justify-center footer-res-4">
            <img src={FooterLogo} alt="footer logo" />
            <p className="mt-4 text-[white]">Celebrating Techies Globally</p>
          </div>

          <p className="text-[16px] text-[white]">
            &copy; 2022 The Conected Awards - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
