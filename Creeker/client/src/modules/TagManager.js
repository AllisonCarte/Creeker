const baseUrl = '/api/Tag';
const apiUrl = "https://localhost:5001";


export const getAllTags = () => {
    return fetch(`${apiUrl}${baseUrl}`)
    .then((response) => response.json())
};

export const getById = (id) => {
    return fetch(`${apiUrl}${baseUrl}/${id}`)
    .then((res) => res.json());
}

export const addTag = (tag) => {
    return fetch(`${apiUrl}${baseUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag),
        })
        
}

export const editTag = (tag) => {
    return fetch(`${apiUrl}${baseUrl}/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
    .then(getAllTags)
}

export const deleteTag = (id) => {
    return fetch(`${apiUrl}${baseUrl}/${id}`, {
      method: "DELETE"
    })
  }