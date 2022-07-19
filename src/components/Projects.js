import React, { Component } from "react";
import {Carousel, Card, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard"
import projects from "../project.json"


export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projects,
            nextIcon: <span aria-hidden="true" className="carousel-control-next-icon" />,
            prevIcon: <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
    }


  render() {
    return (
      <div className="project-section">
        
        {/* <Carousel nextIcon={this.state.nextIcon} prevIcon={this.state.prevIcon}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/webpage1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/webpage2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/webpage3.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>

              </h3>
              <p>
               
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        <Row>
            {this.state.projects.map(project =>(
            <ProjectCard style={{display:"flex"}}
            key = {project.id}
            id = {project.id}
            title ={project.title}
            image =  {project.image}
            ></ProjectCard>
            ))}
            </Row>

        
      </div>
    );
  }
}
