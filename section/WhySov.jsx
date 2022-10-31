import Image from 'next/image'
import Heading from '../components/Heading'
import aboutStyles from '../styles/section/About.module.css'
import sovtech from "../public/images/sov1.png"
import { motion } from "framer-motion"
import { animateIn } from '../components/Animation'
import { useScroll } from '../components/useScroll'


const WhySov = () => {
    const [element, controls] = useScroll()
    return (
        <section id='why-Sov' ref={element}>
            <Heading title='Why SovTech?' />
            <motion.div variants={animateIn} animate={controls} className={aboutStyles.container}>
              <div className={aboutStyles.img}>
                 <Image
                   src={sovtech}
                   width={300}
                   height={100}
                   alt='Profile Picture'
                   className={aboutStyles.profileImg}
                  />
              </div>
                <div className={aboutStyles.aboutme}>
                    <div className={aboutStyles.desc}>
                        <p>Kick starting my software development career at SovTech would be a blessing cause i will be exposed to more mainstream project and building
                        them using modern tech stack that will definitely accelerate my career growth</p>
                        <p>Also the mentorship  from senior software developers will help me a lot to improve and become the best software developer in the field</p>
                        <div className={aboutStyles.stack}>
                            <ul className={aboutStyles.stackList}>
                                <li>Mentorship</li>
                                <li>world-class projects</li>
                            </ul>
                            <ul>
                                <li>Growth</li>
                                <li>Company culture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </motion.div>
        </section>
    )
}

export default WhySov