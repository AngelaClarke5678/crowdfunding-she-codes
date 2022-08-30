import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NewUser.css'

const NewUserForm = () => {
    const [user, setUser] = useState({
        "username": "",
        "password": "",
        "email": "",
        "bio": "",
        "image": "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser((prevUser) => ({
        ...prevUser,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.username && user.password && user.email && user.bio && user.image);
        try { 
            const response = await fetch(
            `${process.env.REACT_APP_API_URL}users/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            username: user.username,
            password: user.password,
            email: user.email,
            bio: user.bio,
            profile_image: user.profile_image,
            }),
        }
        );
        const data = await response.json();
        console.log(data)
        navigate(`/`);
    } catch (err) {
            console.log(err);
        }
        
    };

    return (
        <form>
        <div>
        <label htmlFor="username">Username:</label>
        <input type="text" 
        id="username" 
        placeholder="Enter username" 
        onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input type="password" 
        id="password" 
        placeholder="password" 
        onChange={handleChange}/></div>
        <div>
        <label htmlFor="profile_image">Image:</label>
        <input type="url" 
        id="profile_image" 
        placeholder="Image" 
        onChange={handleChange}/></div>
                <div>
        <label htmlFor="email">Email:</label>
        <input type="text" 
        id="email" 
        placeholder="Email" 
        onChange={handleChange}/></div>
        <div>
        <label htmlFor="bio">Bio:</label>
        <input type="text" 
        id="bio" 
        onChange={handleChange}/></div>
        <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
);

} 

export default NewUserForm;