import React, { useState, useEffect } from 'react'
import { deleteTag, getById } from '../../modules/TagManager'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'
const TagDelete = () => {
  const [tags, setTags] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getById(id).then((c) => {
      setTags(c)
    })
  }, [])

  const handleDelete = (id) => {
    deleteTag(tags.id).then((e) => {
      navigate(`/tags`)
    })
  }

  const handleCancel = () => {
    navigate(`/tags`)
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
              backgroundColor: '#587D71',
              width: '20rem',
            }}
          >
            <CardBody>
            <CardTitle style={{ color: 'Black' }} tag="h3">
              Are you sure you want to delete {tags.name}?
            </CardTitle>
              <Button
                style={{backgroundColor: "transparent", color: "black"}}
                onClick={(e) => {
                  handleDelete()
                }}
              >
                Confirm
              </Button>
              <Button
                style={{backgroundColor: "transparent", color: "black", marginLeft: "10px"}}
                onClick={(e) => {
                  handleCancel()
                }}
              >
                Cancel
              </Button>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default TagDelete
