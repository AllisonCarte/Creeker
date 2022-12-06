const baseUrl = '/api/Post';
const apiUrl = "https://localhost:5001";

export const getAllApprovedPosts = () => {
    return fetch(`${apiUrl}${baseUrl}`)
    .then((response) => response.json())
};