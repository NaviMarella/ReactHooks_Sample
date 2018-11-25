import React, { useReducer, useEffect } from "react";
import Profile from "../profile/profile";
import { getUserProfile } from "../../config/configuration";

import "./user-profile.css";

const initialState = {
  currentUser: null,
  userInfo: null,
  loading: true
};

const UserProfileReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        currentUser: action.userInfo.login,
        userInfo: action.userInfo,
        loading: true
      };

    default:
      return state;
  }
};

const UserProfile = () => {
  const [{ currentUser, userInfo, loading }, dispatch] = useReducer(
    UserProfileReducer,
    initialState
  );

  const getCurrentUser = async () => {
    let url = getUserProfile("NaviMarella");
    const response = await fetch(url);
    let userInfo = await response.json();

    dispatch({
      type: "LOAD_USER",
      userInfo
    });
  };

  useEffect(
    () => {
      getCurrentUser();
    },
    [currentUser]
  );

  return !loading ? (
    <div>Loading....</div>
  ) : (
    <div className="userprofile_container">
      <div className="userprofile_profile">
        <Profile userInfo={userInfo} />
      </div>
    </div>
  );
};

export default UserProfile;
