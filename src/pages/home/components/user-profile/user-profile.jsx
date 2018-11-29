import React, { useEffect, useReducer } from "react";
// TODO: Change webpack setup to avoid multiple ../..
import { getCurrentUserInfo } from "../../../../shared/apis/github-api";

import Divider from "../../../../shared/components/divider/divider";
import UserBio from "../user-bio/user-bio";
import { RouteConfig, routes } from "../../../../config/routes";
import NavBar from "../../../../shared/components/NavBar/NavBar";
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
    let userInfo = await getCurrentUserInfo();
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
        <UserBio userInfo={userInfo} />
      </div>

      <div className="userprofile_info_container">
        <div className="userprofile_options">
          <NavBar routes={routes}/>
        </div>
        <Divider />
        <div className="userProfile_info">
          <RouteConfig routes={routes} userInfo={userInfo}/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
