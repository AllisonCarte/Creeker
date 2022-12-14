import React, { useState, useEffect } from 'react'
import { deletePost, getPostById } from '../../modules/PostManager'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'

const PostDelete = () => {
  const [post, setPost] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getPostById(id).then((c) => {
      setPost(c)
    })
  }, [])

  const handleDelete = (id) => {
      deletePost(post.id).then((e) => {
        navigate(`/posts`)
      })
   
  }

  const handleCancel = () => {
    navigate(`/posts`)
  }

  return (
    <>
      <article style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Card
            body
            inverse
            className="text-center"
            style={{
              marginTop: '1.5rem',
              backgroundColor: '#587D71',
              width: '18rem',
            }}
          >
            <CardTitle style={{ color: 'black' }} tag="h3">
              Are you sure you want to delete this post?
            </CardTitle>
            <CardSubtitle>
                <br></br>
              <h4 style={{ color: 'black' }}>{post.title}</h4>
            </CardSubtitle>
            <CardBody>
              <Button
                style={{backgroundColor: "transparent", color: 'black'}}
                onClick={(e) => {
                  handleDelete()
                }}
              >
                <FaCheck/>
              </Button>

              <Button
                style={{backgroundColor: "transparent", color: 'black', marginLeft: "10px"}}
                onClick={(e) => {
                  handleCancel()
                }}
              >
                <FaTimes/>
              </Button>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default PostDelete
