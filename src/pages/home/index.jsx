import React from 'react'
import ProductListSection from '../../components/sections/product-list'
import Banner from '../../components/sections/banner'
import ShopNow from '../../components/sections/ShopNow'
import CustomSwiper from '../../components/sections/swiper'

const HomePage = () => {
  return (
    <div>
       <Banner/>
       <CustomSwiper />
       <ShopNow/>
       <ProductListSection/>
    </div>
  )
}

export default HomePage