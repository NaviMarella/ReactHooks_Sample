import React from "react";
import { Link } from "react-router-dom";
import "./tabs.css";

const Tabs = ({ routes }) => {

    return (
        <div className="tabs_options">
            <ul>
                {
                    routes && routes.map((routeInfo, index) => {
                        const {path, displayName} = routeInfo;
                        return (
                            <li key={"tab-"+index}>
                                <Link to={path} >{displayName}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Tabs;
