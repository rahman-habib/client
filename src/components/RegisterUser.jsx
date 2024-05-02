import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { Contract, formatUnits } from 'ethers'
import { ethers } from "ethers";
import LandContract from '../contracts/LandRegistery.json';

function RegisterUser() {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: "",
        aadharNumber: "",
        panNumber: "",
        document: "",
        email: "",
    });
    

    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (!isConnected) {
            setError("Please connect your wallet to register.");
            return;
        }

        try {
            const provider = new ethers.BrowserProvider(walletProvider)

// MetaMask requires requesting permission to connect users accounts
// await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()
            // const provider = new ethers.JsonRpcProvider("http://localhost:7545"); // Replace with your Ganache RPC URL if different
            // const signer = await ethers.getgetSigner()// Use walletProvider and inject the local provider
      
            // const contract = new Contract(LandContract.networks.address, LandContract.abi, signer)
      

            // const ethersProvider = new BrowserProvider(walletProvider)

            // const signer = await walletProvider.request("") // Use walletProvider directly

            const contract = new Contract(LandContract.networks.address, LandContract.abi, signer)

            console.log(formData)
            // const tx = await RegisterUserAccount(signer, contractAddress, formData); // Call the exported function
            const response = await contract.registerUser(formData.name,formData.age,formData.city,formData.aadharNumber,formData.panNumber,formData.document,formData.email)
console.log(response);
            setIsRegistered(true);
            setFormData({ ...formData, name: "", age: "", city: "", aadharNumber: "", panNumber: "", document: "", email: "" }); // Clear form after successful registration
        } catch (error) {
            console.error("Registration error:", error);
            setError(error.message);
        }
    };

    return (
        <Card className="w-100">
            <Card.Header>Register as User</Card.Header>
            <Card.Body>
                {isRegistered && (
                    <Alert variant="success">Registration successful!</Alert>
                )}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formAadharNumber">
                        <Form.Label>Aadhar Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPanNumber">
                        <Form.Label>Pan Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="panNumber"
                            value={formData.panNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formDocument">
                        <Form.Label>Document (URL)</Form.Label>
                        <Form.Control
                            type="url"
                            name="document"
                            value={formData.document}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default RegisterUser;