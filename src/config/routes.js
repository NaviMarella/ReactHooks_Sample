import React from "react";
import { Redirect, Route } from "react-router-dom";
import StarsPage from './../pages/stars/StarsPage';
import ReposPage from '../pages/repos/RepoPage';

export const RouteConfig = (props) => {
    const { routes } = props;
    return (
        <div>
            <Route exact path="/" render={() => <Redirect to="/overview" /> } />
            {
                routes && routes.map((routeInfo, index) =>
                    <Route exact key={"route-" + index} path={routeInfo.path} component={routeInfo.component}/>
                )
            }
        </div>
    )
}

export const routes = [{
        path: '/overview',
        displayName: 'Overview',
        counterName: "public_overview",
        component: () => <div> Overview </div>
    },
    {
        path: '/repos',
        displayName: 'Repositories',
        counterName: "public_repos",
        component: ReposPage
    },
    {
        path: '/stars',
        displayName: 'Stars',
        counterName: "public_stars",
        component: StarsPage
    },
    {
        path: '/followers',
        displayName: 'Followers',
        counterName: "followers",
        component: () => <div>Followers</div>
    },
    {
        path: '/following',
        displayName: 'Following',
        counterName: "following",
        component: () => <div>Following</div>
    },
    {
        path: '/gists',
        displayName: 'Gists',
        counterName: "public_gists",
        component: () => <div>Gists</div>
    },
];