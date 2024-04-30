import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useWeb3ModalProvider, useWeb3ModalAccount ,useDisconnect} from '@web3modal/ethers/react'


export const NavBar = () => {
    const { open, close } = useWeb3Modal()
    const { address, chainId, isConnected, } = useWeb3ModalAccount()
    const { disconnect } = useDisconnect()
  const { walletProvider } = useWeb3ModalProvider()

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Land Registry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#addLand">AddLAnd</Nav.Link>
                        <Nav.Link href="#verifyLand">VerifyLand</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Item > 
                             {!isConnected&&<button onClick={() => open({ view: "Connect" })}>Connect Wallet</button>}
                            {isConnected&&<button onClick={() => disconnect()}>Disconnect </button>}
                        </Nav.Item>
                        {/* <Nav.Item eventKey={2} href="#memes">
                            <w3m-button />
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
