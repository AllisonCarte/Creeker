import React from 'react'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle } from 'reactstrap'
import './tags.css'
import { FaRegTrashAlt, FaRegEdit, FaTrashAlt } from 'react-icons/fa'
// Still need to add images back to the return after I figure out why they cause 10000 GET requests
{
  /* <article style={{ display: 'flex', justifyContent: 'center' }}> */
}
{
  /* <div className='box'>
    <Card
      body
      inverse
      style={{
        // marginTop: '1.5rem',
        backgroundColor: '#587D71',
        // width: '18rem'
        
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{tagObject.name}</CardTitle>
        <CardSubtitle
          style={{ color: '#EEFBF5' }}
          className="mb-2"
          tag="h6"
        ></CardSubtitle>
        <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/tags/edit/${tagObject.id}`}><FaRegEdit/></CardLink>
        <CardLink style={{color: "#EEFBF5", textDecoration: "none"}} href={`/tags/delete/${tagObject.id}`}><FaRegTrashAlt/></CardLink>
      </CardBody>
    </Card>
  </div> */
}
{
  /* </article> */
}

const Tag = ({ tagObject }) => {
  return (
    <>
    <div class="catCard card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">{tagObject.name}</h2>
      <p class="card__apply">
        <a class="card__link" href={`/tags/edit/${tagObject.id}`}> <i class="card_icon"><FaRegEdit/></i></a>
        <a class="card__link" href={`/tags/delete/${tagObject.id}`}> <i class="card_icon"><FaTrashAlt/></i></a>

      </p>
    </div>
    </>
  )
}

export default Tag
