import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = (props) => {
    const { project } = props;
    console.log(project)
    return (
        <div className='project-card'>
            <Link to={`/project/${project.id}`}>
                <img src={project.image} />
                <h3>{project.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;