import React from 'react'
import '../css/loader.css'

function Loader() {
    return (
        <div className='loader-overlay'>
            <div className='loader-inner'>
                <div className='spinner'></div>
            </div>
        </div>
    )
}

export default Loader