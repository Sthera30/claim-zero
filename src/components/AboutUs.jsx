import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import img1 from '../../public/img11.png'
import { useNavigate } from 'react-router-dom'
import '../css/aboutUs.css'
import Vision from './Vision.jsx'
import OurJourneyBurner from './OurJourneyBurner.jsx'
import Experience from './Experience.jsx'

function AboutUs() {

    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (

        <>

            <OurJourneyBurner />

            <div className='page-title' id='OUR-STORY'>

                <div className='our-journey-container'>

                    <motion.div className='our-journey-box'>

                        <img src={img1} alt="" />

                    </motion.div>

                    <motion.div className='our-journey-box'>

                        <h3 style={{ color: '#333' }}>HOW IT STARTED</h3>
                        <h4>ABOUT US</h4>
                        <p>Sbahle founded Sbahle's Beauty Bar with a simple mission: to create a space where every client feels confident, valued, and beautiful. What started as a passion for beauty quickly grew into a dream of building a salon where quality, creativity, and exceptional service come together.</p>
                        <p>With dedication, continuous learning, and a commitment to excellence, that dream became a reality. From professional wig installations and flawless makeup to stylish braids and beautiful nail services, every treatment is carried out with care, precision, and attention to detail. Each appointment is an opportunity to help clients express their unique style and leave feeling their absolute best.</p>
                        <p>Today, Sbahle's Beauty Bar is more than just a salon—it's a welcoming space where beauty meets confidence. Every client is treated with warmth, respect, and professionalism, creating an experience that goes beyond the service itself. As the journey continues, the vision remains the same: to help every person who walks through the door look beautiful, feel confident, and leave with a smile.</p>

                    </motion.div>

                </div>

            </div>

            <div className='-box-container-'>

                <motion.div initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }} className='-box-'>

                    <span>♡</span>
                    <h2>Care</h2>
                    <p>Every service starts with listening to what you actually want.</p>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }} className='-box-'>

                    <span>✦</span>
                    <h2>Craft</h2>
                    <p>Trained hands, steady technique, no shortcuts taken.</p>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }} className='-box-'>

                    <span>★</span>
                    <h2>Confidence</h2>
                    <p>You should walk out feeling like yourself, only more so.</p>

                </motion.div>

            </div>

            <Experience />


            <div className='booking-container'>

                <motion.div initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }} className='booking-inner-container'>

                    <h2>Ready for Your Next Beauty Appointment?</h2>
                    <p>Experience professional beauty services in a warm and welcoming environment. We'd love to help you look and feel your best.</p>
                    <button onClick={() => navigate('/#book-appointment')}>Book an appointment</button>


                </motion.div>

            </div>



        </>
    )
}

export default AboutUs
