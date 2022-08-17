import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectForm = (projectData) => {
    const [project, SetProject] = useState(
        projectData.map
    );
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        SetProject({...project, [id]: value
        })
    }

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}projects/`,
            {
                method: "post",
                headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: project.title, 
              description: project.description,
              goal: parseInt(project.goal),
              image: project.image,
              is_open: project.is_open === "on",
              date_created: new Date(project.date_created).toISOString(),
              category: project.category
            }),
        }
        );
        return response.json();
    }

    const token = window.localStorage.getItem("token",);
    console.log("PostData", project, token)

        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (token && project.title && project.description && project.goal && project.image && project.date_created && project.category) 
            {
            postData().then((response) => {
                navigate("/");
            });
        }
    };


    return (
        <form>
        <div>
        <label htmlFor="Title">Title:</label>
        <input type="text" 
        id="Title" 
        placeholder="Enter title" 
        onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input type="text" 
        id="description" 
        placeholder="description" 
        onChange={handleChange}/></div>
        <div>
        <label htmlFor="image">Image:</label>
        <input type="text" 
        id="Image" 
        placeholder="Image" 
        onChange={handleChange}/></div>
        <div>
        <label htmlFor="Goal">Goal:</label>
        <input type="text" 
        id="goal" 
        placeholder="goal" 
        onChange={handleChange}/></div>
        <button type="submit" onClick={handleSubmit}>submit</button>
        </form>

);

} 

export default ProjectForm;