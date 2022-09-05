import React from "react";
import "./App.css"
import {BrowserRouter , Route , Routes } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Educattion";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import ProjectsDisplay from "./components/ProjectDisplay";

function App(){
    return(
        <>
            <div className="main_app_container">
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/education" element={<Education />} />
                        <Route exact path="/about" element={<About/>} />
                        <Route exact path="/projects" element={<Projects/>} />
                        {/* <Route exact path="/project/:id" element={<ProjectsDisplay/>}/> */}
                        <Route exact path="/contact" element={<Contact/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;