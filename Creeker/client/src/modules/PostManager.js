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

export const addPost = (post) => {
    return fetch(`${apiUrl}${baseUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post),
        })
        
}

export const getPostById = (id) => {
    return fetch(`${apiUrl}${baseUrl}/${id}`)
    .then((res) => res.json());
}

export const editPost = (post) => {
    return fetch(`${apiUrl}${baseUrl}/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(getAllApprovedPosts)
    .then(getAllUnapprovedPosts)
}



export const deletePost = (id) => {
    return fetch(`${apiUrl}${baseUrl}/${id}`, {
      method: "DELETE"
    })
  }