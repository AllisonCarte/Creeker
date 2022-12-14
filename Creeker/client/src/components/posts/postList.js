import React, { useEffect, useState } from 'react'
import { getAllApprovedPosts } from '../../modules/PostManager'
import Post from './post'
import Canvas from './postOffcanvas'

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
      <div>
        {Approved.map((u) => (
          <Post key={u.id} PostObject={u} />
        ))}
      </div>
    </>
  )
}

export default ApprovedPostList
