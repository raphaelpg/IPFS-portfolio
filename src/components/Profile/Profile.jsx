import React from "react";
import Fade from 'react-reveal/Fade';

let Profile = () => {
  return (
    <div name="info" className="App-Profile-container">
      <div className="App-Profile-title" id="profile-id">About me:</div>
      <div className="App-Profile-description-container">
        <Fade duration={2000}>
          <div className="App-profile-description">
            <div className="App-profile-description-item">Hi, I'm a freelancer Javascript fullstack developer</div>
            <div className="App-profile-description-item">Currently building web sites, apps and dapps, also participating in hackathons</div>
            <div className="App-profile-description-item">Passionate about Science Fiction</div>
          </div>
        </Fade>
        <Fade duration={2000}>
          <div className="App-Profile-photo-container">
        	  <img className="App-Profile-photo" src="/images/profil2020NB.jpeg" alt="Raphael Pinto Gregorio profile" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Profile;