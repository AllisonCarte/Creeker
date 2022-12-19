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
import "./profile.css"
const UserProfile = ({ ProfileObject }) => {
  return (
    <>
      {/* <article style={{ display: 'flex', justifyContent: 'center' }}>
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
      </article> */}

    {/* <figure class="snip0057 red hover">
      <figcaption>
        <h2>
          {ProfileObject.firstName} <span>{ProfileObject.lastName}</span>
        </h2>
        <p>
        {ProfileObject.userName}
        </p>
        <div class="icons">
          <a href={`/user/edit/${ProfileObject.id}`}>
            <i> <FaRegEdit/> </i>
          </a>
        </div>
      </figcaption>
      <div class="image">
      
        <img
          src="https://cdn.pixabay.com/photo/2022/12/02/01/17/snow-7630050_960_720.png"
        />
      </div>
      <div class="position"> {ProfileObject.userType.name}</div>
    </figure>
   */}

<div id="gradient"></div>
<div id="card">
  <img src={ProfileObject.imageLocation}/>
  <h2>{ProfileObject.fullName}</h2>
  <p>{ProfileObject.userType.name}</p>
  <p>{ProfileObject.userName} </p>
  <p>{ProfileObject.email}</p>
  <p class="left bottom">{ProfileObject.createDateTime}</p>
</div>
    </>
  )
}
export default UserProfile
