import './Contact.scss';
import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';



export const Header = (props) => {
    return (
        <header>
            <span>{props.header}</span>
        </header>   
    );
};

const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_eys48z9', 
            'template_3d4t62m', 
            e.target, 
            'user_TgWOw2R2hyFuDxoJ1xlCk'
        )
        .then((result) => {
            return result;
        }, (error) => {
            return error;
        });
    };
    return (
        <section className="contact_" id='contact'>
            <Header header="Contact"/>
            <div className="container">
                <div className="col_right">
                    <form ref={form} onSubmit={sendMail}>
                        <h2>Get in Touch</h2>
                        <input type="text" placeholder="Your Name" name="name"/>
                        <input type="text" placeholder="Your Email Address" name="user_mail"/>
                        <input type="text" placeholder="Your Subject" name="subject"/>
                        <textarea type="text" placeholder="Enter your Message" name="message"/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <footer>
                    <span>© 2019 createuiux. All rights reserved.</span>
                    <div className="logo">
                        <img src="/assets/fb.svg" alt=""/>
                        <img src="/assets/fb.svg" alt=""/>
                        <img src="/assets/fb.svg" alt=""/>
                    </div>
            </footer>
        </section>
    );
};

export default Contact;