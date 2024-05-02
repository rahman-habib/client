
import { useWeb3Modal } from '@web3modal/ethers/react';
import { useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers/react';
import React from "react";
import './style.css';

import { Container, Row, Col, Card,Carousel, Button ,Offcanvas ,Navbar, Nav} from "react-bootstrap";
import { ethers } from "ethers";
import { useState,useEffect } from "react";
import RegisterUser from "./RegisterUser";
import AddLand from "./AddLand";
export const NavBar = () => {
    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();
    const { disconnect } = useDisconnect();
    const [isUserVerified, setIsUserVerified] = useState(false);
    const [userAddress, setUserAddress] = useState(null);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Land Registry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="addLand">Add Land</Nav.Link>
                        <Nav.Link href="registerUser">Add User</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                          
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="home">verifiland</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="verify">Verify</Nav.Link>
              <Nav.Link href="signin">Sign In</Nav.Link>
              <Nav.Link href="signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero">
        <Row>
          <Col className="text-center hero-text">
            <h1>Blockchain-based Land Verification System</h1>
            <p>Securely verify, register and transfer land ownership with ease. Powered by Ethereum Smart Contract.</p>
            <Button variant="primary" onClick={handleShow}>
            Sign in →
      </Button>
          </Col>
        </Row>
      </Container>
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {!isConnected ? (
                                <Nav.Link onClick={() => open({ view: "Connect" })}>Connect Wallet</Nav.Link>
                            ) : (
                                <Nav.Link onClick={() => disconnect()}>Disconnect</Nav.Link>
                            )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Other sections... */}
    </div>
        </>
    );
};
