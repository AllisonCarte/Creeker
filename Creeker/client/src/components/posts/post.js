import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaRegTrashAlt, FaTag } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'
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

const Post = ({ PostObject }) => {
  const [tag, setTags] = useState()
  const { id } = useParams
  const navigate = useNavigate()
  useEffect(() => {
    getAllTags(id).then(setTags)
  })

 

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
              width: '18rem',
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
              <CardLink
                style={{ color: '#EEFBF5', textDecoration: 'none' }}
                href={`/posts/${PostObject.id}/tags`}
              >
                <FaTag />
              </CardLink>
              <p></p>
                {' '}
                {PostObject.tags.map((t) => (
                  <Button id="postTagButton">{t.name}</Button>
                ))}{' '}
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default Post
