import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllUsers } from '../../modules/UserManager'
import Pagination from '../pagination'
import User from './user'
import './users.css'

const UserList = () => {
  const [Users, setUsers] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(6)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = Users.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(Users.length / recordsPerPage)
 
  const getUsers = () => {
    getAllUsers().then((u) => setUsers(u))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className="app">
        <div className="grid">
          {currentRecords.map((u) => (
            <User key={u.id} UserObject={u} Users={currentRecords} />
          ))}
        </div>
      </div>
          <Pagination nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
    </>
  )
}
export default UserList
