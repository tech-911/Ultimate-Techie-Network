import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/index";
import CreateAccount from "./pages/createAccount/createAccount";
import Login from "./pages/Login/login";
import Catigories from "./pages/home/catigories/catigories";
import Landing from "./pages/home/Landing/landing"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="/catigories" element={<Catigories />} />
        </Route>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
