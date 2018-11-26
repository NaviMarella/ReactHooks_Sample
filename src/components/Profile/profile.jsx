import React from "react";
import Avatar from "../avatar/avatar";
import Divider from "../divider/divider";
import "./profile.css";

const Profile = ({ userInfo }) => {
  const { avatar_url: url, name, login, bio, company, location } =
    userInfo || {};
  return !userInfo ? null : (
    <div className="profile_container">
      <Avatar url={url} name={name} />
      <h2>{name} </h2>
      <span className="text_align-margin">{login}</span>
      <span className="text_align-margin">{bio}</span>
      <Divider />
      <div className="profile_location">
        <span className="text_align-margin">{company}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default Profile;
