import React, { createContext, useEffect, useReducer } from "react";
import { RouteConfig, routes } from "../../../../config/routes";
// TODO: Change webpack setup to avoid multiple ../..
import { getCurrentUserInfo } from "../../../../shared/apis/github-api";
import Divider from "../../../../shared/components/divider/divider";
import NavBar from "../../../../shared/components/NavBar/NavBar";
import UserBio from "../user-bio/user-bio";
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

export const ProfileContext = createContext({});

const UserProfile = () => {
  const [{ currentUser, userInfo, loading }, dispatch] = useReducer(
    UserProfileReducer,
    initialState
  );

  const getCurrentUser = () => {
    let userInfo = getCurrentUserInfo();
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
    <ProfileContext.Provider value={currentUser}>
      <div className="userprofile_container">
        <div className="userprofile_profile">
          <UserBio userInfo={userInfo} />
        </div>

        <div className="userprofile_info_container">
          <div className="userprofile_options">
            <NavBar routes={routes} userInfo={userInfo}/>
          </div>
          <Divider />
          <div className="userProfile_info">
            <RouteConfig routes={routes} userInfo={userInfo}/>
          </div>
        </div>
      </div>
    </ProfileContext.Provider>
  );
};

export default UserProfile;
