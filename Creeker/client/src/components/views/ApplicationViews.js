import React from "react";
import { Route, Routes} from "react-router-dom";
import { Register } from "../auth/register";
import CategoryForm from "../categories/categoryForm";
import CategoryList from "../categories/categoryList";
import Hello from "../Hello";
import About from "../Home/About";
import Contact from "../Home/Contact";
import ApprovedPostList from "../posts/postList";
import UnapprovedPostList from "../posts/postQuarantine";
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
      <Route path="/posts" element={<ApprovedPostList/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/quarantine" element={<UnapprovedPostList/>}/>
      
      <Route path="/categories" element={<CategoryList/>}/>
      <Route path="/categories/create" element={<CategoryForm/>}/>
      
      
      </Routes>
  );

}