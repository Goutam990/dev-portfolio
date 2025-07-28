import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              I am a Computer Science student, with a solid foundation in web development and proficiency in <strong className="purple">Java</strong> and <strong className="purple">JavaScript</strong>. I am currently expanding my expertise by learning the <strong className="purple">MERN stack</strong> and enhancing my skills in tools like <strong className="purple">Tailwind CSS</strong>, <strong className="purple">React.js</strong>, and <strong className="purple">Node.js</strong> to develop dynamic web applications that are both functional and user-friendly. My skill set includes UI/UX design, and I am committed to delivering highly intuitive and responsive digital experiences.
              <br /><br />
              As a fast learner and team leader, I thrive in collaborative environments and enjoy driving projects to successful outcomes. I’ve led multiple academic and internship projects, including <strong className="purple">Jiobasket</strong>, a grocery price comparison platform, and <strong className="purple">MovieBuzz</strong>, a movie booking and information system built using full-stack technologies. These experiences have helped me sharpen my skills in frontend-backend integration, REST APIs, and project structuring.
              <br /><br />
              Outside of development, I’m passionate about <strong className="purple">karate</strong>, and I believe that discipline, focus, and consistency apply just as much in coding as they do in martial arts.
              <br /><br />
              I approach development with the same attention to detail and problem-solving mindset that I apply to everything I do. Just like a well-planned kata, coding requires structure, creativity, and a deep understanding of how each part connects to the whole. This mindset helps me stay focused on optimizing performance and writing clean, scalable code.
              <br /><br />
              Feel free to connect with me if you'd like to collaborate or discuss innovative projects.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
