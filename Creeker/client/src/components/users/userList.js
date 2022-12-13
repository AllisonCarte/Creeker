import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../modules/UserManager'
import User from './user'
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
      {Users.map((u) => (
        <User key={u.id} UserObject={u}/>
      ))}
    </>
  )
}
export default UserList
