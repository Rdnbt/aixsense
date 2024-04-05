import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import TeamMember from './Teammember'; // Import the TeamMember component
import businessmodel from '../assets/img/Icons_New/businessmodel.svg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Business Model',
      description: 'Our business model is based on providing a range of different biosensor products to businesses and consumers.',
      imgUrl: businessmodel,
    },
    {
      title: 'Technical Expertise',
      description: 'Our team has a wide range of technical expertise in the fields of biosensors, machine learning, and data science.',
    },
    {
      title: 'Innovative Technology',
      description: 'Our R&D is based and supported by RWTH Aachen University, one of the leading technical universities in Europe.',
    },
  ];

  const teamMembers = [
    {
      name: 'Juliette TKint',
      profilePic: '../assets/img/Members/Juliette.png',
    },
    {
      name: 'Stefan Kreher',
      profilePic: '../assets/img/Members/Juliette.png',
    },
    {
      name: 'Erdenebat Battseren',
      profilePic: '../assets/img/Members/Juliette.png',
    },
    {
      name: 'Yusuke Tsutsumi',
      profilePic: '../assets/img/Members/Juliette.png',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>About Us</h2>
                  <p style={{ fontSize: '25px' }}>Our mission: developing a real-time, reliable, and continuous biosensor for monitoring Acute Kidney Injury (AKI) using creatinine. ‍ 🔬 </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Our Product</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Team Members</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Blog & Post</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {teamMembers.map((member, index) => (
                            <Col key={index} md={3}>
                              <TeamMember {...member} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Weekly/Monthly blogs will be posted here</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;

