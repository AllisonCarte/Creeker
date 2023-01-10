import React, { useEffect, useState } from 'react'
import { getAllUnapprovedPosts } from '../../modules/PostManager'
import Post from './post'
import Pagination from '../pagination'
import "./posts.css"
const UnapprovedPostList = () => {
  const [Unapproved, setUnapproved] = useState([])


const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(3)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = Unapproved.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(Unapproved.length / recordsPerPage)


  const getApproved = () => {
    getAllUnapprovedPosts().then((a) => setUnapproved(a))
  }

  useEffect(() => {
    getApproved()
  }, [])

  return (
    <>
       <div class="container">
      {/* <ul class="taco"> */}
        {currentRecords.map((u) => (
          <Post key={u.id} PostObject={u} Unapproved={currentRecords} />
          ))}
          {/* </ul> */}
          </div>
          <Pagination nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
          
    </>
  )
}

export default UnapprovedPostList
