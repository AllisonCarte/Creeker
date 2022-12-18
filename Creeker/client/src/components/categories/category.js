import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import "./categories.css"
// Still need to add images back to the return after I figure out why they cause 10000 GET requests
{/* <article style={{ display: 'flex', justifyContent: 'center' }}>
  <div >
    <Card
      body
      inverse
      style={{
        marginTop: '1.5rem',
        backgroundColor: '#587D71',
        width: '18rem'
      }}
    >
      <CardBody>
        <CardTitle tag="h5"></CardTitle>
        <CardSubtitle
          style={{ color: '#EEFBF5' }}
          className="mb-2"
          tag="h6"
        ></CardSubtitle>
        <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/categories/edit/${categoryObject.id}`}><FaRegEdit/></CardLink>
        <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/categories/delete/${categoryObject.id}`}><FaRegTrashAlt/></CardLink>
      </CardBody>
    </Card>
  </div>
</article> */}

const Category = ({ categoryObject }) => {
  return (
    <>
    <li>
     <a class='spicypotatotaco' href="#">
      <p class='enchilada'>{categoryObject.name}</p>
    </a>
    </li>
    </>
  )
}

export default Category
