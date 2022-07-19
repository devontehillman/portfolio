import React, { Component } from 'react'
import projects from "../project.json"
import Button from "react-bootstrap/button"

export default class ProjectDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projects
        }
    }
    
    


    
    render() {
        // retrieve key id from route
        const index = this.props.match.params.id
        console.log(index)
        //use it to index the projects
        const selectedProject = this.state.projects[index-1]
        console.log(selectedProject)

        return (
            <div className="project-section">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>{selectedProject.title}</h1>
                
                <img style = {{maxWidth:"100%",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={selectedProject.pageImage} alt="Webpage" />
                <div style={{display: "flex", justifyContent: "space-around", marginTop:"-45px"}}>
                    <a href={selectedProject.livePage}>
                        <Button variant="danger">Deployed Page</Button>
                    </a>
                    <a href={selectedProject.gitRepo}>
                        <Button variant="danger">Github Repo</Button>
                    </a>
                </div>
                <h2 style={{marginTop: "15px"}}>This Project</h2>
                <p>{selectedProject.description}</p>
            </div>
        )
    }
}
