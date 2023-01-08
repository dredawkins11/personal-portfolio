import React from 'react';
import "./Project.scss"

const Project = (props) =>{
    return (
        <div className='project-item' style={props.styles}>
            <h2>Project {props.index}</h2>
        </div>
    )
}
export default Project