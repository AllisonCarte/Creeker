






































const baseUrl = '/api/Category';
const apiUrl = "https://localhost:5001";
export const getCategories = () => {
    return fetch(`${apiUrl}${baseUrl}`)
    .then((response) => response.json())
};



