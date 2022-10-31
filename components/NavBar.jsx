import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'
import { HiMenuAlt2 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import navStyles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    const [pageHeight, setPageHeight] = useState(null)

    const [mobileNav, setMobileNav] = useState(false)

    const handleScroll = () => {
        setPageHeight(window.scrollY)
    }

    // const download = () => {
    //     console.log('download')
    //     const URL = 'http://dynamic-link.com/sample.xlsx'
    //     if (typeof window !== "undefined") {
    //         window.location.href = URL
    //     }
    // }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })


    const handleToggle = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <nav className={`${navStyles.nav} ${pageHeight > 10 ? navStyles.scrolled : ''}`}>
            <div className={navStyles.logo}>
                <Link href='/'>
                    <span>NkanYi</span>
                </Link>
            </div>
            <div className={`${mobileNav ? navStyles.mobile : navStyles.menu}`}>
                <ul>
                    <li>
                        <a
                            href='#about-me'
                            onClick={e => {
                                let about = document.getElementById('about-me');
                                e.preventDefault()
                                about && about.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>About</a>
                    </li>
                    <li>
                        <a
                            href='#why-Sov'
                            onClick={e => {
                                let why = document.getElementById('why-Sov');
                                e.preventDefault()
                                why && why.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>Why SovTech?</a>
                    </li>
                
                 
                </ul>
                {/* <Button click={download} text='Resume' /> */}
            </div>
            <div className={navStyles.mobileMenu} onClick={handleToggle}>
                {mobileNav ? <CgClose /> : <HiMenuAlt2 />}
            </div>
        </nav >
    )
}

export default Navbar