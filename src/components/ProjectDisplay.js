import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";

function ProjectsDisplay(){
    const {id} = useParams();
    const projects=ProjectList[id];
    return(
        <>
            <div className="project">
                <h1>{projects.name}</h1>
                <img src={projects.image} alt="no pic found" />
                <p> 
                    <b>Skills : {projects.skill}</b>
                </p>
            </div>
        </>
    )
}

export default ProjectsDisplay;