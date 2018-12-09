
const Base_Url = "https://api.github.com";

const getUserProfile = userName => {
    let name = userName || 'NaviMarella';
    return `${Base_Url}/users/${name}`;
};

export async function getCurrentUserInfo(userName = 'NaviMarella') {
    let url = getUserProfile(userName);
    const response = await fetch(url);
    let data = await response.json();
    return data;
};

export async function getStarReposInfo(userName = 'NaviMarella') {
     let url = `${getUserProfile(userName)}/starred`;
     const response = await fetch(url);
     let data = await response.json();
     return data;
};

export async function getReposInfo(userName = 'NaviMarella') {
    let url = `${getUserProfile(userName)}/repos`;
    const response = await fetch(url);
    let data = await response.json();
    return data;
};