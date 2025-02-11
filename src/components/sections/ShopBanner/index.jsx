import React from 'react';

const ShopBanner = () => {
  return (
    <div className="container mx-auto my-5">
      <div
        className="grid-cols-1 h-[200px] w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://rokan-theme.myshopify.com/cdn/shop/files/shop-banner.png?v=1716721518")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className="text-white text-[40px] font-[500]">Shop</h1>
      </div>
    </div>
  );
};

export default ShopBanner;
