import React from "react";
import Nav from "../../components/navbar/nav";
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
