import React from 'react'
import { FaLeaf, FaUtensils, FaUserTie, FaClock, FaStar, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Review from '../components/Review.jsx'
import '../css/burner.css'

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    text: "We use only high-quality, fresh ingredients in every meal we prepare.",
  },
  {
    icon: <FaUtensils />,
    title: "Custom Menus",
    text: "Menus tailored to suit your event, taste, and dietary needs.",
  },
  {
    icon: <FaUserTie />,
    title: "Professional Staff",
    text: "Friendly and experienced staff ensuring smooth service.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Service",
    text: "We are reliable and always deliver on schedule.",
  },
  {
    icon: <FaStar />,
    title: "Elegant Presentation",
    text: "Beautiful food presentation that impresses your guests.",
  },
  {
    icon: <FaHeart />,
    title: "Customer Satisfaction",
    text: "We prioritize your happiness and ensure every event exceeds expectations.",
  },
]

function Burner() {
  return (
    <>
      <div className='burner-container'>

        <div className='burner-inner'>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: "#ffffff" }}>Why </span>
            <span style={{ color: "#F7E7CE" }}>Choose Us</span>
          </motion.h2>
        </div>

        <div className='burner-container_'>

          {features.map((item, index) => (
            <motion.div
              key={index}
              className='burner-box'
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}

        </div>

      </div>

      <Review />
    </>
  )
}

export default Burner