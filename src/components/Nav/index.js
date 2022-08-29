import React ,{ useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    const location = useLocation()
    const [LoggedIn, setLoggedIn] = 
    useState(!!window.localStorage.getItem('token')
    );

    const LogOut = () => {
    	window.localStorage.removeItem("token");
			setLoggedIn(false)
    }

    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [window.localStorage, location]
    ) 
    return (
       <nav className="navbar">
        <Link to ="/">Home</Link>
        {LoggedIn ? (
        <Link to = "/" onClick={LogOut}>Logout</Link>)
        : (<Link to = "/login">Login</Link>)}
        <Link to = "/CreateProject">CreateProject</Link>
       </nav>
    );
}

export default Nav 