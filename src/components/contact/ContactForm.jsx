const ContactForm = () => {
    return ( 
        <form>
            <input type='text' placeholder="Subject"/>
            <input type='email' placeholder="Your email address" />
            <input type='textarea' placeholder="Share your message..." />
            <button>Submit</button>
        </form>
     );
}
 
export default ContactForm;