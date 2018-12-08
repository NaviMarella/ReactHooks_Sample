
const Base_Url = "https://api.github.com";

const getUserProfile = userName => {
    return `${Base_Url}/users/${userName}`;
};

export async function getCurrentUserInfo(userName = 'NaviMarella') {
    let url = getUserProfile(userName);
    const response = await fetch(url);
    let userInfo = await response.json();
    return userInfo;
};

export async function getStarReposInfo(userName = 'NaviMarella') {
    let url = `${getUserProfile(userName)}/starred`;
    const response = await fetch(url);
    let data = await response.json();
    return data;
};