import React from "react";
import logo from "./images/CRUK-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="homepage-logo" alt="logo" />
      </header>
      <div className="login-container">
        <p className="login-label">Login:</p>
        <div className="login-icon">Facebook</div>
        <div className="login-icon">Google</div>
      </div>
    </div>
  );
}

export default App;
