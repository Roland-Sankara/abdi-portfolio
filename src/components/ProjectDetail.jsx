import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import AppContext from '../context/AppContext';

function ProjectDetail(){
    const {data} = useContext(AppContext);
    const {project} = useParams();
    return(
        <div className="project-detail">
            <div className='projectd-img'>
            
            </div>

            <div className="projectd-info">
                <h1>{project}</h1>
                <p>{data.description}</p>

                <div className='external-links'>
                    <p><a href={data.link}>Live Demo</a></p>
                    <p><a href={data.code}>Codebase</a></p>
                </div>

                <h3>Background</h3>
                <p>{data.background}</p>

                <h3>Improvements</h3>
                <p>{data.improvements}</p>
            </div>

            
        </div>
    )
}

export default ProjectDetail;