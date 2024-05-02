import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { Contract, formatUnits } from 'ethers'
import { ethers } from "ethers";
import LandContract from '../contracts/LandRegistery.json';
const AddLand = () => {
  const [area, setArea] = useState(0);
  const [addressStreet, setAddressStreet] = useState('');
  const [landPrice, setLandPrice] = useState(0);
  const [allLatitudeLongitude, setAllLatitudeLongitude] = useState('');
  const [propertyPID, setPropertyPID] = useState(0);
  const [surveyNumber, setSurveyNumber] = useState('');
  const [document, setDocument] = useState('');
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

//   const { landRegistry, account } = useLandRegistry();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert land price to Wei (smallest denomination of Ether)
    const landPriceInWei = landPrice * 10**18;

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
        
                    // console.log(formData)
                    // const tx = await RegisterUserAccount(signer, contractAddress, formData); // Call the exported function
                    const response = await contract.registerUser(area, address, landPriceInWei, allLatitudeLongitude, propertyPID, surveyNumber, document)
        console.log(response);
    //   const tx = await landRegistry.methods
    //     .addLand()
    //     .send({ from: account });

    //   console.log('Land added successfully:', tx.transactionHash);

      // Reset form after successful submission
      setArea(0);
      setAddressStreet('');
      setLandPrice(0);
      setAllLatitudeLongitude('');
      setPropertyPID(0);
      setSurveyNumber('');
      setDocument('');
    } catch (error) {
      console.error('Error adding land:', error);
    }
  };

  return (
    <div>
      <h2>Add Land</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="area">
          <Form.Label>Area (sq.ft)</Form.Label>
          <Form.Control type="number" value={area} onChange={(e) => setArea(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={addressStreet} onChange={(e) => setAddressStreet(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="landPrice">
          <Form.Label>Land Price (ETH)</Form.Label>
          <Form.Control type="number" value={landPrice} onChange={(e) => setLandPrice(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="allLatitudeLongitude">
          <Form.Label>Latitude & Longitude (comma separated)</Form.Label>
          <Form.Control
            type="text"
            value={allLatitudeLongitude}
            onChange={(e) => setAllLatitudeLongitude(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="propertyPID">
          <Form.Label>Property PID</Form.Label>
          <Form.Control type="number" value={propertyPID} onChange={(e) => setPropertyPID(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="surveyNumber">
          <Form.Label>Survey Number</Form.Label>
          <Form.Control type="text" value={surveyNumber} onChange={(e) => setSurveyNumber(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="document">
          <Form.Label>Document URL</Form.Label>
          <Form.Control type="text" value={document} onChange={(e) => setDocument(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Land
        </Button>
      </Form>
    </div>
  );
};

export default AddLand;
