import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
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

  if (UserObject.userType.id == 1) {

    return (
      <>
      <figure class="snip0057 red hover">
        <figcaption>
          <h2>
            {UserObject.firstName} <span>{UserObject.lastName}</span>
          </h2>
          <p>
          {UserObject.userName}
          </p>
          <div class="icons">
          <a href={`/user/usertype/edit/${UserObject.id}`}>
            <i> <FaRegEdit/> </i>
          </a>
          </div>
        </figcaption>
        <div class="image">
        
          <img
            src="https://cdn.pixabay.com/photo/2021/11/19/15/21/christmas-6809682_960_720.png"
            alt="sample4"
          />
        </div>
        <div class="position"> {UserObject.userType.name}</div>
      </figure>
    </>
  )
} else if (UserObject.userType.id == 2) {
  return (
    <>
    <figure class="snip0057 red hover">
      <figcaption>
        <h2>
          {UserObject.firstName} <span>{UserObject.lastName}</span>
        </h2>
        <p>
        {UserObject.userName}
        </p>
        <div class="icons">
        <a href={`/user/usertype/edit/${UserObject.id}`}>
            <i> <FaRegEdit/> </i>
          </a>
        </div>
      </figcaption>
      <div class="image">
      
        <img
          src="https://cdn.pixabay.com/photo/2021/11/19/15/23/christmas-6809686_960_720.png"
        />
      </div>
      <div class="position"> {UserObject.userType.name}</div>
    </figure>
  </>
)
} else {
  return (
    <>
    <figure class="snip0057 red hover">
      <figcaption>
        <h2>
          {UserObject.firstName} <span>{UserObject.lastName}</span>
        </h2>
        <p>
        {UserObject.userName}
        </p>
        <div class="icons">
          <a href={`/user/usertype/edit/${UserObject.id}`}>
            <i> <FaRegEdit/> </i>
          </a>
        </div>
      </figcaption>
      <div class="image">
      
        <img
          src="https://cdn.pixabay.com/photo/2022/12/02/01/17/snow-7630050_960_720.png"
        />
      </div>
      <div class="position"> {UserObject.userType.name}</div>
    </figure>
  </>
  
    )
}
}
export default User
