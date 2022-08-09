import React, { useState } from "react";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials({...credentials, [id]: value
        })
    }

    const handleSubmit = (event) => {}


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
        placeholder="Password" 
        onChange={handleChange}/></div>
        <button type="submit">Login</button>
        </form>

);
} 

export default LoginForm;