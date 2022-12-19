import React, { useEffect, useState } from 'react'
import { getAllApprovedPosts } from '../../modules/PostManager'
import Post from './post'
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
       <div class="container">

      {/* <ul className='taco'> */}
        {Approved.map((u) => (
          <Post key={u.id} PostObject={u} />
          ))}
       {/* </ul> */}
        </div>
    </>
  )
}

export default ApprovedPostList
