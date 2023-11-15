import React, { useState } from "react"
import { IoMenu } from "react-icons/io5";

export default function Navbar(){
    
    const [isOpen, setIsOpen ] = useState(false)
    
    function handleToggle(){
        setIsOpen(prevState => !prevState)
    }

    return (
        <nav>
            <button className="nav--menu-btn" onClick={handleToggle}>
                <IoMenu />
            </button>

            <ul 
                className="navbar--ul" 
                style={{
                display: isOpen ? "flex" : "none"
            }}
            >
                <li>Home</li>
                <li>Calendar</li>
                <li>Habbits</li>
                <li>Stats</li>
                <li>Settings</li>
            </ul>
        </nav>
    )
}