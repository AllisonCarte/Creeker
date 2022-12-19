import React from 'react'
import { getCategories } from '../../modules/CategoryManager'
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
import { editPost, getPostById } from '../../modules/PostManager'

const PostEdit = () => {
  const [Post, setPost] = useState({})
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getPostById(id).then((c) => {
      setPost(c)
    })
  }, [])

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  const Edit = () => {
    const updatedPost = {
      id: Post.id,
      title: Post.title,
      content: Post.content,
      imageLocation: Post.imageLocation,
      userId: Post.userId,
      categoryId: Post.categoryId,
      publishDateTime: Post.publishDateTime,
      createDateTime: Post.createDateTime,
      isApproved: Post.isApproved,
    }
    console.log(updatedPost)
    if (!updatedPost.imageLocation == ""){
      editPost(updatedPost).then((e) => {
        if (Post.isApproved) navigate('/posts')
        else {
          navigate(`/quarantine`)
        }
      })
    } else {
      alert("Post requires an image")
    }
  }
  
  const Cancel = () => {
    if (Post.isApproved) navigate('/posts')
    else {
      navigate(`/quarantine`)
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
            <CardTitle style={{ color: '#EEFBF5' }} tag="h3">
              Edit Post
            </CardTitle>
            <CardBody>
              <Form>
                <Label htmlFor="post">Post</Label>
                <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={Post.title}
                  onChange={(e) => {
                    const copy = { ...Post }
                    copy.title = e.target.value
                    setPost(copy)
                  }}
                />
                <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={Post.content}
                  onChange={(e) => {
                    const copy = { ...Post }
                    copy.content = e.target.value
                    setPost(copy)
                  }}
                />
                   <Input
                  style={{ marginBottom: '10px', backgroundColor: '#EEFBF5' }}
                  type="text"
                  placeholder={Post.imageLocation}
                  onChange={(e) => {
                    const copy = { ...Post }
                    copy.imageLocation = e.target.value
                    setPost(copy)
                  }}
                />
                
                <Label htmlFor="category">Category</Label>
                <select
                  required
                  className="form-control"
                  value={Post.categoryId}
                  onChange={(e) => {
                    const copy = { ...Post }
                    copy.categoryId = e.target.value
                    setPost(copy)
                  }}
                >
                  {categories?.map((c) => (
                    <option value={c.id}>{c.name}</option>
                  ))}
                </select>

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

export default PostEdit
