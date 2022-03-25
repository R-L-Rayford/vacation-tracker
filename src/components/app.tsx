import React, { Component, useState } from "react";
// styles
import "../styles/app.css"
import "../styles/calendar.css"
// components
import NavBar from "./navBar";
import Calendar from "react-calendar";


const App = () => {
    const [value, onChange] = useState(new Date())
    
    return (
    <>    
        <div className="center">
            <NavBar />
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
        </>
    );
}

export default App;
