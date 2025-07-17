import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import myImg from "../../Assets/avatar.png";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { SiKaggle } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col xs={12} md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> M. RAFI SYAFRINALDI</strong>
              </h1>

              {/* Remove extra padding for perfect alignment */}
              <Type />
              <p className="home-about-body">
              A ML developer + full-stack  who loves building cool stuff from scratch. I design backends, craft frontends, train models, and have led teams to turn ideas into real, usable products. Always up for solving problems and shipping things that work.
            </p>
            </Col>

            <Col xs={12} md={4} className="myAvtar mt-4 mt-md-0">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          </Row>
        </Container>
        {/* Removed Find Me On section, now only in Footer */}
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
