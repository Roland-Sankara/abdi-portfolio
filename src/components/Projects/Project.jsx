import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../../context/AppContext';

function Project(props){
    const {updateProject} = useContext(AppContext);
    return(
        <div className="project-tile">
            <div>
                <img className="project-img" src={props.image} alt={props.name}/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p className="read-more" onClick={()=>{
                updateProject({...props})
            }}>
                <Link to={props.name}>Read More &rarr;</Link>
            </p>
        </div>
    )

}

export default Project;