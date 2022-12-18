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
      <ul class="taco">
        {Unapproved.map((u) => (
          <Post key={u.id} PostObject={u} />
          ))}
          </ul>
    </>
  )
}

export default UnapprovedPostList
