import React, { useEffect, useState } from 'react'
import img from '../../public/ChatGPT Image Jul 9, 2026, 05_03_30 PM.png'
import { useNavigate } from 'react-router-dom'
import '../css/services.css'
import { motion } from 'framer-motion'
import img1 from '../../public/ChatGPT Image Jul 9, 2026, 10_39_12 PM.png'
import img2 from '../../public/ChatGPT Image Jul 10, 2026, 02_01_39 AM.png'
import img3 from '../../public/ChatGPT Image Jul 10, 2026, 01_26_21 AM.png'
import Event from '../components/Event.jsx'

function Services() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const manicures = [
        { name: "Nail Paint", time: "30 min", price: "R190", desc: null },
        { name: "Manicure", time: "60 min", price: "R250", desc: "Hand exfoliation, buff, nail shape, cuticle treatment, hand massage and nail paint." },
        { name: "French Manicure", time: "60 min", price: "R300", desc: "Hand exfoliation, buff, nail shape, cuticle treatment, hand massage and French nail paint." },
        { name: "Manicure and Gelish Overlay", time: "75 min", price: "R450", desc: "Hand exfoliation, buff, nail shape, cuticle treatment, hand massage and gelish overlay (French or colour)." },
        { name: "Nourishing Paraffin Wax Manicure", time: "75 min", price: "R320", desc: "Hand exfoliation, buff, nail shape, cuticle treatment, hand massage. Paraffin wax heat allows for deeper absorption of emollients and essential oils, to soften and nourish hands and cuticles. Nail paint included." },
        { name: "Nourishing Paraffin Wax Manicure and Gelish Overlay", time: "90 min", price: "R500", desc: "Hand exfoliation, buff, nail shape, cuticle treatment, hand massage. Paraffin wax heat allows for deeper absorption of emollients and essential oils, to soften and nourish hands and cuticles. Gelish overlay included." },
    ]

    const pedicures = [
        { name: "Rejuvenation Pedicure", time: "60 min", price: "R420", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, foot file, massage and nail paint." },
        { name: "French Pedicure", time: "60 min", price: "R420", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, foot file, massage and French nail paint." },
        { name: "Nourishing Paraffin Wax Pedicure", time: "90 min", price: "R450", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, paraffin wax and foot massage and nail paint." },
        { name: "Pedicure and Gelish Overlay", time: "75 min", price: "R520", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, foot file, massage and gelish overlay (French or colour)." },
        { name: "Nourishing Paraffin Wax Pedicure and Gelish Overlay", time: "90 min", price: "R590", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, foot file, massage and gelish overlay (French or colour)." },
        { name: "Maintenance Foot Peel Only", time: "30 min", price: "R240", desc: null },
        { name: "Maintenance Pedicure", time: "60 min", price: "R450", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, foot peel, foot file, massage and nail paint." },
        { name: "Maintenance Pedicure with Gelish Overlay", time: "75 min", price: "R520", desc: "Foot exfoliation, buff, nail shape, cuticle treatment, foot peel, foot file, massage and gelish overlay (French or colour)." },
    ]

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
            <div className='our-serv-container' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})` }}>
                <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }} className='our-serv-inner'>
                    <h1>WHAT WE OFFER</h1>
                    <h2>Our Services</h2>
                    <p>From gel manicures to full wig installs, every service is built around getting the details right.</p>
                </motion.div>
            </div>

            <div className='services-container-'>

                <div className='services-box-'>

                    <img src={img1} alt="" />
                    <div className='content'>
                        <h2>Nail Services</h2>
                        <p>Manicures and pedicures — from a quick nail paint to a full paraffin wax treatment with gelish overlay.</p>
                        <div className='minutes-co'>

                            <span>30-90 min</span>
                            <span>from R170</span>

                        </div>

                        <button className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? 'Hide full menu' : 'View full menu'}
                            <span className={`menu-chevron ${isMenuOpen ? 'open' : ''}`}>▾</span>
                        </button>

                        {isMenuOpen && (
                            <div className='menu-panel'>

                                <p className='menu-heading'>Manicures</p>
                                {manicures.map((item) => (
                                    <div className='menu-item' key={item.name}>
                                        <div className='menu-row'>
                                            <span className='menu-name'>{item.name} <em>({item.time})</em></span>
                                            <span className='menu-price'>{item.price}</span>
                                        </div>
                                        {item.desc && <p className='menu-desc'>{item.desc}</p>}
                                    </div>
                                ))}

                                <p className='menu-heading'>Pedicures</p>
                                {pedicures.map((item) => (
                                    <div className='menu-item' key={item.name}>
                                        <div className='menu-row'>
                                            <span className='menu-name'>{item.name} <em>({item.time})</em></span>
                                            <span className='menu-price'>{item.price}</span>
                                        </div>
                                        {item.desc && <p className='menu-desc'>{item.desc}</p>}
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                </div>

                <div className='services-box-'>

                    <img src={img2} alt="" />
                    <div className='content'>
                        <h2>Make-Up</h2>
                        <p>Skin prep, contour, full face application</p>
                        <div className='minutes-co'>

                            <span></span>

                        </div>
                    </div>

                </div>

                <div className='services-box-'>

                    <img src={img3} alt="" />
                    <div className='content'>
                        <h2>Wig Installation</h2>
                        <p>Lace melt, customization, styling included</p>
                        <div className='minutes-co'>

                            <span></span>

                        </div>
                    </div>

                </div>

            </div>

            <h2 className='work-head'>SEE THE WORK <span> — watch a short reel</span></h2>


            <div className='video-container'>

                <div className='video-box'>

                    <video
                        className="video-inner"
                        src="/kling_20260710_VIDEO_Use_the_up_5751_0.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                </div>

                <div className='video-box'>

                    <video
                        className="video-inner"
                        src="/kling_20260710_VIDEO_Use_the_up_5911_0.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                </div>

                <div className='video-box'>

                    <video
                        className="video-inner"
                        src="/kling_20260711_VIDEO_Use_the_up_666_0.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                </div>

            </div>

            <button onClick={() => navigate('/#book-appointment')} className='btnBook'>Book an appointment</button>

        </>
    )
}

export default Services