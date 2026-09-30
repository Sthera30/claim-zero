import React, { useEffect, useState } from 'react'
import '../css/navbar.css'
import { FaBars } from 'react-icons/fa'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import img1 from "../../public/SBB_logo_clean.svg"
import { FaTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';


function Navbar() {

    const [isClicked, setIsClicked] = useState(false)
    const [isGearClicked, setIsGearClicked] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [hideNavbar, setHideNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const closeMenu = () => {
        setIsClicked(false)
    }


    const location = useLocation();
    const navigate = useNavigate()

    const isGalleryPage = location.pathname.startsWith('/our-gallery');
    const showLogo = isGalleryPage || scrolled;

    const isSolidNavbar =
        scrolled ||
        location.pathname === '/our-services' ||
        location.pathname.startsWith('/our-gallery') ||
        location.pathname === '/contact-us';


    useEffect(() => {

        window.scrollTo(0, 0)


    }, [])

    useEffect(() => {
        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            // check both sections
            const ourStory = document.getElementById('OUR-STORY')
            const ourServices = document.getElementById('our-services')

            if (ourStory) {
                const top = ourStory.getBoundingClientRect().top
                setScrolled(top <= 80)
            }
            else if (ourServices) {
                const top = ourServices.getBoundingClientRect().top
                setScrolled(top <= 80)
            }
            else {
                if (currentScrollY > 80) {
                    setScrolled(true)
                } else {
                    setScrolled(false)
                }
            }

            // ✅ CLOSE MOBILE MENU ON SCROLL (ADD THIS HERE)
            if (currentScrollY > 10) {
                setIsClicked(false)
            }

            // (optional) close gear menu too
            if (isGearClicked) {
                setIsGearClicked(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [isGearClicked])



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80 && !isClicked) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isClicked]);


    useEffect(() => {
        const handleScroll = () => {
            if (isGearClicked) {
                setIsGearClicked(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isGearClicked]);

    const toggleGearClick = () => {
        setIsGearClicked(!isGearClicked);
    };


    return (
        <div className={`header ${isSolidNavbar ? 'header-scrolled' : 'header-top'} ${isClicked ? 'menu-open' : ''}`}>
            <div className='logo-design' style={{
                opacity: showLogo ? 1 : 0,
                transition: 'opacity 0.4s ease'
            }}>


            </div>



            <div className='right-design'>

                <div className={`right-design-inner ${isClicked ? 'show-nav' : ''}`}>

                    <NavLink to={"/"} onClick={closeMenu}>HOME</NavLink>
                    <NavLink to={"/about-us/"} onClick={closeMenu}>ABOUT US</NavLink>
                    <NavLink className={"serve"} to={"/our-services/"} onClick={closeMenu}>SERVICES</NavLink>

                    <div>
                        <div className="logo-orbit-wrapper">
                            <img src={img1} alt="" />
                            <div className="orbit-ring">
                                {[...Array(8)].map((_, i) => (
                                    <span key={i} className="orbit-dot" style={{ '--i': i }}></span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <NavLink to={"/our-gallery/"} onClick={closeMenu}>GALLERY</NavLink>
                    <NavLink className={"btnBookAppoint"} to={"/#book-appointment"} onClick={closeMenu}>Book An Appointment</NavLink>

                    {/*
                   
                   */}

                </div>

                <div className='bars-container'>

                    <FaBars onClick={() => setIsClicked(prev => !prev)} className='bars' style={{ color: isSolidNavbar || isClicked ? '#000' : '#fff', marginLeft: '1rem', cursor: 'pointer', display: 'none' }} />

                </div>

            </div>


        </div>
    )
}

export default Navbar
