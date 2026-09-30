import React from 'react'
import { motion } from 'framer-motion'
import '../css/productSection.css'
import Experience from './Experience.jsx'
import img1 from '../../public/pic2.png'
import img2 from '../../public/pic3.png'
import img3 from '../../public/pic7.png'
import { FaStar } from 'react-icons/fa'
import Review from './Review.jsx'
import Appointment from './Appointment.jsx'
import { NavLink } from 'react-router-dom'


function ServicesSection() {

    const services = [
        { title: 'Daily Meals', desc: 'Delicious, home-style daily meals prepared fresh to give individuals, teams, and organisations convenient, satisfying food every day.' },
        { title: 'Event Catering', desc: 'Tailored menus designed to suit your occasion, taste, and budget, creating a memorable food experience for every event.' },
        { title: 'Luxury Presentation', desc: 'Clean, professional food setups that add warmth, style, and a welcoming touch to your event or service space.' },
        { title: 'Reliable Service', desc: 'A friendly and professional team committed to delivering quality food and dependable service with care.' },
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    }


    return (
        <>

            <div className='product-section-container' id='our-services'>

                <motion.h2 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}><h1>OUR BEAUTY <span>SERVICES</span></h1></motion.h2>

            </div>

            <div className='serv-container'>

                <div className='serve-box'>

                    <img src={img1} alt="" />
                    <div className='serv-co'>
                        <h2>NAIL SERVICES</h2>
                        <p>Complete your look with beautifully crafted nails. From elegant everyday styles to bold statement designs, we create flawless finishes you'll love.</p>
                    </div>

                </div>

                <div className='serve-box'>

                    <img src={img2} alt="" />
                    <div className='serv-co'>
                        <h2>MAKE-UP</h2>
                        <p>Look your best for every occasion with expertly applied makeup that enhances your natural beauty, whether it's for a wedding, event, or everyday glam.</p>
                    </div>

                </div>

                <div className='serve-box'>

                    <img src={img3} alt="" />
                    <div className='serv-co'>
                        <h2>WIG INSTALLATION</h2>
                        <p>Achieve a seamless, natural-looking finish with our professional wig installation services, tailored to give you confidence and long-lasting results.</p>
                    </div>

                </div>

            </div>

            <div className='view-container-button'>

                <NavLink to={"https://tranquil-dragon-1aaf65.netlify.app/our-gallery"}><button>VIEW GALLERY</button></NavLink>

            </div>


            <div className='burner-salon'>

                <div className='burner-inner'>

                    <h2>Experience Beauty Like Never Before</h2>
                    <p>Enjoy premium beauty services in a relaxing environment where every detail is designed to leave you feeling confident, refreshed, and beautiful.</p>
                    <button onClick={() => {
                        document.getElementById('book-appointment').scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>BOOK US NOW</button>

                </div>

            </div>

            <div className="choose-us-container">

                <div className='choose-us-inner'>

                    <h2>W H Y &nbsp;&nbsp;C H O O S E&nbsp;&nbsp;<span className='choo'>U S</span></h2>
                    <h3>Experience Beauty with Confidence</h3>
                    <p>At Sbahle's Beauty Bar, we combine creativity, professionalism, and attention to detail to deliver beauty services you'll love. Using premium products and the latest techniques, we ensure every client leaves feeling confident, refreshed, and beautifully transformed.</p>
                    <NavLink to={"https://tranquil-dragon-1aaf65.netlify.app/about-us"}><button style={{fontSize: '.8rem'}}>L E A R N&nbsp;&nbsp; M O R E</button></NavLink>

                </div>
            </div>

            <Experience />

            <h2 className='head_'>Our Happy&nbsp;<span className='choo'>Clients</span></h2>

            <div className='testimonials-container'>

                <div className='testimonials-box'>

                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <p>"Not only did the install look flawless, it was also comfortable enough to sleep in without any slipping. Best money I've spent on my hair in a long time."</p>
                    <div className='name-co'>
                        <h3>Lerato L.</h3>
                        <span>March 2026</span>

                    </div>

                </div>

                <div className='testimonials-box'>

                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <p>"Booked make-up for my sister's wedding and it lasted the entire night, through tears and dancing. Sbahle's Beauty Bar made me feel like the best version of myself."</p>
                    <div className='name-co'>
                        <h3>Natasha M.</h3>
                        <span>April 2026</span>

                    </div>

                </div>

                <div className='testimonials-box'>

                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <p>"I brought in a random Pinterest picture expecting it to look different in real life, but the nail art came out even better than the reference. Booking again for sure."</p>
                    <div className='name-co'>
                        <h3>Amahle N.</h3>
                        <span>July 2026</span>

                    </div>

                </div>

            </div>

            <Appointment />


        </>
    )
}

export default ServicesSection
