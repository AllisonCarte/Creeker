import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { deletePostTag, getPostTagsByPTId } from '../../../modules/PostTagManager'
const PostTagDelete = () => {
  const [PT, setPT] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getPostTagsByPTId(id).then((c) => {
      setPT(c)
      
    })
  }, [])
console.log(PT)
  const handleDelete = () => {
    debugger
    deletePostTag(id).then((e) => {
      navigate(`/posts`)
    })
  }
  console.log(id)
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
            <CardTitle style={{ color: '#EEFBF5' }} tag="h3">
              Are you sure you want to remove this from your post?
            </CardTitle>
            <CardSubtitle>
                <br></br>
              {/* <h4 style={{ color: '#EEFBF5' }}>{tags.name}</h4> */}
            </CardSubtitle>
            <CardBody>
              <Button
                style={{backgroundColor: "#445F58", color: "#EEFBF5"}}
                onClick={(e) => {
                  handleDelete()
                }}
              >
                <FaCheck/>
              </Button>
              <Button
                style={{backgroundColor: "#445F58", color: "#EEFBF5"}}
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

export default PostTagDelete