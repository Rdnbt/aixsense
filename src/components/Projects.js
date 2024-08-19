import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import TeamMember from './Teammember'; // Import the TeamMember component
import businessmodel from '../assets/img/Icons_New/businessmodel.svg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// ----------------------------------------------------------------
import Juliette from '../assets/img/Members/Juliette.png';
import Stefan from '../assets/img/Members/Stefan.png';
import Yusuke from '../assets/img/Members/Yusuke.png';
import Erdenebat from '../assets/img/Members/Erdenebat.png';
import Kostadin from '../assets/img/Members/kostadin.png';
import Lin from '../assets/img/Members/Lin.png';
import Erkai from '../assets/img/Members/Erkai.jpg';
import Muxi from '../assets/img/Members/muxi.png';
import Seungyeon from '../assets/img/Members/seonyoung.png';
import Sven from '../assets/img/Members/sven.png';
import Yijun from '../assets/img/Members/yijun.png';
import Chenyan from '../assets/img/Members/chenyan.png';
import Yumie from '../assets/img/Members/yumie.png';
import Amine from '../assets/img/Members/amine.png'
import Reyyan from '../assets/img/Members/reyyan.png';

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
    // Subteam: Microfluidics
    {
      name: 'Amine Baadaka',
      profilePic: Amine,
      team: 'Microfluidics',
    },
    {
      name: 'Muxi Zhang',
      profilePic: Muxi,
      team: 'Microfluidics',
    },
    {
      name: 'Seungyeon Kim',
      profilePic: Seungyeon,
      team: 'Microfluidics',
    },
    {
      name: 'Sven Gedamke',
      profilePic: Sven,
      team: 'Microfluidics',
    },
    {
      name: 'Yijun Yan',
      profilePic: Yijun,
      team: 'Microfluidics',
    },
    // Subteam: Sensor
    {
      name: 'Lin Yiyu',
      profilePic: Lin,
      team: 'Sensor',
    },
    {
      name: 'Erkai Wang',
      profilePic: Erkai,
      team: 'Sensor',
    },
    {
      name: 'Chenyan Feng',
      profilePic: Chenyan,
      team: 'Sensor',
    },
    {
      name: 'Yumie Nishiyama',
      profilePic: Yumie,
      team: 'Sensor',
    },
    {
      name: 'Reyyan Güzide Tagman',
      profilePic: Reyyan,
      team: 'Sensor',
    },
    // Sub-team: Data Analysis
    {
      name: 'Stefan Kreher',
      profilePic: Stefan,
      team: 'Data Analysis',
    },
    {
      name: 'Kostadin Eftimov',
      profilePic: Kostadin,
      team: 'Data Analysis',
    },
    // Sub-team: Business
    {
      name: 'Juliette T\'Kint',
      profilePic: Juliette,
      team: 'Business',
    },
    {
      name: 'Yusuke Tsumtsumi',
      profilePic: Yusuke,
      team: 'Business',
    },
    {
      name: 'Erdenebat Battseren',
      profilePic: Erdenebat,
      team: 'Business',
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
                  <p style={{ fontSize: '25px' }}>To improve kidney health management through innovative, continuous monitoring solutions that provide real-time data and actionable insights for patients and healthcare providers. ‍ 🔬 </p>
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
                        <Row>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C5YKFKohqQ0/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C5seHDahwJN/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C6Qa8w-B4sE/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C5-YcJ0B_ea/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C6lAdHmhKzP/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C68ENyFBoKy/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <iframe
                                src="https://www.instagram.com/p/C7Oihvqh3AZ/embed"
                                width="320"
                                height="440"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                              ></iframe>
                            </div>
                          </Col>
                        </Row>
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
