import React from 'react'
import { FaRegEdit, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle } from 'reactstrap'
import './users.css'

// Still need to add images back to the return after I figure out why they cause 10000 GET requests

const User = ({ UserObject }) => {
  {
    /* <div className='box'>
  <Card
    body
    inverse
    style={{
    //   marginTop: "1.5rem",
      backgroundColor: "#587D71",
    //   width: '18rem',
    // minHeight: "100%"
    
    }}
    >
    <CardBody>
      <CardTitle tag="h5">
        <Link style={{color: "#EEFBF5"}}  to={`/user/${UserObject.id}`}>{UserObject.userName}</Link>
      </CardTitle>
      <CardSubtitle  tag="h6">
        {UserObject.fullName}
        <br></br>
        {UserObject.userType.name}
      </CardSubtitle>
      <CardLink style={{color: "#EEFBF5"}} href={`/user/usertype/edit/${UserObject.id}`}><FaRegEdit/></CardLink>
    </CardBody>
  </Card>
</div> */
  }

    return (
      <>
    <li>
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
            <p class="tagCard__description">
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
      </li>
      
    </>

  )

}

export default User
