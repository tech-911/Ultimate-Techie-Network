import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import CreateAccount from "./pages/createAccount/createAccount";
import Login from "./pages/Login/login";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
