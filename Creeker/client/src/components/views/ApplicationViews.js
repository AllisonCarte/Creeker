import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../auth/login";
import Hello from "../Hello";
import About from "../Home/About";
import Contact from "../Home/Contact";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
  );

}