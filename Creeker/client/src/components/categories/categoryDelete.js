import React, { useState, useEffect } from 'react'
import { deleteCategory, getById } from '../../modules/CategoryManager'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'
const CategoryDelete = () => {
  const [category, setCategory] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getById(id).then((c) => {
      setCategory(c)
    })
  }, [])

  const handleDelete = (id) => {
    deleteCategory(category.id).then((e) => {
      navigate(`/categories`)
    })
  }

  const handleCancel = () => {
    navigate(`/categories`)
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
              width: "20rem"
            }}
          >
            <CardBody>
            <CardTitle style={{ color: 'black' }} tag="h3">
              Are you sure you want to delete this category?
            </CardTitle>
            <CardSubtitle>
                <br></br>
              <h4 style={{ color: 'black' }}>{category.name}</h4>
            </CardSubtitle>
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

export default CategoryDelete
