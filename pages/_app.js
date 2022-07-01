import '../styles/global.css';
import { motion } from 'framer-motion';

// Global css files can only be imported in here.
export default function App({ Component, pageProps, router }) {
    return (
        <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: 1,
                },
            }}>
            <Component {...pageProps} />
        </motion.div>
    );
}