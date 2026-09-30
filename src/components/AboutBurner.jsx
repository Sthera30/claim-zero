import React from 'react'
import { motion } from 'framer-motion'
import { FaUtensils, FaLeaf, FaHandshake } from 'react-icons/fa'
import '../css/aboutBurner.css'

function AboutBurner() {
    return (

        <>

            <div className='about-burner-container'>

                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }}
                >
                    <span style={{ color: "#ffffff" }}>OUR&nbsp;</span>
                    <span style={{ color: "#F7E7CE" }}>CORE VALUES</span>
                </motion.h2>

                <div className='about-burner'>

                    {/* QUALITY */}
                    <div
                        className='about-box'
                        style={{ background: "#1f1f1f", color: "#fff" }}
                    >
                        <h2 style={{ color: "#F7E7CE" }}>
                            <FaUtensils />
                        </h2>
                        <h3>Quality Ingredients</h3>
                        <p>
                            At Siya’s Meals Catering Services, we use only fresh, high-quality ingredients to ensure every dish is rich in flavor, beautifully prepared, and consistently satisfying.
                        </p>
                    </div>

                    {/* FRESHNESS */}
                    <div
                        className='about-box'
                        style={{ background: "#1f1f1f", color: "#fff" }}
                    >
                        <h2 style={{ color: "#F7E7CE" }}>
                            <FaLeaf />
                        </h2>
                        <h3>Freshness & Care</h3>
                        <p>
                            Every meal is prepared with care and attention to detail, ensuring freshness in every bite while maintaining the highest standards of hygiene and presentation.
                        </p>
                    </div>

                    {/* SERVICE */}
                    <div
                        className='about-box'
                        style={{ background: "#1f1f1f", color: "#fff" }}
                    >
                        <h2 style={{ color: "#F7E7CE" }}>
                            <FaHandshake />
                        </h2>
                        <h3>Exceptional Service</h3>
                        <p>
                            We are committed to delivering a seamless catering experience, working closely with our clients to bring their vision to life with professionalism and reliability.
                        </p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AboutBurner
