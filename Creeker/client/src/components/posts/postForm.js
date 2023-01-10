import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import { getCategories } from '../../modules/CategoryManager'
import { addPost } from '../../modules/PostManager'

const PostForm = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [post, setPost] = useState({
    title: '',
    content: '',
    imageLocation: '',
  })

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  const localUser = localStorage.getItem('user')
  const userObject = JSON.parse(localUser)

  const handleSave = (event) => {
    event.preventDefault()

    const newPost = {
      title: post.title,
      content: post.content,
      imageLocation: post.imageLocation,
      userId: userObject.id,
      categoryId: post.categoryId,
      publishDateTime: post.publishDateTime,
      createDateTime: post.createDateTime,
    }

    addPost(newPost)
      .then((r) => r.json())
      .then(navigate(`/quarantine`))
  }

  const handleCancel = () => {
    navigate('/posts')
  }
  //     <form className="postForm">
  //     <h2 className="postForm__Title">New Post</h2>
  //     <fieldset>
  //         <div className="form-group">
  //             <label htmlFor="Title">Title:</label>
  //             <input
  //                 required autoFocus
  //                 type="text"
  //                 className="form-control"
  //                 placeholder="Post title"
  //                 value={post.title}
  //                 onChange={(changeEvent) => {
  //                     const copy = {...post}
  //                     copy.title = changeEvent.target.value
  //                     setPost(copy)
  //                 }} />
  //         </div>
  //     </fieldset>
  //     <fieldset>
  //         <div className="form-group">
  //             <label htmlFor="Content">Content:</label>
  //             <input
  //                 required autoFocus
  //                 type="text"
  //                 className="form-control"
  //                 placeholder="Post content"
  //                 value={post.content}
  //                 onChange={(changeEvent) => {
  //                     const copy = {...post}
  //                     copy.content = changeEvent.target.value
  //                     setPost(copy)
  //                 }} />
  //         </div>
  //     </fieldset>
  //     <fieldset>
  //         <div className="form-group">
  //             <label htmlFor="ImageLocation">Header Image URL:</label>
  //             <input
  //                 autoFocus
  //                 type="text"
  //                 className="form-control"
  //                 placeholder="www.example.com"
  //                 value={post.imageLocation}
  //                 onChange={(changeEvent) => {
  //                     const copy = {...post}
  //                     copy.imageLocation = changeEvent.target.value
  //                     setPost(copy)
  //                 }} />
  //         </div>
  //     </fieldset>
  //     <fieldset>
  //         <div className="form-group">
  //             <label htmlFor="category">Category</label>
  //             <select required className="form-control"
  //                     value={post.categoryId}
  //                     onChange={(changeEvent) => {
  //                         const copy = {...post}
  //                         copy.categoryId = changeEvent.target.value
  //                         setPost(copy)
  //                     }}>
  //                 <option value="0">Choose a category</option>
  //                 {categories?.map(c => <option value={c.id}>{c.name}</option>)}
  //             </select>
  //         </div>
  //     </fieldset>
  //     <button onClick={(clickEvent) => {handleSave(clickEvent)}} className="btn btn-primary">
  //         Submit Post
  //     </button>
  //     <button onClick={(clickEvent) => {handleCancel(clickEvent)}} className="btn btn-primary">
  //         Go Back
  //     </button>
  // </form>

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
            <CardTitle style={{ color: 'black' }} tag="h3">
              New Post
            </CardTitle>
            <CardBody>
                <Input
                   style={{ marginBottom: '10px' }}
                   type="text"
                   className="form-control"
                   placeholder="cool title goes here"
                   value={post.title}
                   onChange={(changeEvent) => {
                     const copy = { ...post }
                     copy.title = changeEvent.target.value
                     setPost(copy)
                  }}
                />
                <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  className="form-control"
                  placeholder="lorem ipsum delore"
                  value={post.content}
                  onChange={(changeEvent) => {
                    const copy = { ...post }
                    copy.content = changeEvent.target.value
                    setPost(copy)
                  }}
                />
                <Input
                  style={{ marginBottom: '10px' }}
                  type="text"
                  className="form-control"
                  placeholder="link us to your best image"
                  value={post.imageLocation}
                  onChange={(changeEvent) => {
                    const copy = { ...post }
                    copy.imageLocation = changeEvent.target.value
                    setPost(copy)
                  }}
                />
                  <Label style={{color: "black"}}htmlFor="category">Category</Label>
                  <select
                    required
                    className="form-control"
                    value={post.categoryId}
                    onChange={(changeEvent) => {
                      const copy = { ...post }
                      copy.categoryId = changeEvent.target.value
                      setPost(copy)
                    }}
                  >
                    <option value="0">Choose a category</option>
                    {categories?.map((c) => (
                      <option value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <br></br>
                <Button onClick={(clickEvent) => {handleSave(clickEvent)}}
                  style={{ backgroundColor: 'transparent', color: 'black' }}
                >Create</Button>
                <Button onClick={(clickEvent) => {handleCancel(clickEvent)}} 
                  style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    marginLeft: '10px',
                  }}
                >Go back</Button>
            </CardBody>
          </Card>
        </div>
      </article>
    </>
  )
}

export default PostForm
