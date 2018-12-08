import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from './../home/components/user-profile/user-profile';
import { getStarReposInfo } from "../../shared/apis/github-api";
import CardList from './../../shared/components/card-list/card-list';

const StarsPage = () => {
    const currentUser = useContext(ProfileContext);

    const [starRepos, setStarRepos] = useState([]);

    const fetchData = async () => {
        const res = await getStarReposInfo(currentUser);
        setStarRepos(res);
        console.log(res);
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
            repoObj['toggleValues'] = ['UnStar', 'Star'];

            return repoObj;
        });
    }

    return (starRepos.length > 0) ? (
        <div className="starspage_container">
            <CardList cards={getStarCardsInfo(starRepos)}/>
        </div>
    ) : null
}

export default StarsPage