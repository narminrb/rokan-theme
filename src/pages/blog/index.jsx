import React from 'react'
import Likes from '../../components/sections/likes'
import LikesStuff from '../../components/sections/LikesStuff'
import ShopPageLayout from '../../components/sections/ShopPage'
import ShopBanner from '../../components/sections/ShopBanner'
import BlogPageLayout from '../../components/sections/BlogPage'

const BlogPage = () => {

  return (
    <div>
        <ShopBanner/>
        <BlogPageLayout/>
    </div>
  )
}

export default BlogPage