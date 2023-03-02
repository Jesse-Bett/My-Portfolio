import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I'm <span className="purple">Jesse Bett </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />I'm a passionate fullstack web developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games, mainly Mortal Kombat and Fifa
            </li>
            <li className="about-activity">
              <ImPointRight /> Hit the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dare to Dream, Dare to do !"{" "}
          </p>
          <footer className="blockquote-footer">Jesse Bett</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
