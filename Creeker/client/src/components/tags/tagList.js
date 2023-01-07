import React, { useEffect, useState } from 'react'
import { getAllTags } from '../../modules/TagManager'
import Tag from './tag'
import './tags.css'

const TagList = () => {
  const [Tags, setTags] = useState([])

  const getTags = () => {
    getAllTags().then((u) => setTags(u))
  }

  useEffect(() => {
    getTags()
  }, [])

  return (
    <>
      {/* <div className='app'>
        <div className='grid'> */}
      <div class="main-container">
<div class="catCards">
          {Tags.map((t) => (
            <Tag key={t.id} tagObject={t} />
          ))}
          </div></div>
    </>
  )
}
export default TagList
