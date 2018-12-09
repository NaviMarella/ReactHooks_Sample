import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from './../home/components/user-profile/user-profile';
import { getUserFollowingInfo } from "../../shared/apis/github-api";
import CardList from './../../shared/components/card-list/card-list';

const FollowingPage = () => {
    const currentUser = useContext(ProfileContext);

    const [following, setFollowing] = useState([]);

    const fetchData = async () => {
        const res = await getUserFollowingInfo(currentUser);
        setFollowing(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getFollowingCardsInfo = (data) => {
        return data.map( followingUser => {
            var repoObj = {};
            repoObj['loginName'] = followingUser['login'];
            repoObj['avatar_url'] = followingUser['avatar_url'];
            repoObj['toggleValues'] = ['Unfollow', 'Follow'];
            return repoObj;
        });
    }

    return (following.length > 0) ? (
        <div className="starspage_container">
            <CardList cards={getFollowingCardsInfo(following)} cardType={'user'}/>
        </div>
    ) : null
}

export default FollowingPage