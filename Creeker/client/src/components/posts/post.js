import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
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
