import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const Post = ({ PostObject }) => {
  return (
    <>
    <article style={{display: "flex", justifyContent: "center"}}>
      <div>
        <Card
          body
          color="success"
          inverse
          style={{
              width: '18rem',
            }}
            >
          <CardBody>
            <CardTitle tag="h5">{PostObject.title}</CardTitle>
            <CardSubtitle>Posted by: {PostObject?.user?.userName}</CardSubtitle>
            <CardText>{PostObject.content}</CardText>
          </CardBody>
        </Card>
      </div>
            </article>
    </>
  )
}

export default Post
