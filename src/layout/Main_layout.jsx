import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from "../components/ScrollToTopButton";


function Main_layout() {
  return (
    <div>

      <Navbar />
      <Toaster containerStyle={{ marginTop: '.8rem' }} position='top-center' />
      <Outlet />
      {/* <WhatsAppButton phoneNumber="1234567890" /> */}
      {/*  <ScrollToTop /> */}
      <ScrollToTopButton />

    </div>
  )
}

export default Main_layout
