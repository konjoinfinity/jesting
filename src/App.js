import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'react-awesome-button/dist/styles.css';
import Logos from "./Logos.tsx"

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "row", flexWrap:"wrap"}}>
        <Logos />
        </div>
        </div>
    </div>
  );
}

export default App;
