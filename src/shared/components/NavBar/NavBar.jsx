import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Counter from './../counter/counter';

const NavBar = ({ routes, userInfo }) => {
    return (
        <div className="nav_options">
            <ul>
                {
                    routes && routes.map((routeInfo, index) => {
                        const {path, displayName, counterName} = routeInfo;
                        return (
                            <li key={"tab-" + index}>
                                <NavLink to={path} activeClassName="active">
                                    {displayName}
                                    {userInfo && userInfo[counterName] && (<Counter counter={userInfo[counterName]}/>)}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default NavBar;
