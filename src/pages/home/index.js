import React from "react";
import Nav from "../../components/navbar/nav";
import { HiSearch } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import Target1 from "../../assets/target1.svg";
import Target2 from "../../assets/target2.svg";
import Target3 from "../../assets/target3.svg";
import Target4 from "../../assets/target4.svg";
import connectedAwards from "../../assets/connected-awards.png";
import celebrated from "../../assets/celebrated.png";
import RightBg from "../../assets/right-bg.png";
import LeftBg from "../../assets/left-bg.png";
import talent1 from "../../assets/first-talent.png";
import talent2 from "../../assets/second-talent.png";
import talent3 from "../../assets/third-talent.png";
import FooterLogo from "../../assets/footer-logo.svg";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-pulpdisplay">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
