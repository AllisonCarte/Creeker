import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'

// Still need to add images back to the return after I figure out why they cause 10000 GET requests

const User = ({ UserObject }) => {
  return (
    <>
      <article style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Card
            body
            inverse
            style={{
              marginTop: "1.5rem",
            backgroundColor: "#587D71",
              width: '18rem',
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                <Link style={{color: "#EEFBF5"}} to={`/user/${UserObject.id}`}>{UserObject.userName}</Link>
              </CardTitle>
              <CardSubtitle style={{color: "#EEFBF5"}} className="mb-2" tag="h6">
                {UserObject.fullName}
                <br></br>
                {UserObject.userType.name}
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default User
