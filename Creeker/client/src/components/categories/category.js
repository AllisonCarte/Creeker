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
import { FaRegTrashAlt, FaRegEdit, FaTrashAlt } from 'react-icons/fa'
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

{/* <li>
 <a class='spicypotatotaco' href="#">
  <p class='enchilada'>{categoryObject.name}</p>
</a>
</li> */}
{/* <li>
 <a href="" class="categoryCard">
   <img
     src="https://i.imgur.com/oYiTqum.jpg"
     class="categoryCard__image"
     alt=""
   />
   <div class="categoryCard__overlay">
     <div class="categoryCard__header">
       <svg class="categoryCard__arc" xmlns="http://www.w3.org/2000/svg">
         <path />
       </svg>
       <img
         class="categoryCard__thumb"
         src="https://i.imgur.com/7D7I6dI.png"
         alt=""
       />
       <div class="categoryCard__header-text">
         <h3 class="categoryCard__title">{categoryObject.name}</h3>
       </div>
     </div>
     <p class="categoryCard__description">
       <CardLink
         style={{ color: 'black', textDecoration: 'none' }}
         href={`/categories/edit/${categoryObject.id}`}
       >
         <FaRegEdit />
       </CardLink>
       <CardLink
         style={{ color: 'black', textDecoration: 'none' }}
         href={`/categories/delete/${categoryObject.id}`}
       >
         <FaRegTrashAlt />
       </CardLink>
     </p>
   </div>
 </a>
</li> */}

const Category = ({ categoryObject }) => {
  return (
    <>
    <div class="catCard card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">{categoryObject.name}</h2>
      <p class="card__apply">
        <a class="card__link" href={`/categories/edit/${categoryObject.id}`}> <i class="card_icon"><FaRegEdit/></i></a>
        <a class="card__link" href={`/categories/delete/${categoryObject.id}`}> <i class="card_icon"><FaTrashAlt/></i></a>

      </p>
    </div>
    </>
  )
}

export default Category
