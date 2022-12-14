





































const baseUrl = '/api/Category';
const apiUrl = "https://localhost:5001";

export const deleteCategory = (id) => {
    return fetch(`${apiUrl}${baseUrl}/${id}`, {
      method: "DELETE"
    })
  }

export const getById = (id) => {
    return fetch(`${apiUrl}${baseUrl}/${id}`)
    .then((res) => res.json());
}

export const editCategory = (category) => {
    return fetch(`${apiUrl}${baseUrl}/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
    .then(getCategories)
}


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



