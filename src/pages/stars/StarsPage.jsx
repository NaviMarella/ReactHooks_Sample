import React, { useContext } from "react";
import { ProfileContext } from './../home/components/user-profile/user-profile';

const StarsPage = () => {
    const userInfo = useContext(ProfileContext);
    return userInfo ? (
        <div className="starspage_container">
            <span>{userInfo.name}</span>
        </div>
    ) : null
}

export default StarsPage