import React, { useEffect, useReducer } from "react";
import {
  getUserProfile
} from "../../config/configuration";
import Divider from "../divider/divider";
import Profile from "../Profile/profile";
import RouteConfig, { routes } from "../routes/routeConfig";
import Tabs from "../Tabs/tabs";
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

      <div className="userprofile_info_container">
        <div className="userprofile_options">
          <Tabs routes={routes}/>
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
