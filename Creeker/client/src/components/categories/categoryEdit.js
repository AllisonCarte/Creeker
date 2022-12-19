import React from 'react'
import { getById, editCategory } from '../../modules/CategoryManager'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardTitle, Form, Input } from 'reactstrap'

const CategoryEdit = () => {
  const [Category, setCategory] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getById(id)
      .then((c) => {
        setCategory(c)
      })
      .then(console.log(Category))
  }, [])

  console.log(Category)

  const Edit = () => {
    const newCategory = {
      name: Category.name,
      id: Category.id,
    }
    console.log(newCategory)
    editCategory(newCategory).then((e) => {
      navigate('/categories')
    })
  }
  const Cancel = () => {
    navigate('/categories')
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
              Edit Category
            </CardTitle>
                <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={Category.name}
                  onChange={(e) => {
                    const copy = { ...Category }
                    copy.name = e.target.value
                    setCategory(copy)
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
                  style={{ backgroundColor: 'transparent', color: 'black', marginLeft: '10px'}}
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

export default CategoryEdit
