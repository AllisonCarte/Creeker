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

{/* <ul className='taco'> */}
{/* <ul class="categoryCards"> */}
<div class="main-container">
<div class="catCards">
      {Categories.map((u) => (
        <Category key={u.id} categoryObject={u} />
        ))}
        </div>
</div>
        {/* </ul> */}
{/* </ul> */}
    </>
  )
}
export default CategoryList
