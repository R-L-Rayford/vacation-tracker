import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="tab">
            <Link to="/"><button style={{ borderRight:"none" }}>Calendar</button></Link>
            <Link to="/vacations"><button>Vacations</button></Link>
            <Link to="/activities"><button style={{ borderLeft:"none" }}>Things to do</button></Link>
        </nav>
    );

}

export default NavBar;