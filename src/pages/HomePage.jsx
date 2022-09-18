import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import HeroSection from '../components/HeroSection';
import LoadingSpinner from "../components/LoadingSpinner";



< HeroSection />

function HomePage() { 
    const [isLoading, setIsLoading] = useState(false);
    const [projectData, updateProjectData] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
        .then (res => res.json())
        .then(data => {
            updateProjectData(data)
            setIsLoading(false)
        })
    }, []);

    return (
        <div id="project-list">
            {
                isLoading
                    ? <LoadingSpinner /> 
                    : projectData.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData}/>;
                    })
            }
        </div>
    );
}
export default HomePage;