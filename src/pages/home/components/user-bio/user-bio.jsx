import React from "react";
import Avatar from "../../../../shared/components/avatar/avatar";
import Divider from "../../../../shared/components/divider/divider";
import "./user-bio.css";

const UserBio = ({ userInfo }) => {
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

export default UserBio;
