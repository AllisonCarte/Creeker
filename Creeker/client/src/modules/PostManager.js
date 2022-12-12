const baseUrl = '/api/Post';
const apiUrl = "https://localhost:5001";

export const getAllApprovedPosts = () => {
    return fetch(`${apiUrl}${baseUrl}`)
    .then((response) => response.json())
};
















export const getAllUnapprovedPosts = () => {
    return fetch(`${apiUrl}${baseUrl}/Unapproved`)
    .then((response) => response.json())
};