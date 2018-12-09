import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from './../home/components/user-profile/user-profile';
import { getUserFollowerInfo } from "../../shared/apis/github-api";
import CardList from './../../shared/components/card-list/card-list';

const FollowersPage = () => {
    const currentUser = useContext(ProfileContext);

    const [followers, setFollowers] = useState([]);

    const fetchData = async () => {
        const res = await getUserFollowerInfo(currentUser);
        setFollowers(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getFollowingCardsInfo = (data) => {
        return data.map( followerUser => {
            var repoObj = {};
            repoObj['loginName'] = followerUser['login'];
            repoObj['avatar_url'] = followerUser['avatar_url'];
            repoObj['toggleValues'] = ['Follow', 'UnFollow'];
            return repoObj;
        });
    }

    return (followers.length > 0) ? (
        <div className="starspage_container">
            <CardList cards={getFollowingCardsInfo(followers)} cardType={'user'}/>
        </div>
    ) : null
}

export default FollowersPage