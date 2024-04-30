import logo from './logo.svg';
import './App.css';
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavBar } from './components/NavBar';

function App() {
  const { open, close } = useWeb3Modal()
  // useEffect(() => {
  //   // console.log("switched to " + chain?.id);
  // }, [chain?.id]);
  return (
    <div>
    <div className="App">
      {/* <button onClick={() => open({ view: "Networks" })}>Send</button> */}
      {/* <p>{chain?.name}</p> */}
    </div>
    <NavBar/>
    

    </div>
     
  );
}

export default App;
