import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import CreateAccount from "./pages/createAccount/createAccount";
import Login from "./pages/Login/login";
import Catigories from "./pages/home/catigories/catigories";
import Landing from "./pages/home/Landing/landing";
import FutureEdition from "./pages/home/futureEditions/futureEditions";
import About from "./pages/home/aboutUs/about";
import Donation from "./pages/home/Donation/donation";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="/catigories" element={<Catigories />} />
          <Route path="/futureeditions" element={<FutureEdition />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/donation" element={<Donation />} />
        </Route>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
