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
            <CardTitle style={{color: "#EEFBF5"}} tag="h3">Create Category</CardTitle>
            <CardBody>
              <Form>
                  <Input
                    style={{ marginBottom: '10px', backgroundColor: "#EEFBF5"  }}
                    type="text"
                    placeholder="Name"
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
              </Form>
              <Button style={{backgroundColor: "#445F58", color: "#EEFBF5"}} onClick={saveCategory}>Save</Button>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default CategoryForm
