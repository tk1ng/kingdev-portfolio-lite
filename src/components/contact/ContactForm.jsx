import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [showSent, setShowSent] = useState(false);
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_ubqc0bl', 'template_rs3pivk', form.current, 'qYGSdcA_taaxjdo9B')
        .then((res) => {
            setShowSent(true);
        }, (err) => {
            console.log(err);
        })
    }

    const resetForm = () => {
        setShowSent(false);
    }

    return ( 
        <div id='contact' className={styles.formContainer}>
            { !showSent ? <h3>Connect with me!</h3> : <h3>I'm Excited to read your message!</h3> }
            { !showSent &&
                <form ref={form} onSubmit={sendEmail} className={styles.contact}>
                    <label htmlFor='name'>YOUR NAME</label>
                    <input type='text' name='from_name' placeholder='Your name'/>
                    <label htmlFor='email'>EMAIL</label>
                    <input type='email' name='reply_to' placeholder='luke.skywalker@email.com' />
                    <label htmlFor='message'>MESSAGE</label>
                    <textarea type='textarea' rows='8' name='message' placeholder='Share your message...' />
                    <button className='btn'>Submit</button>
                </form>
            }
           {showSent &&
                <div className={styles.thanks}>
                    <p>I will reply as soon as I can.</p>
                    <button className='btn' onClick={resetForm}>New message</button>
                </div>
            }
        </div>
     );
}
 
export default ContactForm;