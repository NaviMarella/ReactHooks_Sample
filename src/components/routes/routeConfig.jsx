import React from "react";
import { Redirect, Route } from "react-router-dom";

const RouteConfig = (props) => {
    const { routes, otherProps } = props;
    return (
        <div>
            <Route exact path="/" render={() => <Redirect to="/overview" /> } />
            {
                routes && routes.map((routeInfo, index) =>
                    <Route exact key={"route-" + index} path={routeInfo.path} component={routeInfo.component} {...otherProps}/>
                )
            }
        </div>
    )
}


export default RouteConfig;

export const routes = [{
        path: '/overview',
        displayName: 'Overview',
        component: () => <div> Overview </div>
    },
    {
        path: '/repos',
        displayName: 'Repositories',
        component: () => <div>Repositories</div>
    },
    {
        path: '/stars',
        displayName: 'Stars',
        component: () => <div>Stars</div>
    },
    {
        path: '/followers',
        displayName: 'Followers',
        component: () => <div>Followers</div>
    },
    {
        path: '/following',
        displayName: 'Following',
        component: () => <div>Following</div>
    },
];