





































const baseUrl = '/api/Category';
const apiUrl = "https://localhost:5001";

export const addCategory = (category) => {
    return fetch(`${apiUrl}${baseUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category),
        })
}

export const getCategories = () => {
    return fetch(`${apiUrl}${baseUrl}`)
    .then((response) => response.json())
};



