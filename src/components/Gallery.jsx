import React, { useEffect } from 'react'
import img from '../../public/ChatGPT Image Jul 14, 2026, 06_45_40 PM.png'
import img1 from '../../public/ChatGPT Image Jan 1, 2023, 01_55_54 PM.png'
import img2 from '../../public/pic4.png'
import img3 from '../../public/ChatGPT Image Jan 1, 2023, 02_05_20 PM.png'
import img4 from '../../public/ChatGPT Image Jan 1, 2023, 01_12_07 PM.png'
import img5 from '../../public/ChatGPT Image Jan 1, 2023, 02_27_37 PM.png'
import img6 from '../../public/ChatGPT Image Jan 1, 2023, 02_43_12 PM.png'
import img7 from '../../public/ChatGPT Image Jan 1, 2023, 02_50_34 PM.png'
import img8 from '../../public/ChatGPT Image Jan 1, 2023, 03_06_53 PM.png'
import img9 from '../../public/ChatGPT Image Jan 1, 2023, 03_35_11 PM.png'
import img10 from '../../public/ChatGPT Image Jan 1, 2023, 04_20_43 PM.png'
import img11 from '../../public/ChatGPT Image Jul 14, 2026, 02_36_47 PM.png'
import img12 from '../../public/ChatGPT Image Jul 14, 2026, 02_48_19 PM.png'
import '../css/gallery.css'

function Gallery() {

  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])

  return (
    <>
      <div className='gallery-container-burner-' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})` }}>

        <div className='gallery-container-inner-'>

          <h1>OUR WORK</h1>
          <h2>Gallery</h2>
          <p>A look at the real work we do — every install, every set, every finish.</p>

        </div>

      </div>

      <div className='gallery-con-'>

        <div className='gallery-box_'>

          <img src={img1} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img2} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img3} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img4} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img5} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img6} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img7} alt="" />

        </div>

        <div className='gallery-box_'>

          <img src={img8} alt="" />

        </div>

        <div style={{ marginBottom: '3rem' }} className='gallery-box_'>

          <img src={img9} alt="" />

        </div>

        <div style={{ marginBottom: '3rem' }} className='gallery-box_'>

          <img src={img10} alt="" />

        </div>

        <div style={{ marginBottom: '3rem' }} className='gallery-box_'>

          <img src={img11} alt="" />

        </div>

        <div style={{ marginBottom: '3rem' }} className='gallery-box_'>

          <img src={img12} alt="" />

        </div>

      </div>

    </>


  )
}

export default Gallery
