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
  const Cancel = () => {
    navigate('/tags')
  }
  return (
    <>
      {/* <div class="catCard card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">{tagObject.name}</h2>
      <p class="card__apply">
        <a class="card__link" href={`/tags/edit/${tagObject.id}`}> <i class="card_icon"><FaRegEdit/></i></a>
        <a class="card__link" href={`/tags/delete/${tagObject.id}`}> <i class="card_icon"><FaTrashAlt/></i></a>

      </p>
    </div> */}
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
              <CardTitle style={{ color: 'black' }} tag="h3">
                Create Tag
              </CardTitle>
              <Form>
                <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </Form>
              <Button
                style={{ backgroundColor: 'transparent', color: 'black' }}
                onClick={saveTag}
              >
                Save
              </Button>
              <Button
                style={{ backgroundColor: 'transparent', color: 'black', marginLeft: "10px" }}
                onClick={Cancel}
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

export default TagForm
