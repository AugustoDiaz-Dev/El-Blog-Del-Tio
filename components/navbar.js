import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.navButton}>Inicio</a>
            </Link>
            <Link href="/about">
                <a className={styles.navButton}>Acerca</a>
            </Link>
            <Link href="/contact">
                <a className={styles.navButton}>Contacto</a>
            </Link>
        </nav>
    )
}

export default navbar