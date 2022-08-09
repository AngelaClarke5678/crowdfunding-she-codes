import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
// userParams to reference the content in URL. give me specific data and i'll render off that state
    const { id } = useParams(); // 
    
    useEffect(() => { 
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`) // fecthing the API project page 
        .then((results) => {  // processing the result of the api and then saving it in state. Javascript promises, return statement will still load. 
        return results.json(); 
        })
        .then((data) => { 
        setProjectData(data); 
    }); 
    }, []); // provide the empty brackets and then it will run only once
    return ( // im rendering information.
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Open: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>{pledgeData.amount} from {pledgeData.supporter}
                        </li>);
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;
