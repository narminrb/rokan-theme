import React from 'react'
import ProductListSection from '../../components/sections/product-list'
import Banner from '../../components/sections/banner'
import ShopNow from '../../components/sections/ShopNow'
import CustomSwiper from '../../components/sections/swiper'
import Brands from '../../components/sections/brands'
import DiscoverNow from '../../components/sections/DiscoverNow'
import Trending from '../../components/sections/trending'
import Bestseller from '../../components/sections/bestseller'
import InstaSwiper from '../../components/sections/instaswiper'

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
       <InstaSwiper/>
       <ProductListSection/>

    </div>
  )
}

export default HomePage