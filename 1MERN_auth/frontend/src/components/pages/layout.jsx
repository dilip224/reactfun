import React from 'react'
import Nav from '../nav'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  console.log('layout')
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Layout