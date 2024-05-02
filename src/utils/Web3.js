// import { useState, useEffect } from 'react';
// import {  ethers} from 'ethers';
// import { useWeb3Modal } from '@web3modal/ethers/react'
// import { useWeb3ModalProvider, useWeb3ModalAccount ,useDisconnect} from '@web3modal/ethers/react'
// import LandContract from '../contracts/LandRegistery.json';

// const provider=new ethers.JsonRpcProvider("http://localhost:7545");  

//  const  useRemoveAllLandIncpectorList =()=> {
//   const returnAllLandInspectorList = async () => {
//     try {
//       if (!provider) return [];
//       const contract = new ethers.Contract(LandContract.address, LandContract.abi, provider);
//       const inspectorList = await contract.ReturnAllLandIncpectorList();
//       return inspectorList;
//     } catch (error) {
//       console.error('Error getting Land Inspector list:', error);
//       return [];
//     }
//   };

//   return returnAllLandInspectorList;
// };
//   function useRemoveLandInspector () {

//   const removeLandInspector = async ( _addr ) => {
//     try {
//       if (!provider) return;
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(LandContract.address, LandContract.abi, signer);
//       const tx = await contract.removeLandInspector(_addr);
//       await tx.wait();
//       console.log('Land Inspector removed successfully!');
//     } catch (error) {
//       console.error('Error removing Land Inspector:', error);
//     }
//   };

//   return removeLandInspector;
// };


//   function useIsLandInspector () {
//   // const provider = useWeb3Provider();

//   const isLandInspector = async (_id) => {
//     try {
//       if (!provider) return false;
//       const contract = new ethers.Contract(LandContract.address, LandContract.abi, provider);
//       const isInspector = await contract.isLandInspector(_id);
//       return isInspector;
//     } catch (error) {
//       console.error('Error checking Land Inspector:', error);
//       return false;
//     }
//   };

//   return isLandInspector;
// };

// //-----------------------------------------------User-----------------------------------------------


//   function useIsUserRegistered () {
//   // const provider = useWeb3Provider();

//   const isUserRegistered = async (_addr) => {
//     try {
//       if (!provider) return false;
//       const contract = new ethers.Contract(LandContract.address, LandContract.abi, provider);
//       const isRegistered = await contract.isUserRegistered(_addr);
//       return isRegistered;
//     } catch (error) {
//       console.error('Error checking user registration:', error);
//       return false;
//     }
//   };

//   return isUserRegistered;
// };


//   function useAddLand () {
//     // const provider = useWeb3Provider();
  
//     const addLand = async (
//       _area,
//       _landAddress,
//       _landPrice,
//       _allLatitudeLongitude,
//       _propertyPID,
//       _physicalSurveyNumber,
//       _document,
//       _isforSell
//     ) => {
//       try {
//         if (!provider) return;
//         const signer = provider.getSigner();
//         const contract = new ethers.Contract(LandContract.address, LandContract.abi, signer);
//         const tx = await contract.addLand(
//           _area,
//           _landAddress,
//           _landPrice,
//           _allLatitudeLongitude,
//           _propertyPID,
//           _physicalSurveyNumber,
//           _document,
//           _isforSell
//         );
//         await tx.wait();
//         console.log('Land added successfully!');
//       } catch (error) {
//         console.error('Error adding land:', error);
//       }
//     };
  
//     return addLand;
//   };
  
//     function useGetAllLands () {
//     // const provider = useWeb3Provider();
  
//     const getAllLands = async () => {
//       try {
//         if (!provider) return [];
//         const contract = new ethers.Contract(LandContract.address, LandContract.abi, provider);
//         const lands = await contract.getAllLands();
//         return lands;
//       } catch (error) {
//         console.error('Error getting all lands:', error);
//         return [];
//       }
//     };
  
//     return getAllLands;
//   };
  
//     function useGetUserLands () {
//     // const provider = useWeb3Provider();
  
//     const getUserLands = async (_addr) => {
//       try {
//         if (!provider) return [];
//         const contract = new ethers.Contract(LandContract.networks.address, LandContract.abi, provider);
//         const lands = await contract.getUserLands(_addr);
//         return lands;
//       } catch (error) {
//         console.error('Error getting user lands:', error);
//         return [];
//       }
//     };
  
//     return getUserLands;
//   };
  
//     function useGetAllLandRequests () {
//     // const provider = useWeb3Provider();
  
//     const getAllLandRequests = async () => {
//       try {
//         if (!provider) return [];
//         const contract = new ethers.Contract(LandContract.address, LandContract.abi, provider);
//         const requests = await contract.getAllLandRequests();
//         return requests;
//       } catch (error) {
//         console.error('Error getting all land requests:', error);
//         return [];
//       }
//     };
  
//     return getAllLandRequests;
//   };
  
//     function useGetUserLandRequestsSent () {
//     // const provider = useWeb3Provider();
  
//     const getUserLandRequestsSent = async (_addr) => {
//       try {
//         if (!provider) return [];
//         const contract = new ethers.Contract(LandContract.address, LandContract.abi, provider);
//         const requests = await contract.getUserLandRequestsSent(_addr);
//         return requests;
//       } catch (error) {
//         console.error('Error getting user land requests sent:', error);
//         return [];
//       }
//     };
  
//     return getUserLandRequestsSent;
//   };
  
    
  
//     export const  RegisterUserAccount =()=> {
//     // const provider = useWeb3Provider();
  
//     const registerUser = async (
//       _name,
//       _age,
//       _city,
//       _aadharNumber,
//       _panNumber,
//       _document,
//       _email
//     ) => {
//       try {
//         if (!provider) return;
//         const signer = provider.getSigner();
//         const contract = new ethers.Contract(LandContract.address, LandContract.abi, signer);
//         const tx = await contract.registerUser(
//           _name,
//           _age,
//           _city,
//           _aadharNumber,
//           _panNumber,
//           _document,
//           _email
//         );
//         await tx.wait();
//         console.log('User registered successfully!');
//       } catch (error) {
//         console.error('Error registering user:', error);
//       }
//     };
  
//     return registerUser;
//   };
  
