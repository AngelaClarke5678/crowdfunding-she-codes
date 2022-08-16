import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
       <nav>
        <Link to ="/">Home</Link>
         { window.localStorage.getItem('token') == undefined &&
        <Link to = "/login">Login</Link> }
        <Link to = "/logout">Logout</Link>
       </nav>
    );
}

export default Nav 