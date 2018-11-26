import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tabs.css";

const Tabs = ({ routes }) => {
    const { activeTab, setactiveTab } = useState(routes[0].displayName);

    return (
        <div className="tabs_options">
            <ul>
                {
                    routes && routes.map((routeInfo, index) => {
                        const {path, displayName} = routeInfo;
                        return (
                            <li key={"tab-"+index} className={(displayName === activeTab) ? "tab_active" : ""} >
                                <Link to={path} onClick={() => setactiveTab(displayName)}>{displayName}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Tabs;
