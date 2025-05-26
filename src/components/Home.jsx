import React from 'react';

function Home(){
    return (
        <section className="home" id="home">
            <div className="home-text">
                <h3>Hello, I'm</h3>
                <h1>Musa Kamara</h1>
                <h5>A Creative Developer <span>From Accra, Ghana</span></h5>
                <p>I build visually stunning and highly functional web applications with a blend of creativity and code.<br/>I specialize in crafting mobile-first, user-centric experiences using cutting-edge technologies.</p>
                <div className="social">
                <a href="https://github.com/musakamara" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a>
                <a href="https://instagram.com/musacreates" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in"></i></a>
                <a href="https://linkedin.com/in/musakamara" target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
                <a href="tel:+256-912734001" title="tel:+256-912734001"><i className="fab fa-whatsapp"></i></a>
                </div>
                <a href="#" className="btn">About Me</a>
            </div>
    
            <div className="home-img">
                <img src="new-hero-photo.png" alt="Image of Abdu"/>
            </div>
        </section>
    )
}

export default Home;