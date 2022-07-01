import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'
import Footer from './footer'
import Router from 'next/router'
import NProgress from 'nprogress'

// NProgress 
Router.onRouteChangeStart = url => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.done();
}
const name = 'El blog del tío'
export const siteTitle = 'El blog del tío'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Mi Blog personal"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <script src='nprogress.js'></script>
                <link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
            </Head>

            <Navbar />

            <header className={styles.header}>
                {home ? (
                    <>
                        <Link href="/about">
                            <a className={utilStyles.marginT1}>
                                <Image
                                    priority
                                    src='/images/profile1-round.png'
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt={'Photo of' + name}
                                />

                            </a>
                        </Link>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .8,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .4
                                    }
                                }
                            }}
                            className={utilStyles.heading2Xl}>{name}</motion.h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a className={utilStyles.marginT1}>
                                <Image
                                    priority
                                    src='/images/profile1-round.png'
                                    className={utilStyles.borderCircle}
                                    height={124}
                                    width={124}
                                    alt={'Photo of' + name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {
                !home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Volver al inicio</a>
                        </Link>
                    </div>
                )
            }
            <Footer />
        </div >
    )
}