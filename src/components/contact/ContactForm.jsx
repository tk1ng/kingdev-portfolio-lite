import axios from 'axios';
import { useRef, useReducer, useState } from 'react';
import { Button } from '../ui/Button/Button';

import styles from './ContactForm.module.css';

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            email: '',
            message: '',
        }
    };

    return {
        ...state,
        [event.name]: event.value,
    }
};

const ContactForm = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [isSending, setIsSending] = useState(false);
    const [showSent, setShowSent] = useState(false);
    const form = useRef();

    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };
// TODO: Add optimistic handling
    const sendEmail = (event) => {
        event.preventDefault();
        setIsSending(true);
        
        axios.post(`https://kingdev-engine.onrender.com/email`, formData)
        .then(res => {
            setIsSending(false);
            setShowSent(true);
        })
        .catch(err => {
            // handle error
            console.log(err);
        });
    };

    const resetForm = () => {
        setFormData({reset: true});
        setShowSent(false);
    };

    return ( 
        <div id='contact' className={styles.formContainer}>
            { !showSent ? <div className={styles.formTopper}><h2>Connect with me!</h2><p> <span className="emphasis">Send a message</span> if you have an idea for a <span className="emphasis">project</span> or collaboration (new website, redesign, application, etc.), want to talk tech, or just to <span className="emphasis">hi</span>! 👋🏾</p></div> : <h3>I'm Excited to read your message!</h3> }
            { !showSent &&
                <form ref={form} onSubmit={sendEmail}>
                    <fieldset className={styles.contact} disabled={isSending}>
                        <label htmlFor='name'>YOUR NAME</label>
                        <input type='text' name='name' placeholder='Jedi' value={formData.name || ''} onChange={handleChange}/>
                        <label htmlFor='email'>EMAIL</label>
                        <input type='email' name='email' placeholder='luke.skywalker@email.com' value={formData.email || ''} onChange={handleChange} />
                        <label htmlFor='message'>MESSAGE</label>
                        <textarea type='textarea' rows='8' name='message' placeholder='Share your message...' value={formData.message || ''} onChange={handleChange} />
                        <Button cta='Submit' primary />
                    </fieldset>
                </form>
            }
           {showSent &&
                <div className={styles.thanks}>
                    <p>I will reply by email as soon as I can.</p>
                    <button className='btn' onClick={resetForm}>New message</button>
                </div>
            }
        </div>
     );
}
 
export default ContactForm;