import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main_layout from './layout/Main_layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import ServicesPages from './pages/ServicesPages.jsx'
import GalleryPages from './pages/GalleryPages.jsx'
import Loader from '../src/components/Loader.jsx'


function App() {

    const [loading, setLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 800)
        return () => clearTimeout(timer)
    }, [location.pathname])


    return (

        <>

            {loading && <Loader />}

            <Routes>

                <Route path={"/"} element={<Main_layout />}>

                    <Route index element={<HomePage />} />
                    <Route path={'/about-us/'} element={<AboutUsPage />} />
                    <Route path={'/our-services/'} element={<ServicesPages />} />
                    <Route path={'/our-gallery/'} element={<GalleryPages />} />
                    <Route path={`/contact-us`} element={<ContactUsPage />} />

                </Route>

            </Routes>

        </>

    )

}

export default App
