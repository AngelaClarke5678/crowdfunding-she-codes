import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [project, setProjectData] = useState({ pledges: [] });
    const { id } = useParams(); 
    
    useEffect(() => { 
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => { 
        return results.json(); 
        })
        .then((data) => { 
        setProjectData(data); 
    }); 
    }, []);

    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li>{pledgeData.amount} from {pledgeData.supporter}
                        </li>);
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;
