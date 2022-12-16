import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  Label,
} from 'reactstrap'
import { editUser, getSingleUser } from '../../modules/UserManager'


const UserEdit = () => {
  const [User, setUser] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getSingleUser(id).then((c) => {
      setUser(c)
    })
  }, [])


  const Edit = () => {
    const updatedUser = {
      id: User.id,
      userTypeId: User.userTypeId,
      userName: User.userName,
      firstName: User.firstName,
      lastName: User.lastName,
      email: User.email,
      password: User.password,
      createDateTime: User.createDateTime,
      isActive: User.isActive,
      imageLocation: User.imageLocation
    }
    console.log(updatedUser)
    editUser(updatedUser).then((e) => {
        navigate(`/user/me`)
      
    })
  }
  
  const Cancel = () => {
      navigate(`/user/me`)
    
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
              Edit Post
            </CardTitle>
            <CardBody>
              <Form>
                <Label htmlFor="post">User</Label>
                <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={User.firstName}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.firstName = e.target.value
                    setUser(copy)
                  }}
                />
                <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={User.lastName}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.lastName = e.target.value
                    setUser(copy)
                  }}
                />
                 <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={User.email}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.email = e.target.value
                    setUser(copy)
                  }}
                />
                <Button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#445F58',
                    color: '#EEFBF5',
                  }}
                  onClick={(e) => {
                    Edit()
                  }}
                >
                  Save
                </Button>
                <Button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#445F58',
                    color: '#EEFBF5',
                  }}
                  onClick={(e) => {
                    Cancel()
                  }}
                >
                  Cancel
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default UserEdit
