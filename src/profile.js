import React, { Component } from "react";
import "./profile.css";
import Redirect from "./index";
import App from "./App";
import Event from "./Event";
import back from "./images/back-arrow.png";
import profile from "./images/profile-img.png";
import EventsList from "./EventsList";
import FutureEvent from "./FutureEvent";

class Profile extends Component {
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
          <div className="subpage-header-title">Profile</div>
        </div>

        <div className="profile-top-bar">
          <img className="profile-image" src={profile}></img>

          <div className="customer-info">
            <p>
              {" "}
              <b>Name: </b>
              <br></br> {this.props.user.displayName} <br></br>
              <b>Age:</b> <br></br> 25 <br></br>
              <b> Email:</b> <br></br> {this.props.user.email}
            </p>
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
              Redirect(<FutureEvent user={this.props.user} />);
            }}
          >
            Race for Life, Bath, 12/03/19
          </div>
          <div
            className="profile-events-entry"
            onClick={() => {
              Redirect(<FutureEvent user={this.props.user} />);
            }}
          >
            Race for Life, Bath, 12/03/19
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
