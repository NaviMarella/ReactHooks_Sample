export const Base_Url = "https://api.github.com";

export const getUserProfile = userName => {
  return `${Base_Url}/users/${userName}`;
};
