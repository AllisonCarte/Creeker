import React from "react";
import { Route, Routes} from "react-router-dom";
import { Register } from "../auth/register";
import CategoryDelete from "../categories/categoryDelete";
import CategoryEdit from "../categories/categoryEdit";
import CategoryForm from "../categories/categoryForm";
import CategoryList from "../categories/categoryList";
import Hello from "../Hello";
import About from "../Home/About";
import Contact from "../Home/Contact";
import MyApprovedPosts from "../posts/myPosts";
import PostDelete from "../posts/postDelete";
import PostEdit from "../posts/postEdit";
import PostForm from "../posts/postForm";
import ApprovedPostList from "../posts/postList";
import UnapprovedPostList from "../posts/postQuarantine";
import PostTagDelete from "../posts/PostTag/postTagDelete";
import { PostTags } from "../posts/PostTag/postTagList";
import TagDelete from "../tags/tagDelete";
import TagEdit from "../tags/tagEdit";
import TagForm from "../tags/tagForm";
import TagList from "../tags/tagList";
import PersonalProfile from "../users/personalProfile";
import UserDetails from "../users/userDetails";
import UserList from "../users/userList";
import UserEdit from "../users/userProfileEdit";
import EditUserType from "../users/userTypeEdit";
import WelcomeBack from "../Welcome";
export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<WelcomeBack />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/user/:id" element={<PersonalProfile/>}/>
      <Route path="/user/:id" element={<UserDetails/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/user/edit/:id" element={<UserEdit/>}/>
      <Route path="/user/usertype/edit/:id" element={<EditUserType/>}/>

     
      <Route path="/posts" element={<ApprovedPostList/>}/>
      <Route path="/posts/create" element={<PostForm/>}/>
      <Route path="/posts/edit/:id" element={<PostEdit/>}/>
      <Route path="/posts/delete/:id" element={<PostDelete/>}/>
      <Route path="/quarantine" element={<UnapprovedPostList/>}/>
      <Route path="/postTag/remove/:id" element={<PostTagDelete/>}/>
      <Route path ="/posts/:id/tags" element={<PostTags />} />
      <Route path="/posts/mine" element={<MyApprovedPosts/>}/>

      <Route path="/categories" element={<CategoryList/>}/>
      <Route path="/categories/create" element={<CategoryForm/>}/>
      <Route path="/categories/delete/:id" element={<CategoryDelete/>}/>
      <Route path="/categories/edit/:id" element={<CategoryEdit/>}/>

      <Route path="/tags" element={<TagList/>}/>
      <Route path="/tags/create" element={<TagForm/>}/>
      <Route path="/tags/delete/:id" element={<TagDelete/>}/>
      <Route path="/tags/edit/:id" element={<TagEdit/>}/>

      
      </Routes>
  );

}