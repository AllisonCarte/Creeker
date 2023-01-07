import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import { addCategory } from '../../modules/CategoryManager'

const CategoryForm = () => {
  // initialize state variables
  const [name, setName] = useState({
    name: '',
  })
  const navigate = useNavigate()

  const saveCategory = () => {
    const newCategory = {
      name: name,
    }
    addCategory(newCategory).then((c) => {
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
            }}
          >
            <CardBody>
            <CardTitle style={{color: "black"}} tag="h3">Create Category</CardTitle>
              <Form>
                  <Input
                    style={{ marginBottom: '10px'  }}
                    type="text"
                    placeholder="Name"
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
              </Form>
              <Button style={{backgroundColor: "transparent", color: "black"}} onClick={saveCategory}>Save</Button>
              <Button style={{backgroundColor: "transparent", color: "black", marginLeft: "10px"}} onClick={Cancel}>Cancel</Button>

            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default CategoryForm
