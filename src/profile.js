import React from "react";
import "./profile.css";
import Redirect from "./index";
import App from "./App";
import Event from "./Event";
import back from "./images/back-arrow.png";
import profile from "./images/profile-img.png";
import EventsList from "./EventsList";

function Profile() {
  return (
    <div className="Event">
      <div className="subpage-header">
        <img
          src={back}
          onClick={() => {
            Redirect(<EventsList />);
          }}
        ></img>
        <div className="subpage-header-title">Profile</div>
      </div>

      <div className="profile-top-bar">
        <img className="profile-image" src={profile}></img>

        <div className="customer-info">
          <p> Name: NAME &nbsp; &nbsp;Age: AGE</p>

          <p> Email: CUSTOMER EMAIL</p>
        </div>
      </div>

      <div className="profile-events-container">
        <div className="profile-events-header">Past Events:</div>
        <div className="profile-events-entry">
          Race for Life, Bath, 12/03/19
        </div>
        <div className="profile-events-entry">
          Race for Life, Bath, 12/03/19
        </div>
      </div>

      <div className="profile-events-container">
        <div className="profile-events-header">Future Events:</div>
        <div
          className="profile-events-entry"
          onClick={() => {
            Redirect(<Event />);
          }}
        >
          Race for Life, Bath, 12/03/19
        </div>
        <div
          className="profile-events-entry"
          onClick={() => {
            Redirect(<Event />);
          }}
        >
          Race for Life, Bath, 12/03/19
        </div>
      </div>
    </div>
  );
}

export default Profile;
