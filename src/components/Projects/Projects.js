import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              tag="AI Engineer"
              title="Falcon RAG Assistant Chatbot"
              description="Hybrid RAG chatbot using Falcon-7B, FAISS, and BM25 for hybrid search, deployed with FastAPI and Streamlit."
              ghLink="https://github.com/Rafiiisy/falcon-rag-assistant-chatbot"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              tag="AI Engineer & Fullstack Dev"
              title="SaaSquatch Leads Platform"
              description="Lead generation SaaS platform. Fullstack development and AI integration."
              ghLink="https://app.saasquatchleads.com/"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              tag="Data Scientist"
              title="Anemia Classification"
              description="A Comparative Study of SVM and Random Forest Algorithms for anemia classification."
              ghLink="https://github.com/Rafiiisy/Anemia-Classification-A-Comparative-Study-of-SVM-and-Random-Forest-Algorithms"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              tag="Data Engineer"
              title="Ecommerce Modern Data Warehouse Pipeline"
              description="Modern data warehouse pipeline for ecommerce analytics."
              ghLink="https://github.com/Rafiiisy/Ecommerce-Modern-Data-Warehouse-Pipeline"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              tag="Data Engineer"
              title="KMS COVID-19 Data Pipeline"
              description="COVID-19 data engineering and analytics pipeline."
              ghLink="https://github.com/Rafiiisy/kms-covid19"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              tag="Data Analysis"
              title="Analyzing Steam Games Market Trends"
              description="Market trends and insights using R, SQL, and Tableau."
              ghLink="https://github.com/Rafiiisy/Analyzing-Steam-Games-Market-Trends-Insights-Using-R-SQL-and-Tableau"
              isBlog={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
