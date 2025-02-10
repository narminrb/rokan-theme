import React from 'react'
import './style.css'
const Brands = () => {
  return (
    <div className='brandscontainer'>
        <div className='icons'>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        </div>
        <div className='paragraph'>
            <p>One of the best looking eCommerce template. If you are looking for clean and minimal kind of
                <br />
                 template you should go with this. Thanks to all those who created this template.</p>
        </div>
        <div className='customer'>
            <p>Rober Evans - <span>Customer</span></p>
        </div>
        <div className='imgcontainer'>
            <div className='img'>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi3.png?v=1723001306" alt="" />
            </div>
            <div className='img'>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi1.png?v=1723001306" alt="" />
            </div>
            <div className='img'>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi2.png?v=1723001306" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Brands