import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'

const UserProfile = ({ ProfileObject }) => {
  return (
    <>
      <article style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Card
            body
            inverse
            style={{
              marginTop: '1.5rem',
              backgroundColor: '#587D71',
            }}
          >
            <CardBody>
              <CardTitle tag="h5">{ProfileObject.userName}</CardTitle>
              <CardSubtitle
                style={{ color: '#EEFBF5' }}
                className="mb-2"
                tag="h6"
              >
                {ProfileObject.userType.name}
              </CardSubtitle>
              <CardText
                style={{ color: '#EEFBF5' }}
                className="mb-2"
                tag="h6"
              >
                {ProfileObject.fullName}
              </CardText>
              <CardText
                style={{ color: '#EEFBF5' }}
                className="mb-2"
                tag="h6"
              >
                {ProfileObject.email}
              </CardText>
              <CardText
                style={{ color: '#EEFBF5' }}
                className="mb-2"
                tag="h6"
              >
                {ProfileObject.createDateTime}
              </CardText>
              <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/user/edit/${ProfileObject.id}`}><FaRegEdit/></CardLink>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}
export default UserProfile
