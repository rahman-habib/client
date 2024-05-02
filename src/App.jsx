import logo from './logo.svg';
import './App.css';
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { NavBar } from './components/NavBar';
import Home from './components/Home';
// import {LandOwnerReg} from './components/LandOwnerReg';
// import AdminDashboard from './components/AdminDashboard.js';
// import {RegisterLand} from './components/RegisterLand';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { Contract, formatUnits } from 'ethers'
import { ethers } from "ethers";
// import {RegisterUser} from "./components/RegisterUser";
import {AddLand} from './components/AddLand';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection';

function App() {
  const { open, close } = useWeb3Modal()
  const { connect, connected } = useWeb3Modal();

  // useEffect(() => {
  //   // console.log("switched to " + chain?.id);
  // }, [chain?.id]);
  return (
   
    <BrowserRouter>
    <div>
          <NavBar/>
          <HeroSection/>

    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/land-owner-registration" element={<LandOwnerReg />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/register-land" element={<RegisterLand />} /> */}
        {/* <Route
          path="/land-transfer"
          element={<LandOwnerShipTransfer />}
        /> */}
        {/* <Route path="/land/:landId" element={<Lands />} />
        <Route path="/my-lands" element={<AllLands />} />
        <Route path="/status" element={<Status />} />
        <Route path="/history" element={<History />} /> */}
      </Routes>
    </BrowserRouter>


    


     
  );
}

export default App;
