import React, { useEffect, useState } from 'react'
import { getAllTags } from '../../modules/TagManager'
import Tag from './tag'
import Canvas from './tagOffcanvas'
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
      <Canvas />
      <div className='app'>
        <div className='grid'>
          {Tags.map((t) => (
            <Tag key={t.id} tagObject={t} />
          ))}
        </div>
      </div>
    </>
  )
}
export default TagList
