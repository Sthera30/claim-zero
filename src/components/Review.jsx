import React from 'react'
import '../css/review.css'
import img1 from "../../public/Siya Meals LOGO_Artboard 1.png"

function Review() {

   { const clients = [
        { name: 'Company One', logo: img1 },
        { name: 'Company Two', logo: img1 },
        { name: 'Company Three', logo: img1 },
        { name: 'Company Four', logo: img1 },
        { name: 'Company Five', logo: img1 },
    ]

    // duplicate for seamless infinite loop
    const allClients = [...clients, ...clients]

    return (
        <div className="review-container">

            <div className='heading-desc'>
                <h2>Trusted By Those Who Matter</h2>
                <p className='brand-desc'>
                    From corporate teams to event organisers, these are some of the organisations 
                    that have trusted Siya Meals to deliver quality catering — and keep coming back.
                </p>
            </div>

            <div className="slider-wrapper">
                <div className="slider-track">
                    {allClients.map((client, index) => (
                        <div key={index} className='client-card'>
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )}
}

export default Review