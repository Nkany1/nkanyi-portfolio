import React, { useEffect } from "react"
import Button from "../components/Button"
import heroStyles from '../styles/section/Hero.module.css'
import Social from "../components/Social"
import { motion } from "framer-motion"


const Hero = () => {

    return (
        <motion.section className={heroStyles.hero}
            initial={{ y: 30, opacity: 0 }}
            animate={{
                y: 0, opacity: 1, transition: {
                    duration: 0.5
                }
            }
            }
        >
            <div>
                <h1 className={heroStyles.heading}>
                    <span className={heroStyles.salute}>Hi, I'm</span>
                    <span>Nkanyiso Mncwabe,</span>
                    <span>Software Engineer</span>
                </h1>
                <p className={heroStyles.intro}>A recent graduate from the University of KwaZulu-Natal with a Bachelor's degree in computer science and Information technology</p>
             
            </div>
            
        </motion.section>
    )
}

export default Hero