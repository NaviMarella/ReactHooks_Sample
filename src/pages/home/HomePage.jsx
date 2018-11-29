import React from "react";
import UserProfile from "./components/user-profile/user-profile";
import Header from "../../shared/components/header/header";

const HomePage = function(){
    return(
        <div>
            <Header />
            <main>
                <UserProfile />
            </main>
        </div>
    )
}

export default HomePage