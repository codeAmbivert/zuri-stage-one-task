import React from "react";
import profilePic from "./icons/profile_pic.png";
import largeScreenShareBtn from "./icons/Icon.png";
import smallScreenShareBtn from "./icons/_Avatar share button.png";

function Profile() {
  return (
    <div className="profile">
      <img src={profilePic} alt="profile pic" id="profile__img" />

      <p id="username">Annette Black</p>
      <p id="slack">codingAmbivert</p>
      <div className="share_buttons">
        <a href="#" id="smallShareBtn">
          <img src={largeScreenShareBtn} alt="share_btn" />
        </a>
        <a href="#" id="largeShareBtn">
          <img src={smallScreenShareBtn} alt="share_btn" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
