
const Base_Url = "https://api.github.com";

const getUserProfile = userName => {
    return `${Base_Url}/users/${userName}`;
};


export const getCurrentUserInfo = async (userName = 'NaviMarella') => {
    let url = getUserProfile(userName);
    const response = await fetch(url);
    let userInfo = await response.json();
    return userInfo;
};