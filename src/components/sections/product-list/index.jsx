import React from 'react'
import './style.css'
const Services = () => {
  return (
    <div className='brandscontainerr'>
           <div className='imgcontainerr'>
            <div className='imgg'>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_policy1.png?v=1722913050" alt="" />
            </div>
            <div className='name'>
              <h3>Free shipping</h3>
            </div>
            <div className='paragraphh'>
            <p>Get complimentary ground shipping on every order.  Don't love 
              <br />
              it? Send it back, on us.</p>
            </div>
        </div>
        <div className='imgcontainerr'>
            <div className='img'>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_policy2.png?v=1722913050" alt="" />
            </div>
            <div className='name'>
            <h3>100% PAYMENT SECURE</h3>
            </div>
            <div className='paragraph'>
            <p>Free returns within 10 days, please make sure the items are in 
              <br />
              undamaged condition.</p>
            </div>
        </div>
        <div className='imgcontainerr'>
            <div className='img'>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_policy3.png?v=1722913050" alt="" />
            </div>
            <div className='name'>
            <h3>SUPPORT 24/7</h3>
            </div>
            <div className='paragraph'>
            <p>We support customers 24/7, send us questions and we will 
              <br />
              solve for you immediately.</p>
            </div>
        </div>
    </div>
  )
}

export default Services