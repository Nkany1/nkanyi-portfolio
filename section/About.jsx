import Image from 'next/image'
import Heading from '../components/Heading'
import aboutStyles from '../styles/section/About.module.css'
import { motion } from "framer-motion"
import { animateIn } from '../components/Animation'
import { useScroll } from '../components/useScroll'
import fullstack from "../public/images/fullstack.png"

const About = () => {
    const [element, controls] = useScroll()
    return (
        <section id='about-me' ref={element}>
            <Heading title='About Me' />
            <motion.div variants={animateIn} animate={controls} className={aboutStyles.container}>
                <div className={aboutStyles.aboutme}>
                    <div className={aboutStyles.desc}>
                        <p>I am passionate about tech and building web applications, learning new concept, empowering my knowlegde and sharing it. </p>
                        <p>I have an outstanding problem solving skill with the ability to work with technical and abstract concept effeciently  </p>
                        <p>I have worked with a range of modern web technologies in the development world, from frontend to backend to ensure accessibility, responsive design,
                         continuous deployment and easy to maitain web applications. I also do software testing</p>
                        <p>Here are some of the technologies I work with:</p>
                        <div className={aboutStyles.stack}>
                            <ul className={aboutStyles.stackList}>
                                <li>JavaScript</li>
                                <li>Css</li>
                                <li>ReactJs</li>
                            </ul>
                            <ul>
                                <li>NextJs</li>
                                <li>Redux</li>
                                <li>NodeJs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={aboutStyles.img}>
                    <Image
                        src={fullstack}
                        width={400}
                        height={300}
                        alt='Profile Picture'
                        className={aboutStyles.profileImg}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default About