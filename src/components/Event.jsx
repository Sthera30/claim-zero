import React from 'react'
import '../css/event.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

function Event() {
    return (
        <>

            <div className='event-container'>

                <div className='event-container-inner'>

                    <motion.h2 initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .8 }}>READY TO PLAN YOUR EVENT ?</motion.h2>
                    <motion.p initial={{ opacity: 0, y: -25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .8 }}>Contact us today to discuss your catering needs and let us create an unforgettable culinary experience for your next event.</motion.p>

                    <NavLink to={"/contact-us/"}>

                        <motion.button initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: .8 }} className='btn-book-us'>BOOK US NOW</motion.button>


                    </NavLink>
                </div>

            </div>

        </>
    )
}

export default Event
