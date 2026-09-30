import React, { useEffect, useState, useRef } from 'react'
import '../css/experience.css'

function Experience() {

    const [counts, setCounts] = useState({
        years: 0,
        events: 0,
        team: 0
    })

    const sectionRef = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated.current) {
                startCounting()
                hasAnimated.current = true
            }
        }, { threshold: 0.5 })

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const startCounting = () => {
        let start = 0

        const interval = setInterval(() => {
            start += 1

            setCounts({
                years: Math.min(start, 5),
                events: Math.min(start * 1, 100),
                team: Math.min(start, 98)
            })

            if (start >= 115) clearInterval(interval)
        }, 20)
    }

    return (
        <div className='experience-container' ref={sectionRef}>

            <div className='experience-box'>
                <span>{counts.years}+</span>
                <p>YEARS EXPERIENCE</p>
            </div>

            <div className='experience-box'>
                <span>{counts.events}+</span>
                <p>HAPPY CLIENTS</p>
            </div>

            <div className='experience-box'>
                <span>{counts.team}%</span>
                <p>CLIENT SATISFACTION</p>
            </div>

        </div>
    )
}

export default Experience