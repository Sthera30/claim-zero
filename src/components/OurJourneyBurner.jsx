import React from 'react'
import img from '../../public/img6.jpg'
import { motion } from 'framer-motion'
import '../css/ourjourneyBurner.css'

function OurJourneyBurner() {
    return (
        <>

            <div className='our-journey-burner'>

                <video
                    className="our-journey-video"
                    src="/kling_20260709_VIDEO_Use_the_up_921_0.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="overlay"></div>

                <div className='our-journey-burner-inner'>

                    <h1>OUR STORY</h1>
                    <h2>Beauty Begins with Passion</h2>
                    <p>From one chair to a trusted beauty destination, Sbahle's Beauty Bar was built on a passion for helping every client feel confident, beautiful, and empowered.</p>

                </div>

            </div>

        </>
    )
}

export default OurJourneyBurner
