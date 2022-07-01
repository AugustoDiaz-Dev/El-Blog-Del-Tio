import React from 'react'
import footerStyles from '../styles/footerStyles.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.container}>
            <hr className={footerStyles.hrColor} />
            &#169; Augusto Diaz, 2022.
        </footer>
    )
}

export default Footer