import Link from 'next/link'
// import { motion } from 'framer-motion'
import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from 'react-icons/bs'

const Social = ({ row }) => {
    // const stagger = {
    //     animate: {
    //         transition: {
    //             staggerChildren: 0.2,
    //             delay: 2
    //         }
    //     }
    // }
    // const fadeIn = {
    //     initial: { y: 30, opacity: 0 },
    //     animate: {
    //         y: 0, opacity: 1, transition: {
    //             duration: 0.5
    //         }

    //     }
    // }
    return (
        <div>
            <div className={`${row === 'true' ? 'socialRow' : 'socialColumn'}`}>
                <Link className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsLinkedin /></Link>
                <Link  className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsTwitter /></Link>
                <Link  className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsGithub /></Link>
                <Link  className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsInstagram /></Link>
            </div>
            <style jsx>
                {
                    `
                    .socialColumn {
                        display: flex;
                        flex-direction: row;
                    }
                    .socialRow {
                        display: flex;
                        flex-direction: column;
                    }
                    .icon {
                        margin: 1rem 0
                    }
                    .iconSpaceRow {
                        margin: 2rem
                    }
                    .icon:hover,
                    .iconSpaceRow:hover {
                        transform: scale(2);
                        color: var(--btn-border)
                    }
                    @media(max-width: 600px) {
                        .iconSpaceRow {
                        margin: 1rem
                    }
                    }
                    `
                }
            </style>
        </div>
    )
}

export default Social