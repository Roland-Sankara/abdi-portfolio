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
                    image="project-one.png" 
                    description="This is a project which im still working with. Bascially i got inspiration from a online Food resturant website, that offers healthy food. I`m not yet done with the whole project yet, but it will include different types of healthy food wuth images and prices.Im really excited about this project, because i want more people to start eating clean and healthy food."
                    link="https://ghk-test.herokuapp.com/"
                    code="https://ghk-test.herokuapp.com/"
                    background="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                    improvements="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                />

                <Project 
                    name="Gjovik By" 
                    image="project-two.png" 
                    description="This is a project which im still working with. Bascially i got inspiration from a online Food resturant website, that offers healthy food. I`m not yet done with the whole project yet, but it will include different types of healthy food wuth images and prices.Im really excited about this project, because i want more people to start eating clean and healthy food."
                    link="https://www.figma.com/file/u05oXdjJOqMUt9UPghgLPT/Untitled?node-id=356%3A2657"
                    code=""
                    background="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                    improvements="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                />

                <Project 
                    name="Personal Portfolio" 
                    image="project-three.png" 
                    description="This is a project which im still working with. Bascially i got inspiration from a online Food resturant website, that offers healthy food. I`m not yet done with the whole project yet, but it will include different types of healthy food wuth images and prices.Im really excited about this project, because i want more people to start eating clean and healthy food."
                    link="http://abdu-amaan-portfolio.netlify.app"
                    code="https://github.com/Roland-Sankara/abdi-portfolio"
                    background="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                    improvements="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                />

            </div>
        </section>
    )
}

export default Projects;
