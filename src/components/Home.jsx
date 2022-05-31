import React from 'react';

function Home(){
    return (
        <section className="home" id="home">
            <div className="home-text">
                <h3>Hello, I'm</h3>
                <h1>Abdirahman Ahmed</h1>
                <h5>A Web Developer <span>From Norway</span></h5>
                <p>I design and develop responsive mobile-first sites with my knowledge on various web technologies and I'm very passionate <br/> and dedicated to my work.</p>
                <div className="social">
                <a href="https://github.com/Abdi101" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/abdirahman.amaan" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.linkedin.com/Abdi101" target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
                <a href="tel:+47-94734001" title="tel:+47-94734001"><i className="fab fa-whatsapp"></i></a>
                </div>
                <a href="#" className="btn">About Me</a>
            </div>
    
            <div className="home-img">
                <img src="ahmed-image.png" alt="Image of Abdu"/>
            </div>
        </section>
    )
}

export default Home;