import React, { useEffect, useState } from 'react'
import { getAllUnapprovedPosts } from '../../modules/PostManager'
import Post from './post'

const UnapprovedPostList = () => {
  const [Unapproved, setUnapproved] = useState([])

  const getApproved = () => {
    getAllUnapprovedPosts().then((a) => setUnapproved(a))
  }

  useEffect(() => {
    getApproved()
  }, [])

  return (
    <>
      <div>
        {Unapproved.map((u) => (
          <Post key={u.id} PostObject={u} />
        ))}
      </div>
    </>
  )
}

export default UnapprovedPostList
