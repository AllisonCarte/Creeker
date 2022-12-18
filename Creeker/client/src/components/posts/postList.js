import React, { useEffect, useState } from 'react'
import { getAllApprovedPosts } from '../../modules/PostManager'
import Post from './post'
import Canvas from './postOffcanvas'
import "./posts.css"
const ApprovedPostList = () => {
  const [Approved, setApproved] = useState([])

  const getApproved = () => {
    getAllApprovedPosts().then((a) => setApproved(a))
  }

  useEffect(() => {
    getApproved()
  }, [])

  return (
    <>
      <Canvas/>
      <ul className='taco'>
        {Approved.map((u) => (
          <Post key={u.id} PostObject={u} />
          ))}
       </ul>
    </>
  )
}

export default ApprovedPostList
