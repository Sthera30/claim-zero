import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { FaClock } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import '../css/appointment.css'

function Appointment() {

    const [selectedTime, setSelectedTime] = useState("9:00 AM");
    const [status, setStatus] = useState(null);
    const timeSlots = ["9:00 AM", "10:00 AM", "12:00 PM", "13:30 PM", "15:00 PM", "16:30 PM", "18:00 PM"];

    const formRef = useRef();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#book-appointment') {
            const el = document.getElementById('book-appointment');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            'service_kqqamgo',
            'template_sovkk6b',
            formRef.current,
            '48BabIialA25snq-X'
        )
            .then(() => {
                setStatus('success');
                formRef.current.reset();
                setSelectedTime("9:00 AM");
            })
            .catch((err) => {
                console.error(err);
                setStatus('error');
            });
    };

    return (
        <>

            <div className='appointment-container' id='book-appointment'>

                <div className='appointment-inner'>

                    <h2>BOOK YOUR VISIT</h2>
                    <h3 style={{fontSize: '1.3rem'}}>Schedule Your<span>&nbsp;Beauty</span>&nbsp;Appointment</h3>
                    <p>Reserve a chair with us. Tell us what you'd like done, pick a time that suits your day, and we'll have everything ready when you walk in.</p>

                </div>

            </div>

            <div className='app-container'>

                <div className='app-box-inner'>

                    <div className='app_box'>

                        <h2>Nail Services</h2>
                        <p>Shape, cuticle care, gel polish or classic manicure</p>

                    </div>

                </div>

                <div className='app-box-inner'>

                    <div className='app_box'>

                        <h2>Make-Up</h2>
                        <p>Skin prep, contour, full face application</p>

                    </div>

                </div>

                <div className='app-box-inner'>

                    <div className='app_box'>

                        <h2>Wig Installation</h2>
                        <p>Lace melt, customization, styling included</p>

                    </div>

                </div>

                <p className='time'><FaClock style={{ color: 'hsl(350, 67%, 49%)' }} />&nbsp;We hold each booking for 15 minutes past your slot — after that it's released, so please arrive a little early.</p>

                <div className='form-container'>

                    <div className='form-'>

                        <form ref={formRef} onSubmit={handleSubmit}>

                            <h2>Reserve your slot</h2>
                            <p className='field_'>Fields marked are required to confirm your booking.</p>

                            <label>FULL NAME</label>
                            <input type="text" name="user_name" placeholder='Enter your name' required />

                            <label>EMAIL</label>
                            <input type="email" name="user_email" placeholder='Enter your email address' required />

                            <label>PHONE</label>
                            <input type="tel" name="user_phone" placeholder='(+27) 123 456 789' required />

                            <label>SERVICE</label>
                            <select name="service" required defaultValue="">
                                <option disabled value="">

                                    Choose a service

                                </option>

                                <option>
                                    Make-up
                                </option>

                                <option>
                                    Wig Installation
                                </option>

                                <option>
                                    Nail Services
                                </option>

                            </select>

                            <label>PREFERRED DATE</label>
                            <input type="date" name="date" required />

                            <label className='pref'>PREFERRED TIME</label>
                            <input type="hidden" name="time" value={selectedTime} />
                            <div className='time_'>
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        className={selectedTime === slot ? 'selected' : ''}
                                        onClick={() => setSelectedTime(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>

                            <label>NOTES (OPTIONAL)</label>
                            <textarea name="notes" placeholder='Anything we should know before your visit?'></textarea>
                            <button className='btnBook' type="submit" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Book My Appointment'}
                            </button>

                            {status === 'success' && (
                                <p className='confirm success'>
                                    Your booking request has been sent! We'll confirm with you shortly.<br /><br />
                                </p>
                            )}
                            {status === 'error' && (
                                <p className='confirm error'>Something went wrong. Please try again or contact us directly.</p>
                            )}
                            {status === null && (
                                <p className='confirm'>You'll receive a confirmation by email and text.</p>
                            )}
                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Appointment
