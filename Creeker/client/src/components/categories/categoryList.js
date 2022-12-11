import React, { useEffect, useState } from 'react'
import { getCategories } from '../../modules/CategoryManager'
import Category from './category'
import Canvas from '../nav/Offcanvas'
const CategoryList = () => {
  const [Categories, setCategories] = useState([])

  const getAllCategories = () => {
    getCategories().then((u) => setCategories(u))
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <>
<div style={{marginBottom: "4.5rem"}}>

        <Canvas/>
      {Categories.map((u) => (
        <Category key={u.id} categoryObject={u} />
        ))}

        </div>

    </>
  )
}
export default CategoryList
