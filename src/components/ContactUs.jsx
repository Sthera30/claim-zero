import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import confetti from 'canvas-confetti'
import '../css/contactUs.css'

const EMAILJS_SERVICE_ID = 'service_gknnju7'
const EMAILJS_TEMPLATE_ID = 'template_mh8j7w7'
const EMAILJS_PUBLIC_KEY = 'ALVMprrjGCJc-VcMt'
const RECAPTCHA_SITE_KEY = '6LcDSLssAAAAAHII_eEkTl24LGmFk8cmLikhbyf1'

function ContactUs() {
    const recaptchaRef = useRef(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: ''
    })

    const [captchaToken, setCaptchaToken] = useState(null)
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // 🎉 CONFETTI FUNCTION
    const fireConfetti = () => {
        const duration = 2 * 1000
        const end = Date.now() + duration

        const run = () => {
            confetti({
                particleCount: 6,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
            })

            confetti({
                particleCount: 6,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
            })

            if (Date.now() < end) {
                requestAnimationFrame(run)
            }
        }

        run()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!captchaToken) {
            alert('Please complete the reCAPTCHA verification.')
            return
        }

        setStatus('sending')

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            event_type: formData.eventType,
            event_date: formData.eventDate,
            guests: formData.guests || 'Not specified',
            message: formData.message
        }

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            )

            // 🎉 TRIGGER CONFETTI HERE
            fireConfetti()

            setStatus('success')

            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                eventDate: '',
                guests: '',
                message: ''
            })

            setCaptchaToken(null)
            recaptchaRef.current.reset()

        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
        }
    }

    const minDate = new Date().toISOString().split('T')[0]

    return (
        <>
            <div
                className='contact-us-container'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${""})`
                }}
            >
                <div className='contact-us-inner-container'>
                    <h1>GET IN TOUCH</h1>
                </div>
            </div>

            <div className='contact-us-form-container'>
                <div className='contact-us-form-inner'>

                    <form onSubmit={handleSubmit}>
                        <h2>REQUEST A QUOTE</h2>

                        <div className='form-input'>

                            <label>Name and Surname <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your name and surname'
                                required
                            />

                            <label>Email Address <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter your email address'
                                required
                            />

                            <label>Phone Number <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Enter your phone number'
                                required
                            />

                            <label>Event Type <span style={{ color: 'red' }}>*</span></label>
                            <select
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>-- Select Event Type --</option>
                                <option value="Birthday Celebration">Birthday Celebration</option>
                                <option value="Wedding Celebration">Wedding Celebration</option>
                                <option value="Anniversary Celebration">Anniversary Celebration</option>
                                <option value="Graduation Celebration">Graduation Celebration</option>
                                <option value="Baby Shower">Baby Shower</option>
                                <option value="Corporate Catering">Corporate Catering</option>
                                <option value="Funeral">Funeral</option>
                                <option value="Private Event">Private Event</option>
                                <option value="Unveiling">Unveiling</option>
                                <option value="Other">Other</option>
                            </select>

                            <label>Date of Event <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="date"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                min={minDate}
                                required
                            />

                            <label>Number of Guests</label>
                            <input
                                type="number"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                min={1}
                            />

                            <label>Message <span style={{ color: 'red' }}>*</span></label>
                            <textarea type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                min={1}>

                            </textarea>

                            <label>Bot Protection <span style={{ color: 'red' }}>*</span></label>

                            <ReCAPTCHA
                                style={{ margin: '.5rem 0rem' }}
                                ref={recaptchaRef}
                                size={window.innerWidth < 400 ? "compact" : "normal"}
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)}
                            />

                            <button type='submit' disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending…' : 'Submit'}
                            </button>

                            {status === 'success' && (
                                <p style={{ color: 'green' }}>
                                    ✅ Your request was sent successfully!
                                </p>
                            )}

                            {status === 'error' && (
                                <p style={{ color: 'red' }}>
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}

                        </div>
                    </form>

                    <div className='contact-details'>
                        <img src={"img1"} loading='lazy' alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUs