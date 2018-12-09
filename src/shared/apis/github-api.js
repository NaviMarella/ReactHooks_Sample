
const Base_Url = "https://api.github.com";

const getUserProfile = userName => {
    let name = userName || 'NaviMarella';
    return `${Base_Url}/users/${name}`;
};

export async function getCurrentUserInfo(userName) {
    // let url = getUserProfile(userName);
    // const response = await fetch(url);
    // let data = await response.json();
    let data = {
        "login": "NaviMarella",
        "id": 28264857,
        "node_id": "MDQ6VXNlcjI4MjY0ODU3",
        "avatar_url": "https://avatars3.githubusercontent.com/u/28264857?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/NaviMarella",
        "html_url": "https://github.com/NaviMarella",
        "followers_url": "https://api.github.com/users/NaviMarella/followers",
        "following_url": "https://api.github.com/users/NaviMarella/following{/other_user}",
        "gists_url": "https://api.github.com/users/NaviMarella/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/NaviMarella/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/NaviMarella/subscriptions",
        "organizations_url": "https://api.github.com/users/NaviMarella/orgs",
        "repos_url": "https://api.github.com/users/NaviMarella/repos",
        "events_url": "https://api.github.com/users/NaviMarella/events{/privacy}",
        "received_events_url": "https://api.github.com/users/NaviMarella/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Navi Marella",
        "company": "Pearson Vue",
        "blog": "",
        "location": "American Fork, Utah",
        "email": null,
        "hireable": true,
        "bio": "I ❤️ building useful tools, solutions to solve real-time problems. \r\nPassionate about coding and design.",
        "public_repos": 59,
        "public_gists": 2,
        "followers": 4,
        "following": 4,
        "created_at": "2017-05-01T15:54:50Z",
        "updated_at": "2018-12-01T02:06:58Z"
    };
    return data;
};

export async function getStarReposInfo(userName) {
     let url = `${getUserProfile(userName)}/starred`;
     const response = await fetch(url);
     let data = await response.json();
     return data;
};

export async function getReposInfo(userName) {
    let url = `${getUserProfile(userName)}/repos`;
    const response = await fetch(url);
    let data = await response.json();
    return data;
};

export async function getUserFollowerInfo(userName) {
     let url = `${getUserProfile(userName)}/followers`;
     const response = await fetch(url);
     let data = await response.json();
     return data;
}

export async function getUserFollowingInfo(userName) {
    let url = `${getUserProfile(userName)}/following`;
    const response = await fetch(url);
    let data = await response.json();
    return data;
}