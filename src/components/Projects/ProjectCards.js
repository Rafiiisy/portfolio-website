import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Top-left icon buttons, only visible on hover */}
      <div className="project-card-icons">
        {props.ghLink && (
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="project-card-icon-btn">
            <FiExternalLink />
          </a>
        )}
        {props.demoLink && (
          <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="project-card-icon-btn">
            <FiExternalLink />
          </a>
        )}
      </div>
      {/* Only render image if imgPath is provided */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        {/* Render tag as a badge if provided */}
        {props.tag && (
          <span className="project-card-tag">{props.tag}</span>
        )}
        <div className="project-card-title">{props.title}</div>
        <div className="project-card-desc">{props.description}</div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
