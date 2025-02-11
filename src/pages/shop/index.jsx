import React from 'react'
import Likes from '../../components/sections/likes'
import LikesStuff from '../../components/sections/LikesStuff'
import ShopPageLayout from '../../components/sections/ShopPage'
import ShopBanner from '../../components/sections/ShopBanner'

const ShopPage = () => {
  return (
    <div>
        <ShopBanner/>
        <Likes/>
        <LikesStuff/>
        <ShopPageLayout/>
    </div>
  )
}

export default ShopPage