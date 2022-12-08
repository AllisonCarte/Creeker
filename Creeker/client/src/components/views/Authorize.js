import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../auth/login";
import { Register } from "../auth/register";


export default function Authorize({ setIsLoggedIn }) {

   return (
      <Routes>
         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="*" element={<Register/>} />
      </Routes>
   );

}