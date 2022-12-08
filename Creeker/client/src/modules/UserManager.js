import React from "react";

const baseUrl = '/api/User';
const apiUrl = "https://localhost:5001";
//https://localhost:5001/api/User
export const getAllUsers = () => {
  return fetch(`${apiUrl}${baseUrl}`)
    .then((res) => res.json())
};

// https://localhost:5001/api/User/GetByLogin?email=AMistake%40email.com&password=AmS0213
  export const login = (userObject) => {
    return fetch(`${apiUrl}${baseUrl}/GetByLogin?email=${userObject.email}&password=${userObject.password}`)
    .then((r) => r.json())
      .then((user) => {
        if(user.id){
          localStorage.setItem("user", JSON.stringify(user));
          return user
        }
        else{
          return undefined
        }
      });
  };

  export const logout = () => {
        localStorage.clear()
  };
  
  export const getSingleUser = (id) => {
    return fetch(`https://localhost:5001/api/User/${id}`)// http GET request or `/api/userProfile/${id}`
      .then((res) => res.json())
  };    

  export const getCurrentUser = () => {
    const currentUser = localStorage.getItem("user");

    return JSON.parse(currentUser);  //JSON.parse()  the local user object coming back from API to use properties of that object
  };
