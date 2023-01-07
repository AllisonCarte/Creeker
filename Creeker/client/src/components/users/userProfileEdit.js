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
  const localUser = localStorage.getItem('user')
  const userObject = JSON.parse(localUser)
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
    if (userObject.userTypeId === 1) {

      editUser(updatedUser).then((e) => {
        navigate(`/user/me`)
        
      })
    } else {
      editUser(updatedUser).then((e) => {
        navigate(`/users`)
      })
    }
  }
  
  const Cancel = () => {
    if (userObject.userTypeId === 1) {
      navigate(`/user/me`)
    } else {
      navigate(`/users`)
    }
    
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
            <CardBody>
            <CardTitle style={{ color: 'black' }} tag="h3">
              Edit User Profile
            </CardTitle>
                <Label style={{ color: 'black' }} htmlFor="post">User</Label>
                <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  placeholder={User.firstName}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.firstName = e.target.value
                    setUser(copy)
                  }}
                />
                <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  placeholder={User.lastName}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.lastName = e.target.value
                    setUser(copy)
                  }}
                />
                 <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  placeholder={User.email}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.email = e.target.value
                    setUser(copy)
                  }}
                />
                 <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  placeholder={User.imageLocation}
                  onChange={(e) => {
                    const copy = { ...User }
                    copy.imageLocation = e.target.value
                    setUser(copy)
                  }}
                />
                <Button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: 'transparent',
                    color: 'black',
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
                    backgroundColor: 'transparent',
                    color: 'black',
                    marginLeft: "10px"
                  }}
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

export default UserEdit
