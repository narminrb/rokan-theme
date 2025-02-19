import React, { useState } from 'react'
import SideBar from '../SideBar'
import Blogs from '../blogs'

const BlogPageLayout = () => {
  const [category, setCategory] = useState('');
  return (
    <div className="container mx-auto my-10 px-3">
  <div className="grid grid-cols-4 gap-5 items-stretch sm:col-span-1">
    <div className="col-span-1">
      <SideBar setCategory={setCategory}/>
    </div>
    <div className="col-span-3">
      <Blogs category={category}/>
    </div>
  </div>
</div>

  )
}

export default BlogPageLayout