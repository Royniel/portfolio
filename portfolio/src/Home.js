import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { FaJava, FaPython, FaReact, FaNodeJs,  FaAws } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiSpringboot, SiHibernate, SiFirebase, SiPostgresql  } from 'react-icons/si';

// Importing images for work experience and projects
import experience1Image from './assets/Velozy.png';
import experience2Image from './assets/Cynet_Logo.jpg';
import experience3Image from './assets/Mastech_Digital_Logo.jpg';
import experience4Image from './assets/Vertige.png';
import project1Image from './assets/stockoptimate.png';
import project2Image from './assets/pathfinder.png';
import project3Image from './assets/Restroman.png';
import project4Image from './assets/Hospitiuman.png';
import project5Image from './assets/wiskerwags.png';


const Home = () => {
  const navigate = useNavigate();
  const [expIndex, setExpIndex] = useState(0);
  const [projIndex, setProjIndex] = useState(0);

  const experienceSlides = [
    {image: experience4Image, title: 'Vertige - Fullstack Application Developer', description: 'Vertige is a healthcare startup that deals with patients suffering from Vertigo. I was appointed as a Fullstack Application Developer and was responsible for desiginig and developing the Mobile Application in React Native for IOS and Android also migrating the existing iOS Application code from Swift'}, 
    { image: experience1Image, title: 'Velozy - Fullstack Developer', description: 'Velozy is an early startup which aims to unify the bikers community. The application was available in Android and IOS. I was responsible development, redisigning and debugging of the application. The Codebase was built using React Native with Expo, Node.js, MongoDB, and Firebase.' },
    { image: experience2Image, title: 'HCL - Software Developer', description: 'Cynet Systems is a sister company of Cynet Global based out in Sterling, VA, is responsible for all the IT operations of the organization. Since the company deals with staffing, I was responsible to develop and maintain its Application Tracking System leveraging the pre-existing candidate database for HCL. The codebase was built with the React & Angular for the frontend, Java for the backend and Springboot framework with Hibernate for the PostgreSQLdatabase connection.' },
    { image: experience3Image, title: 'Infosys - Software Developer', description: 'Mastech Digital is multinational Conglomorate based out in Pittsburg, PA catering IT projects and consulting. Here I served in couple projects for Infosys, where I was resposible for maintaining and developing the  React.js and Node.js codebases as well Angular with Java, deploying dockerized containers through Kafka. ' },
  ];

  const projectSlides = [
    { image: project2Image, title: 'Pathfinder', link: '/project1', description: 'This project was designed for students to select the courses as per their previous experience and interests. The codebase contained Java with Spring Boot framework and Hibernate with MSSQL as DBMS where STS was use as IDE.' },
    { image: project3Image, title: 'RestroManager', link: '/project2', description: 'This standalone application was a freelance project designed for a restaurant to manage its inventory, billing and table management. The codebase contained Java with Swing APIs using the NetBeans IDE and MySQL as DBMS where JDBC was used to connect with the database.' },
    { image: project1Image, title: 'StockOptimate', link: '/project3', description: ' StockOptimate is a application which was designed for huge Inventory management. To manage large scale data inflow complex SQL queries were created through MSSQL and the front end was created on React.js and connected the backend with Node.js also PowerBI was used for data visualization.' },
    { image: project4Image, title: 'Hospitiuman', link: '/project4', description: 'Hospitiuman is a optimal Hospital Management standalone application designed for managing the beds for patients, designated doctors along with their respective feedback. The codebase was based on Java with Swing APIs using the NetBeans IDE and MySQL as DBMS where JDBC was used to connect with the database.' },
    { image: project5Image, title: 'Whiskerwags', link: '/project5', description: 'Whiskerwasgs is a pet adoption portal which was designed for pet owners to find and adopt a suitable pet for their family. The project was based on MERN stack, where MongoDB was used for DBMS, React and Node for front and backend also using the Material UI and Express as Middleware'},
  ];

  useEffect(() => {
    const expTimer = setInterval(() => {
      setExpIndex((prev) => (prev + 1) % experienceSlides.length);
    }, 3000);
    return () => clearInterval(expTimer);
  }, [experienceSlides.length]); // ✅ add this
  
  useEffect(() => {
    const projTimer = setInterval(() => {
      setProjIndex((prev) => (prev + 1) % projectSlides.length);
    }, 3000);
    return () => clearInterval(projTimer);
  }, [projectSlides.length]);

  return (

    <><div id="skills" className="section-box">
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-icons">
          <FaJava title="Java" size={40} />
          <FaPython title="Python" size={40} />
          <SiC title="C" size={40} />
          <SiCplusplus title="C++" size={40} />
          <SiPostgresql title="PostGresql" size={40} />
          <SiMysql title="MySQL" size={40} />
          <SiMongodb title="MongoDB" size={40} />
          <SiJavascript title="JavaScript" size={40} />
          <FaReact title="React" size={40} />
          <FaNodeJs title="Node.js" size={40} />
          <FaAws title="Aws" size={40} />
          <SiHibernate title="Hibernate" size={40} />
          <SiSpringboot title="Springboot" size={40} />
          <SiTypescript title="Typescript" size={40} />
          <SiFirebase title="Firebase" size={40} />
        </div>
      </div>
    </div><>
    
    <div id="work" className="section-box">
      {/* Work Experience Section */}
      <div className="carousel-section">
        <h2>Work Experience</h2>
        <div className="carousel-container work-experience">
          <div className="carousel-slide">
            <img src={experienceSlides[expIndex].image} alt={experienceSlides[expIndex].title} />
            <IconButton className="nav-button left" onClick={() => setExpIndex((expIndex - 1 + experienceSlides.length) % experienceSlides.length)}>
              <ArrowBackIos />
            </IconButton>
            <IconButton className="nav-button right" onClick={() => setExpIndex((expIndex + 1) % experienceSlides.length)}>
              <ArrowForwardIos />
            </IconButton>
          </div>
          <div className="carousel-caption right-text">
            <h3>{experienceSlides[expIndex].title}</h3>
            <p>{experienceSlides[expIndex].description}</p>
          </div>
        </div>
      </div>
    </div>

        {/* Projects Section */}
        <div id="projects" className="section-box">
          <div className="carousel-section">
            <h2>Projects</h2>
            <div className="carousel-container projects">
              <div className="carousel-slide" onClick={() => navigate(projectSlides[projIndex].link)} style={{ cursor: 'pointer' }}>
                <img src={projectSlides[projIndex].image} alt={projectSlides[projIndex].title} />
                <IconButton className="nav-button left" onClick={(e) => { e.stopPropagation(); setProjIndex((projIndex - 1 + projectSlides.length) % projectSlides.length); } }>
                  <ArrowBackIos />
                </IconButton>
                <IconButton className="nav-button right" onClick={(e) => { e.stopPropagation(); setProjIndex((projIndex + 1) % projectSlides.length); } }>
                  <ArrowForwardIos />
                </IconButton>
              </div>
              <div className="carousel-caption left-text">
                <h3>{projectSlides[projIndex].title}</h3>
                <p>{projectSlides[projIndex].description}</p>
              </div>
            </div>
          </div>
        </div></></>
  );
};

export default Home;