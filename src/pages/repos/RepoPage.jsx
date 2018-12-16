import React, { useEffect, useState } from "react";
import { ServiceManager, endpointMapper } from '../../ServiceManager';
import CardList from './../../shared/components/card-list/card-list';
import Input from '../../components/Input';
import Conditional from '../../components/Conditional';
import './RepoPage.css';

const ReposPage = () => {
    const [repos, setRepos] = useState([]);
    const [searchText, setSearchText] = useState('');

    const fetchData = async () => {
        const repositories = await ServiceManager(endpointMapper.repos);
        const transformedRepos = repositories.map(repo => {
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
        setRepos(transformedRepos);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getFilteredRepos = (searchText) => {
        return repos.filter((repo) => {
            return repo.headerName.toLowerCase().includes(searchText.toLowerCase()) ||
            repo.description && repo.description.toLowerCase().includes(searchText.toLowerCase());
        });
    }

    const visibleRepos = searchText ? getFilteredRepos(searchText) : repos;

    return (
        <div className="repos">
            <Input changeHandler={(val) => setSearchText(val) } />
            <Conditional condition={visibleRepos.length > 0}>
                <div className="starspage_container">
                    <CardList cards={visibleRepos}/>
                </div>
                <div className="repos__no-match">
                    {`0 results for repositories matching `}
                    <b>{searchText}</b>
                </div>
            </Conditional>
        </div>
        );
}

export default ReposPage;