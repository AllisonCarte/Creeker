import React, { useEffect, useState } from 'react'
import { getAllUsers} from '../../modules/UserManager'
import UserProfile from './profile'
import "./profile.css"
const PersonalProfile = () => {
  const [User, setUser] = useState([])
  const [filteredUser, setFilteredUser] = useState([])
  const localUser = localStorage.getItem('user')
  const userObject = JSON.parse(localUser)

  useEffect(() => {
    getAllUsers().then((u) => setUser(u))
    const me = User.filter((user) => user.id === userObject.id)
    setFilteredUser(me)
  }, [User])

  // Still need to add images back to the return after I figure out why they cause 10000 GET requests

  return <>
   <>
   <div className="app">
        <div className="grid">
      {filteredUser.map((u) => (
        <UserProfile key={u.id} ProfileObject={u} />
      ))}
    </div></div>
    </>
  
  </>
}
export default PersonalProfile
