import styles from './ContactForm.module.css';

const ContactForm = () => {
    return ( 
        <div className={styles.formContainer}>
            <h3>Connect with me!</h3>
            <form className={styles.contact}>
                <label for='name'>YOUR NAME</label>
                <input type='text' placeholder='Your name'/>
                <label for='email'>EMAIL</label>
                <input type='email' placeholder='luke.skywalker@email.com' />
                <label for='message'>MESSAGE</label>
                <textarea type='textarea' rows='8' placeholder='Share your message...' />
                <button className='btn'>Submit</button>
            </form>
        </div>
     );
}
 
export default ContactForm;