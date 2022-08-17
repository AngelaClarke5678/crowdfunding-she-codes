import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    const token = window.localStorage.getItem('token')

    const LogOut = () => {
    window.localStorage.removeItem("token");

    }

    return (
       <nav>
        <Link to ="/">Home</Link>
        {/* { window.localStorage.getItem('token') === undefined && */}
        <Link to = "/login">Login</Link> 
        <Link to = "/" onClick={LogOut}>Logout</Link>
        <Link to = "/CreateProject">CreateProject</Link>
       </nav>
    );
}

export default Nav 