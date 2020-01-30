import React from "react";
import "./profile.css";
import Redirect from "./index";
import App from "./App";
import back from "./images/back-arrow.png";
import profile from "./images/profile-img.png";

function Profile() {
  return (
    <div className="Event">
      <div className="subpage-header">
      <img
    src={back}
    onClick={() => {
      Redirect(<App />);
    }}
      ></img>
        <div className="subpage-header-title">Profile</div>
      </div>
      
      <div className="profile-image">
        <img
        src={profile}></img>
      </div>

      <div className="customer-info">
         <div> 
            <p> Name: </p>
            <p> NAME</p>
          </div>

          <div>
              <p> Age:  </p>
              <p> AGE</p>
          </div>
          <div>
              <p> Email: </p>
              <p> CUSTOMER EMAIL</p>
          </div>
      </div>

      <div className="events-container">

        <div className="events-list">
            <div className= "event-header">Previous Events</div>
            <div className= "event"> Race for Life, Bath, 12/03/19 </div>
            <div className= "event"> Race for Life, Liverpool, 27/05/19 </div>
         </div>

         <div className="events-list">
             <div className= "event-header">Upcoming Events</div>
             <div className= "event"> Race for Life, Hull, 01/03/20 </div>
             <div className= "event"> Race for Life, Liverpool, 27/05/20 </div>
        </div>

         </div>

      </div>
  );
}


export default Profile;