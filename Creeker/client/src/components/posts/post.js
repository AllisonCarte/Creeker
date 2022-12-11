import React from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const Post = ({ PostObject }) => {
  return (
    <>
    <article style={{display: "flex", justifyContent: "center"}}>
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
            <CardTitle style={{color: "#EEFBF5"}} tag="h5">{PostObject.title}</CardTitle>
            <CardSubtitle>Posted by: <Link style={{color: "#EEFBF5"}} to={`/user/${PostObject.userId}`}>{PostObject?.user?.userName}</Link></CardSubtitle>
            <CardText style={{color: "#EEFBF5"}}>{PostObject.content}</CardText>
            <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/posts/edit/${PostObject.id}`}><FaRegEdit/></CardLink>
              <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/posts/delete/${PostObject.id}`}><FaRegTrashAlt/></CardLink>
          </CardBody>
        </Card>
      </div>
            </article>
    </>
  )
}

export default Post
