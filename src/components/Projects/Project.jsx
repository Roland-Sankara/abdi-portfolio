import React from 'react';

function Project(props){
    return(
        <div className="project-tile">
            <div>
                <img className="project-img" src={props.image} alt={props.name}/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p className="read-more"><a href={props.link}>Read More &rarr;</a></p>
        </div>
    )

}

export default Project;