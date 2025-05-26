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
                    name="EduBridge Platform" 
                    image="https://pbs.twimg.com/profile_images/791704813515993088/i-ePSlf9_400x400.jpg" 
                    description="A responsive web app built for educational institutions to manage online classes, assignments, and student progress. Developed using React.js, Firebase, and Tailwind CSS."
                    link="https://www.edubridgeindia.com/"
                    code="#"
                    background="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                    improvements="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                />

                <Project 
                    name="Ghana Eats" 
                    image="https://cdn.modernghana.com/content__/640/457/59202413457-i41p266gfa-img3772.jpeg" 
                    description="A food discovery and delivery web app showcasing local dishes from across Ghana. Built using Next.js and a MongoDB backend. Designed for both web and mobile with responsive layout and seamless UX."
                    link="https://globeaware.org/news/globe-aware-news/1792-12-traditional-dishes-of-ghana"
                    code=""
                    background="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                    improvements="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                />

                <Project 
                    name="Personal Portfolio" 
                    image="project-three.png" 
                    description="This personal website reflects my journey in tech and showcases my skills and past projects. It’s designed using pure HTML, SCSS, and vanilla JavaScript, with animations powered by GSAP"
                    link="#"
                    code="https://github.com/musakamara/portfolio"
                    background="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                    improvements="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                />

            </div>
        </section>
    )
}

export default Projects;
