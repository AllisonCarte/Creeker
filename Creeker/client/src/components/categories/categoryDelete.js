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
              marginTop: '1.5rem',
              backgroundColor: '#587D71',
              width: '18rem',
            }}
          >
            <CardTitle style={{ color: '#EEFBF5' }} tag="h3">
              Are you sure you want to delete this category?
            </CardTitle>
            <CardSubtitle>
                <br></br>
              <h4 style={{ color: '#EEFBF5' }}>{category.name}</h4>
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

export default CategoryDelete
