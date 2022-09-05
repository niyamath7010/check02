import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/NavBar.css'

function NavBar(){
    const [expandNav , setExpandNav]=useState(false)
    
    const location=useLocation()

    useEffect(()=>{
        setExpandNav(false)
    },[location])

    return(
        <>
            <div className="main_nav_container">
                <div className="nav_container">
                    <div className="navBar" id={expandNav ? "open" : "close"} />
                    <div className="toggleButton">
                        <button 
                            onClick={()=>{
                                setExpandNav((prev)=> !prev)
                            }} >
                                <span>➕</span>
                            </button>

                    </div>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/education">Education</Link>
                        <Link to="/about">About</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar