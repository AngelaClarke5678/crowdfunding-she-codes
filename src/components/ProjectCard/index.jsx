import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = (props) => {
    const { projectData } = props;
    console.log(projectData)
    return (
        <div className='project-card'>
            <Link to={`/project/${projectData.id}`}> 
            {/* string */}
                <img src={projectData.image} alt={projectData.title} />
                <h3>{projectData.title}</h3>
                <h3>Goal: ${projectData.goal}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;

