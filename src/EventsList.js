import React, { Component } from "react";
import "./EventsList.css";
import Redirect from "./index";
import Profile from "./profile";
import icon from "./images/profile-small-icon.png";
import Event from "./Event";

class EventsList extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="Event">
        <div className="subpage-header">
          <div class="subpage-header-title">Events:</div>
          <img
            src={icon}
            className="profile-icon"
            width="30"
            height="25"
            onClick={() => {
              Redirect(<Profile user={this.props.user} />);
            }}
          ></img>
        </div>
        <div className="subpage-container">
          <div className="events-list-header">Please select an event:</div>
          <div
            className="event-container"
            onClick={() => {
              Redirect(<Event user={this.props.user} />);
            }}
          >
            <p className="event-title">Race For Life</p>
            <div className="event-details-right">
              <p className="event-location-list">Location: Bath</p>
              <p className="event-date-list">Date: 26/03</p>
            </div>
          </div>
          <div
            className="event-container"
            onClick={() => {
              Redirect(<Event user={this.props.user} />);
            }}
          >
            <p className="event-title">Race For Life</p>
            <div className="event-details-right">
              <p className="event-location-list">Location: Bath</p>
              <p className="event-date-list">Date: 26/03</p>
            </div>
          </div>
          <div
            className="event-container"
            onClick={() => {
              Redirect(<Event user={this.props.user} />);
            }}
          >
            <p className="event-title">Race For Life</p>
            <div className="event-details-right">
              <p className="event-location-list">Location: Bath</p>
              <p className="event-date-list">Date: 26/03</p>
            </div>
          </div>
          <div
            className="event-container"
            onClick={() => {
              Redirect(<Event user={this.props.user} />);
            }}
          >
            <p className="event-title">Race For Life</p>
            <div className="event-details-right">
              <p className="event-location-list">Location: Bath</p>
              <p className="event-date-list">Date: 26/03</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsList;
