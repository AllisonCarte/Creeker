import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle } from 'reactstrap'
import "./users.css"

// Still need to add images back to the return after I figure out why they cause 10000 GET requests

const User = ({ UserObject }) => {


    return (
      <>
      
      <div className='app'>
        <div className='grid'>
          <div className='box'>
          <Card
            body
            inverse
            // style={{
            //   marginTop: "1.5rem",
            //   backgroundColor: "#587D71",
            //   width: '18rem',
            // style={{color: "#EEFBF5"}}
            // }}
            >
            <CardBody>
              <CardTitle tag="h5">
                <Link  to={`/user/${UserObject.id}`}>{UserObject.userName}</Link>
              </CardTitle>
              <CardSubtitle  tag="h6">
                {UserObject.fullName}
                <br></br>
                {UserObject.userType.name}
              </CardSubtitle>
              <CardLink href={`/user/usertype/edit/${UserObject.id}`}><FaRegEdit/></CardLink>
            </CardBody>
          </Card>
        </div>
        </div>
        /</div>
    </>
  )
}


export default User
