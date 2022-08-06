import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function HomePage() { 
    const [projectData, updateProjectData] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
        .then (res => res.json())
        .then(data => updateProjectData(data))

    },[])

    return (
    <div>
        {projectData.map((project, key) => { 
            <ProjectCard key={key} project={project} />;
        })}
        </div>
        ); 
    }

export default HomePage;