import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Allen Lacoste </span>
            from <span className="purple"> Quezon City, Philippines.</span>
            <br />
            I am currently studying at Centro Escolar University (CEU).
            <br />
            I am currently a 3rd year student in bachelor of Science in computer
            science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> learning coding
            </li>
            <li className="about-activity">
              <ImPointRight /> playing games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do what makes you happy!"{" "}
          </p>
          <footer className="blockquote-footer">Allen Lacoste</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
