import React from 'react'
import { getById, editTag } from '../../modules/TagManager'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardTitle, Form, Input } from 'reactstrap'

const TagEdit = () => {
  const [Tag, setTag] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getById(id)
      .then((c) => {
        setTag(c)
      })
      .then(console.log(Tag))
  }, [])

  console.log(Tag)

  const Edit = () => {
    const newTag = {
      name: Tag.name,
      id: Tag.id,
    }
    console.log(newTag)
    editTag(newTag).then((e) => {
      navigate('/tags')
    })
  }
  const Cancel = () => {
    navigate('/tags')
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
            <CardTitle style={{ color: 'black' }} tag="h3">
              Edit Tag
            </CardTitle>
                <Input
                  style={{ marginBottom: '10px'}}
                  type="text"
                  placeholder={Tag.name}
                  onChange={(e) => {
                    const copy = { ...Tag }
                    copy.name = e.target.value
                    setTag(copy)
                  }}
                />
                <Button
                  style={{ backgroundColor: 'transparent', color: 'black' }}
                  onClick={(e) => {
                    Edit()
                  }}
                >
                  Save
                </Button>
                <Button
                  style={{ backgroundColor: 'transparent', color: 'black', marginLeft: "10px" }}
                  onClick={(e) => {
                    Cancel()
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

export default TagEdit
