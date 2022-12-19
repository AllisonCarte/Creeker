import React, { useEffect, useState } from 'react'
import { getCategories } from '../../modules/CategoryManager'
import Category from './category'
import "./categories.css"
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

<ul className='taco'>
      {Categories.map((u) => (
        <Category key={u.id} categoryObject={u} />
        ))}

        </ul>

    </>
  )
}
export default CategoryList
