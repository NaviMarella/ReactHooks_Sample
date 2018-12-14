import React, { Suspense, lazy } from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../shared/components/loading/loader";
const StarsPage = lazy(() => import('./../pages/stars/StarsPage'));
const ReposPage = lazy(() => import('../pages/repos/RepoPage'));
const FollowingPage = lazy(() => import('../pages/following/FollowingPage'));
const FollowersPage = lazy(() => import('../pages/followers/FollowersPage'));

const LazyComponent = ({id, children}) => {
    return (
        <Suspense key={id} fallback={<Loader />}>
            {children}
        </Suspense>
    )
}

export const RouteConfig = (props) => {
    const { routes } = props;
    return (
        <div>
            <Route exact path="/" render={() => <Redirect to="/repos" /> } />
            {
                routes && routes.map((routeInfo, index) =>
                    <Route exact key={"route-" + index} path={routeInfo.path} component={() => <LazyComponent id={index}><routeInfo.component/></LazyComponent>}/>
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
        component: FollowersPage
    },
    {
        path: '/following',
        displayName: 'Following',
        counterName: "following",
        component: FollowingPage
    },
    {
        path: '/gists',
        displayName: 'Gists',
        counterName: "public_gists",
        component: () => <div>Gists</div>
    },
];