import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './layout/SideBar'
import Topbar from './layout/TopBar'
import BottomNav from './layout/BottomNav'

const Layout = () => {
  return (
    <div className='min-h-screen bg-[#F5F4EF] md:flex'>
      <Sidebar />
      <div className='flex min-w-0 flex-1 flex-col'>
        <Topbar />
        <main className='flex-1 p-4 pb-20 md:p-8"'>
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

export default Layout
