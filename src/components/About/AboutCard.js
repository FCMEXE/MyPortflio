import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felipe Camargo </span>
            from <span className="purple"> Sorocaba, Brazil.</span>
            <br />
            I currently work as a Freelance software developer.
            <br />
            I'm studying Systems Analysis and Development at (FACENS),
             after graduating I intend to go into Computer Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Talking to my friends
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
