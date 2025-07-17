import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "center",
              fontSize: "1.5em"
            }}
          >
            <h1 style={{ fontSize: "2.8em", paddingBottom: "30px" }}>
              Get to Know Me!
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading" style={{ marginTop: 40 }}>
          Professional <span className="teal">Skillset</span>
        </h1>
        {/* --- Modern Card Layout for Skills & Tools --- */}
        <div className="about-skills-grid-pyramid">
          <div className="about-skills-row">
            <div className="about-skill-card">
              <div className="about-skill-title">ML & Data Science</div>
              <div className="about-skill-badges">
                <span className="about-skill-badge">Scikit-learn</span>
                <span className="about-skill-badge">XGBoost</span>
                <span className="about-skill-badge">PyTorch</span>
                <span className="about-skill-badge">Transformers</span>
              </div>
            </div>
            <div className="about-skill-card">
              <div className="about-skill-title">Frontend Development</div>
              <div className="about-skill-badges">
                <span className="about-skill-badge">React</span>
                <span className="about-skill-badge">Next.js</span>
                <span className="about-skill-badge">JavaScript</span>
                <span className="about-skill-badge">C++</span>
                <span className="about-skill-badge">HTML5</span>
                <span className="about-skill-badge">CSS3</span>
              </div>
            </div>
            <div className="about-skill-card">
              <div className="about-skill-title">Backend Development</div>
              <div className="about-skill-badges">
                <span className="about-skill-badge">Node.js</span>
                <span className="about-skill-badge">Python</span>
                <span className="about-skill-badge">PostgreSQL</span>
                <span className="about-skill-badge">MongoDB</span>
                <span className="about-skill-badge">Redis</span>
              </div>
            </div>
          </div>
          <div className="about-skills-row">
            <div className="about-skill-card">
              <div className="about-skill-title">Cloud & DevOps</div>
              <div className="about-skill-badges">
                <span className="about-skill-badge">Git</span>
                <span className="about-skill-badge">Docker</span>
                <span className="about-skill-badge">AWS</span>
              </div>
            </div>
            <div className="about-skill-card">
              <div className="about-skill-title">Tools & Technologies</div>
              <div className="about-skill-badges">
                <span className="about-skill-badge">VS Code</span>
                <span className="about-skill-badge">GitHub</span>
                <span className="about-skill-badge">Postman</span>
                <span className="about-skill-badge">Apache Services</span>
                <span className="about-skill-badge">Power BI</span>
                <span className="about-skill-badge">Talend</span>
                <span className="about-skill-badge">Tableau</span>
              </div>
            </div>
          </div>
        </div>
        {/* --- End Modern Card Layout --- */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
