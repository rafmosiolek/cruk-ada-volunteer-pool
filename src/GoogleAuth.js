import React, { useState } from "react";
import App from "./App";
import Redirect from "./index";
import Profile from "./profile";
import logo from "./images/CRUK-logo.png";
import Event from "./Event";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "firebase/firestore";
import EventsList from "./EventsList";

const firebaseConfig = {
  apiKey: "AIzaSyC-OWZmd2zyeJ6tiq2gEUwEvQZtrtr1mOE",
  authDomain: "ada-farm-9b744.firebaseapp.com",
  databaseURL: "https://ada-farm-9b744.firebaseio.com",
  projectId: "ada-farm-9b744",
  storageBucket: "",
  messagingSenderId: "54901659859",
  appId: "1:54901659859:web:7cae0f81592711b7"
};

firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//preloading constants:

function GoogleAuth() {
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        setIsAuth(true);
        return false;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInSuccessUrl: "http://localhost:3000",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: "http://termsofservice.com",
    // Privacy policy url.
    privacyPolicyUrl: "http://privacypolicy.com"
  };

  // Initialize the FirebaseUI Widget using Firebase.
  ui.start("#firebaseui-auth-container", uiConfig);
  const [isAuthenticated, setIsAuth] = useState(false);

  //check if the user has already played
  if (isAuthenticated) {
  }
  return (
    <>
      {isAuthenticated ? (
        <EventsList user={firebase.auth().currentUser} />
      ) : (
        ((document.querySelector(".auth-container").style.display = "block"),
        (
          <>
            <div className="App">
              <header className="App-header">
                <img
                  src={logo}
                  onClick={() => {
                    Redirect(<App />);
                    document.querySelector(".auth-container").style.display =
                      "none";
                  }}
                  className="homepage-logo"
                  alt="logo"
                />
              </header>
              <div className="login-container">
                <div id="firebaseui-auth-container" />
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
}

export default GoogleAuth;
