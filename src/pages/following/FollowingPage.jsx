import React, { useContext, useEffect, useState } from "react";
import { ServiceManager, endpointMapper } from '../../ServiceManager';
import CardList from './../../shared/components/card-list/card-list';

const FollowingPage = () => {
    const [following, setFollowing] = useState([]);

    const fetchData = async () => {
        const res = await ServiceManager(endpointMapper.following);
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