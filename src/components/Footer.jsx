import React from 'react'
import img1 from "../../public/SBB_logo_clean.svg"
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaPhone } from 'react-icons/fa'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import "../css/footer.css"

function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className='footer-container'>

                <div className='footer-inner-container'>

                    <div className='footer-con'>

                        <div className='footer-box'>

                            <div className="logo-orbit-wrapper_">
                                <img src={img1} alt="" />
                                <div className="orbit-ring_">
                                    {[...Array(8)].map((_, i) => (
                                        <span key={i} className="orbit-dot_" style={{ '--i': i }}></span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='footer-box'>

                            <h3>EXPLORE</h3>
                            <a href="http://localhost:5173">Home</a>
                            <a href="http://localhost:5173/about-us/">About Us</a>
                            <a href="http://localhost:5173/our-services/">Services</a>
                            <a href="http://localhost:5173/our-gallery/">Gallery</a>
                            <a href="http://localhost:5173/contact-us/">Contact Us</a>

                        </div>

                         <div className='footer-box'>

                            <h3>OPENING HOURS</h3>
                            <a>Mon-Fri <span>09:00 AM – 18:00 PM</span></a>
                            <a>Saturday<span>08:00 AM – 15:00 PM</span></a>
                            <a>Sunday<span>Closed</span></a>

                        </div>

                        <div className='footer-box'>

                            <h3>FIND US</h3>
                            <a><FaPhone />&nbsp;&nbsp;072 334 2041</a>
                            <a><TfiEmail />&nbsp;&nbsp;info@sbahlebeautybar.co.za</a>
                            <a><CiLocationOn />&nbsp;&nbsp;Cape Town, South Africa</a>

                        </div>

                    </div>

                </div>

                <p className='foot'>© Copyright {currentYear}  Sbahle's Beauty Bar | All Rights Reserved</p>

            </div>

        </>
    )
}

export default Footer
