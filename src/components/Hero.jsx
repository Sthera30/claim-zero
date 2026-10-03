import React from 'react'
import img1 from '../../public/sbahle.png'
import '../css/hero.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'

function Hero() {
  return (
    <div className='hero-container'>

      <div className='hero-container-left'>

        <h1>Beauty That Brings Out Your Confidences</h1>
        <p>At Sbahle's Beauty Bar, we offer premium beauty services designed to help you look and feel your best. Whether you're looking for a flawless wig installation, stunning braids, professional makeup, or beautiful nail services, our skilled team is here to bring your vision to life with exceptional care and attention to detail.</p>
        <button onClick={() => {
          document.getElementById('book-appointment').scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}>BOOK AN APPOINTMENT</button>
      </div>

      <div className='hero-container-right'>

        <img src={img1} alt="" />

      </div>

    </div>
  )
}

export default Hero
