import React from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar.Jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
   <div className= 'd-flex flex-column justify-content-between min-vh-100'>
    <Navbar/>
   <div className={styles.paddingSection}>
   <Outlet/>
   </div>
    <Footer/>
   </div>
  )
}