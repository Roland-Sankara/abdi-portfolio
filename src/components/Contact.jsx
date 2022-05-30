import React from 'react';

function Contact(){
    return (
        <section className="contact" id="contact">
            <div>
                <div id="contact-section" className="top-margin">
                    <h2 className="top-padding">Get In Touch</h2>
                    <p>Am open to new opportunities for growth in technology, my inbox is always open, whether you have a question, an opportunity or just saying hello. I'll be very glad to reach out.</p>
                    <div className="social" id="contact-icons">
                        <a href="https://github.com/Abdi101" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/abdirahman.amaan" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.linkedin.com/Abdi101" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="tel:+47-94734001" title="tel:+47-94734001"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <p className="btn"><a href="mailto:amaandhere@gmail.com" target="_blank">Say Hello</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;