import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardTitle, Form, Input } from 'reactstrap'
import { addTag } from '../../modules/TagManager'

const TagForm = () => {
  // initialize state variables
  const [name, setName] = useState({
    name: '',
  })
  const navigate = useNavigate()

  const saveTag = () => {
    const newTag = {
      name: name,
    }
    addTag(newTag).then((c) => {
      navigate('/tags')
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
            <CardTitle style={{ color: '#EEFBF5' }} tag="h3">
              Create Tag
            </CardTitle>
            <CardBody>
              <Form>
                <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </Form>
              <Button
                style={{ backgroundColor: '#445F58', color: '#EEFBF5' }}
                onClick={saveTag}
              >
                Save
              </Button>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default TagForm
