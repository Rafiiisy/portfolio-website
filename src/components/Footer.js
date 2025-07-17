import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

function Footer() {
  return (
    <Container fluid className="footer home-about-social">
      <Row>
        <Col md={12} style={{ textAlign: 'center' }}>
          <h3><span className="teal">FIND</span> ME ON</h3>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Rafiiisy"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.kaggle.com/rafisyafrinaldi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiKaggle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-rafi-syafrinaldi/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
