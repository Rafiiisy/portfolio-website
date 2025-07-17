import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi, I'm Muhammad Rafi Syafrinaldi
            but you can just call me Rafi. I'm based in Indonesia and currently pursuing my Master's in Computer Science at Universitas Gadjah Mada. Alongside my studies, I work as a mentor intern at Caprae Capital and a full-stack developer at SaaSquatch Leads.
            <br />
            <br />
            Outside of coding, I love singing and making music, playing games, and spending time in nature.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is the closest thing we have to magic."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
