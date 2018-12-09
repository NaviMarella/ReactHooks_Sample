import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from './../home/components/user-profile/user-profile';
import { getReposInfo } from "../../shared/apis/github-api";
import CardList from './../../shared/components/card-list/card-list';

const ReposPage = () => {
    const currentUser = useContext(ProfileContext);

    const [repos, setRepos] = useState([]);

    const fetchData = async () => {
        const res = await getReposInfo(currentUser ? currentUser : null);
        setRepos(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getReposCardInfo = (repositories) => {
        return repositories.map(repo => {
            var repoObj = {};
            repoObj['headerName'] = repo['name'];
            repoObj['description'] = repo['description'];
            repoObj['language'] = repo['language'];
            repoObj['license'] = repo['license'] ? repo['license']['name']: null;
            repoObj['forkCount'] = repo['forks_count'];
            repoObj['updatedTime'] = repo['updated_at'];
            repoObj['toggleValues'] = ['UnStar', 'Star'];

            return repoObj;
        });
    }

    return (repos.length > 0) ? (
        <div className="starspage_container">
            <CardList cards={getReposCardInfo(repos)}/>
        </div>
    ) : null
}

export default ReposPage