import React, { useEffect, useState } from 'react'
import { getAllApprovedPosts } from '../../modules/PostManager'
import Post from './post'
import "./posts.css"
import Pagination from '../pagination'
const ApprovedPostList = () => {
  const [Approved, setApproved] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(3)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = Approved.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(Approved.length / recordsPerPage)


  const getApproved = () => {
    getAllApprovedPosts().then((a) => setApproved(a))
  }

  useEffect(() => {
    getApproved()
  }, [])

  return (
    <>
       <div id='postcontainerid' class="container">

      {/* <ul className='taco'> */}
        {currentRecords.map((u) => (
          <Post key={u.id} PostObject={u} Approved={currentRecords} />
          ))}
       {/* </ul> */}
        </div>
       <Pagination nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default ApprovedPostList
