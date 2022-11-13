import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (<>
  <Navbar/>
  
  <Outlet></Outlet>

  <Footer/>

  </>
    
  )
}
