import React from "react";
import Nav from "../../components/navbar/nav";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-pulpdisplay">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
