import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../modules/UserManager'
import User from './user'
import "./users.css"

const UserList = () => {
  const [Users, setUsers] = useState([])

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
          {Users.map((u) => (
            <User key={u.id} UserObject={u} />
          ))}
        </div>
      </div>
    </>
  )
}
export default UserList
