import React from 'react';
import Project from './Project';

function Projects(){
    return(
        <section className="portfolio" id="portfolio">
            <div className="heading">
                <h3>Portfolio</h3>
                <h2>My Amazing Work</h2>
                <p>Take a look at some of my projects</p>
            </div>

            <div id="projects">
                <Project 
                    name="GHK-Project" 
                    image="jovik.png" 
                    description="but it will include different types of healthy food wuth images and prices.Im really excited about this project, because i want more people to start eating clean and healthy food."
                    link="https://ghk-test.herokuapp.com/"
                />

                <Project 
                    name="Healthy Food" 
                    image="food.png" 
                    description="This is a project which im still working with. Bascially i got inspiration from a online Food resturant website, that offers healthy food. I`m not yet done with the whole project yet, but it will include different types of healthy food wuth images and prices.Im really excited about this project, because i want more people to start eating clean and healthy food."
                />

                <Project 
                    name="Healthy Food" 
                    image="food.png" 
                    description="This is a project which im still working with. Bascially i got inspiration from a online Food resturant website, that offers healthy food. I`m not yet done with the whole project yet, but it will include different types of healthy food wuth images and prices.Im really excited about this project, because i want more people to start eating clean and healthy food."
                />

            </div>
        </section>
    )
}

export default Projects;