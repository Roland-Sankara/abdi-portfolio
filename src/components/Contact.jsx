import React from 'react';

function Contact(){
    return (
        <section className="contact" id="contact">
            <div>
                <div id="contact-section" className="top-margin">
                    <h2 className="top-padding">Get In Touch</h2>
                    <p>Whether you’re hiring, seeking collaboration, or just want to say hello, I’m always open to connecting with like-minded creatives and tech enthusiasts. Let's build something great together!</p>
                    <div className="social" id="contact-icons">
                        <a href="https://github.com/musakamara" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://instagram.com/musacreates" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://linkedin.com/in/musakamara" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="tel:+256-912734001" title="tel:+256-912734001"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <p className="btn"><a href="mailto:hello@musakamara.dev" target="_blank">Say Hello</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;