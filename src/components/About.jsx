import React from 'react';

function About(){
    return(
        <section className="about" id="about">
            <div className="about-img">
                <img src="about-me.png" alt="About image"/>
            </div>
    
            <div className="about-text">
                <h3>I'm a Developer</h3>
                <h2>I Can Design and Develop anything you want</h2>
                <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 2 years of experience as a web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design and development process, from discussion and collaboration.</p>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </section>
    )
}

export default About;