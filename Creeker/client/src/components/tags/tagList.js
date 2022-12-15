import React, { useEffect, useState } from 'react'
import { getAllTags } from '../../modules/TagManager'
import Tag from './tag'
import Canvas from './tagOffcanvas'
import './tags.css';

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
    
<div className='' id='taco'>
<div >
      {Tags.map((t) => (
        <Tag key={t.id} tagObject={t} />
        ))}

        </div>
        <aside >
        <Canvas/>
        </aside>
    </div>

    </>
  )
}
export default TagList
