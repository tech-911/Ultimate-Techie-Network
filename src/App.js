import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CreateAccount from "./pages/createAccount/createAccount";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
  
};

export default App;
