import { getUserProfile } from '../shared/apis/github-api';

export const endpointMapper = {
    repos: '/repos',
    starred: '/starred',
    followers: '/followers',
    following: '/following'
}

export async function ServiceManager(path) {
    const currentUser = sessionStorage.getItem(currentUser);
    const basePath = `${getUserProfile(currentUser)}`;
    const url = `${basePath}${path}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
};
