import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../auth/login";
import { Register } from "../auth/register";
import Hello from "../Hello";
import ApprovedPostList from "../posts/postList";


export default function Authorize({ setIsLoggedIn }) {

   return (
      <Routes>
         <Route path="*" element={<Hello/>} />
         <Route path="/posts" element={<ApprovedPostList/>} />
         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="/register" element={<Register/>} />
      </Routes>
   );

}