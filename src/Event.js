import React, { Component } from "react";
import "./Event.css";
import Redirect from "./index";
import App from "./App";
import back from "./images/back-arrow.png";
import image from "./images/event-example-image.jpg";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "firebase/firestore";
import Profile from "./profile";
import EventsList from "./EventsList";

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <div className="subpage-header">
          <img
            src={back}
            onClick={() => {
              Redirect(<EventsList user={this.props.user} />);
            }}
          ></img>
          <div class="subpage-header-title">Event Name</div>
        </div>
        <div className="subpage-container">
          <img src={image} className="event-image"></img>
          <div class="event-details">
            <div class="event-location">Location: location</div>
            <div class="event-date">Date: date</div>
          </div>
          <div class="event-why">Why Volunteer?</div>
          <div class="event-description">
            700,000 runners, walkers, swimmers and sliders are limbering up to
            join the fight against cancer but they can’t cross the finish line
            without the passion and energy of volunteers like you. We simply
            couldn't do it without the support of our amazing volunteers. You
            can make a real difference to our research!
          </div>

          <button
            class="volunteer-button"
            onClick={() => {
              toggleButtonDisplay("volunteer");
            }}
          >
            Volunteer
          </button>
          <div class="button-container">
            <button
              class="cancel-button"
              onClick={() => {
                toggleButtonDisplay("cancel");
              }}
            >
              Cancel
            </button>
            <button class="qr-button">QR</button>
          </div>
        </div>
      </div>
    );
  }
}

function toggleButtonDisplay(toggle) {
  switch (toggle) {
    case "volunteer":
      document.querySelector(".volunteer-button").style.display = "none";
      document.querySelector(".cancel-button").style.display = "table-cell";
      document.querySelector(".qr-button").style.display = "table-cell";
      break;
    case "cancel":
      document.querySelector(".volunteer-button").style.display = "block";
      document.querySelector(".cancel-button").style.display = "none";
      document.querySelector(".qr-button").style.display = "none";
  }
}

export default Event;
