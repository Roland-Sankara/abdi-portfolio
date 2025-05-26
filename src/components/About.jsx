import React from 'react';

function About(){
    return(
        <section className="about" id="about">
            <div className="about-img">
                <img src="about-me.png" alt="About image"/>
            </div>
    
            <div className="about-text">
                <h3>I'm a Developer</h3>
                <h2>I Can Design and Build Engaging Digital Products</h2>
                <p>Hi there! I’m Musa, a passionate web developer with a keen eye for design and over 3 years of hands-on experience in frontend technologies. I thrive on turning complex problems into intuitive digital solutions. From wireframes to deployment, I enjoy bringing ideas to life and collaborating with teams to build impactful experiences.</p>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </section>
    )
}

export default About;