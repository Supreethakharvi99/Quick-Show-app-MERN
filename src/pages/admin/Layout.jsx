import React from 'react'
import AdminNavbar from '../../components/admin/Adminnavbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <AdminNavbar/>
    <div className='flex'>
        <AdminSidebar/>
        <div className='flex-1 px-4 py-10 md:mx h-[calc(100vh-64px)] overflow-hidden'>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Layout