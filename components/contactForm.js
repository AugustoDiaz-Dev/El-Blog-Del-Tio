import React, { useState } from 'react'
import styles from '../styles/contactForm.module.css'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name, email, message
        }
        console.log(formData);
    }
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>Mensage</h3>
            <input type="text"
                placeholder='Nombre'
                value={name}
                onChange={e => setName(e.target.value)}
                className={styles.marginBottom} />
            <input type="email"
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.marginBottom} />
            <textarea name="" id="" cols="30" rows="10"
                placeholder='Escriba su mensaje, por favor...'
                value={message}
                onChange={e => setMessage(e.target.value)}
                className={styles.marginBottom}>
            </textarea>
            <button className={styles.formBtn}>Enviar</button>
        </form>
    )
}

export default ContactForm