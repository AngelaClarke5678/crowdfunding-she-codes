import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";



function ProjectPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [projectData, setProjectData] = useState({ pledges: [] });
// userParams to reference the content in URL. give me specific data and i'll render off that state
    const { id } = useParams(); // 
    
    useEffect(() => {
        setIsLoading(true); 
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`) // fecthing the API project page 
        .then((results) => {  // processing the result of the api and then saving it in state. Javascript promises, return statement will still load. 
        return results.json(); 
        })
        .then((data) => { 
        setProjectData(data);
        setIsLoading(false) 
    }); 
    }, [id]); // provide the empty brackets and then it will run only once
// Loading State
    if (!projectData) {
        return <h3>Loading Project...</h3>
        };
    return ( // im rendering information.
        <div id="project-page">
             {isLoading ? <LoadingSpinner /> :
             <div>
                <div>
            <h2>{projectData.title}</h2>
            <img src={projectData.image}/>
            <h3>Created at: {new Date(projectData.date_created).toDateString()}</h3>
            <h3>{projectData.description}</h3>
            <h3>{`Open: ${projectData.is_open}`}</h3>
            <button type="submit" className="pledge-button">Pledge</button>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>{pledgeData.amount} from {pledgeData.supporter}
                        </li>);
                })}
            </ul>
        </div>
        </div>
            }
            </div>
    );
}

export default ProjectPage;
