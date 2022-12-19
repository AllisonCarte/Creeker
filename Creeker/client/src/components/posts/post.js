import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa'
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
import './posts.css'
const Post = ({ PostObject }) => {
  const [tag, setTags] = useState()
  const { id } = useParams
  useEffect(() => {
    getAllTags(id).then(setTags)
  }, [])

  {
    /* <div className='box'>
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
  </div> */
  }
  {
    /* <li>
 <a class='spicypotatotaco' href="#">
  <h2> {PostObject.title}</h2>
  <p class='enchilada'>{PostObject.content}</p>
</a>
</li> */
  }
  return (
    <>
      <div class="card">
        <div class="card__header">
          <img
            id="cardImg"
            src={PostObject.imageLocation}
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="card__body">
          {PostObject.tags.map((t) => (
            <span class="tag tag-blue"> {t.name}</span>
          ))}
          <h4> {PostObject.title}</h4>
          <p>
          {PostObject.content} 
          </p>
        </div>
        <div class="card__footer">
          <div class="user">
            <div class="user__info">
              <h5>{PostObject?.user?.userName}</h5>
              <small>
                <Link style={{color: "black"}} to={`/posts/edit/${PostObject.id}`}>
                  <FaRegEdit />
                </Link>
                <Link style={{color: "black"}} to={`/posts/delete/${PostObject.id}`}>
                  <FaTrashAlt />
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
