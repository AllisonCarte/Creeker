import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Hello from "../Hello";
import About from "../Home/About";
import Contact from "../Home/Contact";
import UserDetails from "../users/userDetails";
import UserList from "../users/userList";
export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/user/:id" element={<UserDetails/>}/>
      {/* <Route path="/user/edit/:id" element={<UserProfileEdit/>}/> */}

      </Routes>
  );

}