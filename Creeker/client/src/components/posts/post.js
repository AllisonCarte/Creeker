import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import { getAllTags } from '../../modules/TagManager'
import './postTag.css'
import "./posts.css"
const Post = ({ PostObject }) => {
  const [tag, setTags] = useState()
  const { id } = useParams

  useEffect(() => {
    getAllTags(id).then(setTags)
  })

  {/* <div className='box'>
    <Card
      body
      inverse
      style={{
        backgroundColor: '#587D71',
      }}
    >
      <CardBody>
        <CardTitle style={{ color: '#EEFBF5' }} tag="h5">
          {PostObject.title}
        </CardTitle>
        <CardSubtitle>
          Posted by:{' '}
          <Link
            style={{ color: '#EEFBF5' }}
            to={`/user/${PostObject.userId}`}
          >
            {PostObject?.user?.userName}
          </Link>
        </CardSubtitle>
        <CardText style={{ color: '#EEFBF5' }}>
          {PostObject.content}
        </CardText>
        <CardSubtitle>
        <CardLink
          style={{ color: '#EEFBF5', textDecoration: 'none' }}
          href={`/posts/edit/${PostObject.id}`}
        >
          <FaRegEdit />
        </CardLink>
        <CardLink
          style={{ color: '#EEFBF5', textDecoration: 'none' }}
          href={`/posts/delete/${PostObject.id}`}
        >
          <FaRegTrashAlt />
        </CardLink>
        <p></p>
        
          {PostObject.tags.map((t) => (
            <Button id="postTagButton">{t.name}</Button>
          ))}
        </CardSubtitle>
      </CardBody>
    </Card>
  </div> */}
  return (
    <>
      <li>
     <a class='spicypotatotaco' href="#">
      <h2> {PostObject.title}</h2>
      <p class='enchilada'>{PostObject.content}</p>
    </a>
    </li>
    </>
  )
}

export default Post
