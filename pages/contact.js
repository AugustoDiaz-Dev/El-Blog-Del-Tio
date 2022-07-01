import Link from 'next/link'
import Layout from '../components/layout'
import { FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import ContactForm from '../components/contactForm';
// import { styles } from './styles/contactForm.module.css'

const contact = () => {
    return (
        <Layout>
            <h2>Contacto</h2>
            <p>¡Gracias por pasar! Me gustaría que sigamos en contacto.</p>
            <p>
                <a href="https://github.com/AugustoDiaz-Dev"><HiOutlineMail /> Email</a>
            </p>
            <p>
                <a href="https://github.com/AugustoDiaz-Dev"><FaInstagramSquare /> Instagram</a>
            </p>
            <p>
                <a href="https://github.com/AugustoDiaz-Dev"><FaGithubSquare /> Github</a>
            </p>

            <ContactForm />

        </Layout>
    )
}

export default contact