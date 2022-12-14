import React, { useEffect, useState } from 'react'
import { getAllTags } from '../../modules/TagManager'
import Tag from './tag'
import Canvas from './tagOffcanvas'
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
<div style={{marginBottom: "4.5rem"}}>

        <Canvas/>
      {Tags.map((t) => (
        <Tag key={t.id} tagObject={t} />
        ))}

        </div>

    </>
  )
}
export default TagList
