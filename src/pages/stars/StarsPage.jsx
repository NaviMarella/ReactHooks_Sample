import React, { useContext, useEffect, useState } from "react";
import { ServiceManager, endpointMapper } from '../../ServiceManager';
import CardList from './../../shared/components/card-list/card-list';

const StarsPage = () => {
    const [starRepos, setStarRepos] = useState([]);

    const fetchData = async () => {
        const res = await ServiceManager(endpointMapper.starred);
        setStarRepos(res);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const getStarCardsInfo = (repos) => {
        return repos.map( repo => {
            var repoObj = {};
            repoObj['headerName'] = repo['full_name'];
            repoObj['description'] = repo['description'];
            repoObj['language'] = repo['language'];
            repoObj['starCount'] = repo['stargazers_count'];
            repoObj['forkCount'] = repo['forks_count'];
            repoObj['updatedTime'] = repo['updated_at'];
            repoObj['toggleValues'] = ['Star', 'UnStar'];

            return repoObj;
        });
    }

    return (starRepos.length > 0) ? (
        <div className="starspage_container">
            <CardList cards={getStarCardsInfo(starRepos)} cardType={'repos'}/>
        </div>
    ) : null
}

export default StarsPage