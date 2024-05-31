import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import CoinContextProvider from "./context/CoinContext";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:coinId" element={<Coin />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
};

export default App;
