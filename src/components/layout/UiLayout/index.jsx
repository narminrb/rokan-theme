import React from 'react'
import UiHeader from './UiHeader'
import UiFooter from './UiFooter'
import { Outlet } from 'react-router-dom'

const UiLayout = () => {
  return (
    <div>
        <UiHeader />
            <main>
            <Outlet/>
            </main>
        <UiFooter/>
    </div>
  )
}

export default UiLayout