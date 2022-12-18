import React from 'react'
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardTitle,
} from 'reactstrap'
import "./tags.css"
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
// Still need to add images back to the return after I figure out why they cause 10000 GET requests

const Tag = ({ tagObject }) => {
  return (
    <>
      {/* <article style={{ display: 'flex', justifyContent: 'center' }}> */}
        <div className='box'>
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
        </div>
      {/* </article> */}
    </>
  )
}

export default Tag
