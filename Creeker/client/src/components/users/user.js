import React from 'react'
import {FaEnvelope, FaUser, FaUsers, FaUserTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './users.css'

// Still need to add images back to the return after I figure out why they cause 10000 GET requests

const User = ({ UserObject }) => {
  {/* <li>
      <a href="" class="tagCard">
        <img
          src={UserObject.imageLocation}
          class="tagCard__image"
          alt=""
        />
        <div class="tagCard__overlay">
          <div class="tagCard__header">
            <svg class="tagCard__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div class="tagCard__header-text">
            </div>
              <h3 class="tagCard__title">{UserObject.userName}</h3>
          </div>
          <p style={{color: "black"}} class="tagCard__description">
            {UserObject.fullName}
            <br></br>
            {UserObject.userType.name}
            <br></br>
            <CardLink
              style={{ color: 'black', textDecoration: 'none' }}
              href={`/user/edit/${UserObject.id}`}
            >
              <FaRegEdit />
            </CardLink>
          </p>
        </div>
      </a>
    </li> */}
    return (
      <>
     
  <div class="userscol userscard">
    <div class="usersimg-placeholder">
      <img src={UserObject.imageLocation}/>
    </div>
    <div>
      <h3 class="usersh3">{UserObject.userName}</h3>
      <p class="usersp"><i class="fa-solid fa-user"> <FaUser/> </i>{UserObject.fullName}</p>
      <p class="usersp"><i class="fa-solid fa-paper-plane"> <FaEnvelope/> </i> {UserObject.email}</p>
      <p class="usersp"><i class="fa-solid fa-location-dot"> <FaUsers/> </i>{UserObject.userType.name}
</p>
    </div>
  </div>


    </>

  )

}

export default User
