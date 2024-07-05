import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reactPhoto from "../../Assets/Projects/Captura de tela de 2024-07-05 19-47-48.png";
import java from "../../Assets/Projects/java.jpeg"
import landingPage from "../../Assets/Projects/landingPage01.png";
import seth from "../../Assets/Projects/seth.png";

import QuadraConecta from "../../Assets/Projects/QuadraConecta.jpeg";

              // ghLink=""
              // demoLink=""  

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seth}
              isBlog={false}
              title="SETH"
              description="SETH is a stock management system developed in Java, using JDBC for integration with MySQL. It allows stock information entered via a Java interface (JPainel) to be sent to MySQL for processing and storage. Subsequently, the data is retrieved from the database and presented back to Java in table format, making it possible to create, delete, edit and view stock items (CRUD)."
              ghLink="https://github.com/FCMEXE/SETH"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuadraConecta}
              isBlog={false}
              title="QuadraConecta"
              description="QuadraConecta is a sports space management solution designed to streamline the booking process for sports venues. It empowers space owners to effortlessly list their locations, enabling interested users to reserve times directly through the platform for physical exercise activities. Developed entirely with pure HTML, CSS, and JavaScript, without relying on frameworks, the system aims to deliver a straightforward and user-friendly experience for all users. Additionally, it integrates seamlessly with a MockAPI powered by Faker.js to enhance data management and simulation capabilities."
              ghLink="https://github.com/FCMEXE/UPX3"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingPage}
              isBlog={false}
              title="DesafioLanding"
              description="If you enter my repositories you will come across repositories with DesafioLanding01..DesafioLanding02... these challenges are some landing pages I made for training, using HTML, CSS (take a look...)"
              ghLink="https://github.com/FCMEXE/DesafioLanding01"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactPhoto}
              isBlog={false}
              title="ToDoList"
              description="It's Simple...it's a ToDoList using React. ;)"
              ghLink="https://github.com/FCMEXE/Lista-de-Tarefas---React"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Gerenciamento de Pedidos"
              description="I developed an order management system for a pizzeria in Java. It includes features to register new orders, control the preparation and delivery status, list all orders (regardless of status), and delete orders. The system utilizes queues, stacks, arrays, and linked lists to optimize memory management."
              ghLink="https://github.com/FCMEXE/GerenciamentoDePedidos"
             
            />
          </Col>

         
          
               
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
