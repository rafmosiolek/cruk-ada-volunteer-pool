import Redirect from "./index";
import React from "react";
import logo from "./images/CRUK-logo.png";
import "./App.css";
import GoogleAuth from "./GoogleAuth";
import Event from "./Event";
import google from "./images/google-icon.png";
import facebook from "./images/facebook-icon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          onClick={() => {
            Redirect(<App />);
          }}
          className="homepage-logo"
          alt="logo"
        />
      </header>
      <div className="login-container">
        <p className="login-label">Login:</p>
        <div className="login-icon">
          <img
            src={facebook}
            onClick={() => {
              Redirect(<Event />);
            }}
          ></img>
        </div>
        <div className="login-icon">
          <img
            src={google}
            onClick={() => {
              Redirect(<GoogleAuth />);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
