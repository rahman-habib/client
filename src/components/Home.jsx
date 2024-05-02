import React from "react";
import './style.css';

import { Container, Row, Col, Card,Carousel, Button ,Offcanvas ,Navbar, Nav} from "react-bootstrap";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { useState,useEffect } from "react";
import RegisterUser from "./RegisterUser";
import AddLand from "./AddLand";
function HomeComponent({ contract }) {
  const { connect, connected } = useWeb3Modal();
  const [isUserVerified, setIsUserVerified] = useState(false);
  const [userAddress, setUserAddress] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   useEffect(() => {
//     const checkUserVerification = async () => {
//       if (connected && contract) {
//         const verified = await contract.isUserVerified(connected.address);
//         setIsUserVerified(verified);
//         setUserAddress(connected.address);
//       }
//     };

//     checkUserVerification();
//   }, [connected, contract]);

//   const handleConnect = async () => {
//     try {
//       const provider = await connect();
//       setUserAddress(provider.getSigner().getAddress());
//     } catch (error) {
//       console.error("Connection error:", error);
//     }
//   };

  return (
   <div>
    <h1>home</h1>
   </div>
  );
}

export default HomeComponent;
