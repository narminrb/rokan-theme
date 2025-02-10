import React from 'react'
import Banner from '../../components/sections/banner'
import ShopNow from '../../components/sections/ShopNow'
import CustomSwiper from '../../components/sections/swiper'
import Brands from '../../components/sections/brands'
import DiscoverNow from '../../components/sections/DiscoverNow'
import Trending from '../../components/sections/trending'
import Bestseller from '../../components/sections/bestseller'
import InstaSwiper from '../../components/sections/instaswiper'
import Follow from '../../components/sections/follow'
import Services from '../../components/sections/product-list'

const HomePage = () => {
  return (
    <div>
       <Banner/>
       <Bestseller/>
       <CustomSwiper />
       <ShopNow/>
       <Brands/>
       <DiscoverNow/>
       <Trending/>
       <CustomSwiper />
       <Follow/>
       <InstaSwiper/>
       <Services/>

    </div>
  )
}

export default HomePage