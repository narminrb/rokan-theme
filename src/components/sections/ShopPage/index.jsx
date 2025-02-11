import React from 'react'
import SideBar from '../SideBar'
import Results from '../Results'

const ShopPageLayout = () => {
  return (
    <div className="container mx-auto my-10 px-3">
  <div className="grid grid-cols-4 gap-5 items-stretch">
    <div className="col-span-1">
      <SideBar />
    </div>
    <div className="col-span-3">
      <Results />
    </div>
  </div>
</div>

  )
}

export default ShopPageLayout