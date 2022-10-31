import footerStyles from '../styles/section/Footer.module.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.footer}>
                <span>Crafted by <span className={footerStyles.crafted}>Nkanyiso Mncwabe</span></span>
                <div className={footerStyles.socialIcon}>
                <a  href="https://linkedin.com/in/nkanyiso-mncwabe-68b74a104" target="_blank">
                   <BsLinkedin className={footerStyles.Linkein} size="3rem" />
                 </a>
                <a  href="https://github.com/Nkany1" target="_blank">
                   <BsGithub className={footerStyles.Github} size="3rem" />
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer