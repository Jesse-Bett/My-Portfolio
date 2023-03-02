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
            <br />I'm a fullstack web developer proficient in object oriented programming, data structures and algorithms.
            <br />
            <br />
            I am passionate about using software to solve real world problems and I am always looking for opportunities to learn and grow.
          </p>
          

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
