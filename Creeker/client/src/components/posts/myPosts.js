import React, { useEffect, useState } from 'react'
import { getAllApprovedPosts } from '../../modules/PostManager'
import Post from './post'
import './posts.css'
const MyApprovedPosts = () => {
  const [Approved, setApproved] = useState([])
  const [FilteredApproved, setFilteredApproved] = useState([])

  const localUser = localStorage.getItem('user')
  const userObject = JSON.parse(localUser)

  const getApproved = () => {
    getAllApprovedPosts().then((a) => setApproved(a))
    const mine = Approved.filter((a) => a.user.Id === userObject.Id)
    setFilteredApproved(mine)
  }

  useEffect(() => {
    getApproved()
  }, [])
  return (
    <>
        <span style={{
      position: "fixed",
      left: 0,
      right: 0,
      top: "45%",
      marginTop: "-0.5rem",
      textAlign: "center",
    }}>This page has yet to be implemented.</span>
      <span style={{
      position: "fixed",
      left: 0,
      right: 0,
      top: "50%",
      marginTop: "-0.5rem",
      textAlign: "center",
    }}>But hey, here's a fun fact: all post content in this app demo was written by ChatGPT :)</span>
    </>
  )
}

export default MyApprovedPosts
