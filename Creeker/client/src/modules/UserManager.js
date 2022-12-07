import React from "react";

const baseUrl = '/api/User';

export const getAllUsers = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};
