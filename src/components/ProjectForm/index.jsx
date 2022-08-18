import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectForm = (projectData) => {
    const [project, PostProject] = useState(
        projectData.map
    );
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        PostProject((prevProjectData) => ({
        ...prevProjectData,
        [id]: value,
        }));
    };

    const token = window.localStorage.getItem("token",);

    const SubmitProject = async (event) => {
        event.preventDefault();

        if (token && project.title && project.description && project.goal && project.image);
        try { 
            const response = await fetch(
            `${process.env.REACT_APP_API_URL}projects/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
            body: JSON.stringify({
            title: project.title, 
            description: project.description,
            goal: project.goal,
            image: project.image,
            is_open: project.is_open === "on",
            date_created: new Date(project.date_created).toISOString()
            }),
        }
        );
        const data = await response.json();
        navigate(`/project/${data.id}`);
    } catch (err) {
            console.log(err);
        }
        
    };

    return (
        <form>
        <div>
        <label htmlFor="Title">Title:</label>
        <input type="text" 
        id="title" 
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
        id="image" 
        placeholder="Image" 
        onChange={handleChange}/></div>
        <div>
        <label htmlFor="Goal">Goal:</label>
        <input type="text" 
        id="goal" 
        placeholder="goal" 
        onChange={handleChange}/></div>
         <div>
        <label htmlFor="datetime">Date:</label>
        <input type="date" 
        id="date_created" 
        onChange={handleChange}/></div>
        <button type="submit" onClick={SubmitProject}>submit</button>
        </form>

);

} 

export default ProjectForm;