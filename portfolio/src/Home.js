import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiSpringboot, SiHibernate, SiFirebase, SiPostgresql, SiDocker, SiKubernetes, SiGithubactions, SiApachekafka, SiJenkins } from 'react-icons/si';

import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md'; // Or any icon you want for the center dots
// Importing images
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

  // Configuration for the 3D Tilt effect
  const defaultTiltOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.02,   // 2% scale on hover
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,   // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  };

  const experienceSlides = [
    { image: experience4Image, 
      title: 'Vertige - Fullstack Application Developer', date: 'Jan 2025 - Till Date', 
      tech: ['React Native', 'Swift', 'Firebase', 'iOS/Android'],
      description: 'Vertige is a healthcare startup that deals with patients suffering from Vertigo. I was appointed as a Fullstack Application Developer and was responsible for designing and developing the Mobile Application in React Native for iOS and Android also migrating the existing iOS Application code from Swift.' },
    { image: experience2Image, 
      title: 'HCL - Software Developer', date: 'Sep 2022 - Aug 2025',
      tech: ['React', 'Angular', 'Java', 'Spring Boot', 'PostgreSQL'], 
      description: 'HCl is a client of Cynet Systems, a sister company of Cynet Global based out in Sterling, VA, is responsible for all the IT operations of the organization. Since the company deals with staffing, I was responsible to develop and maintain its Application Tracking System leveraging the pre-existing candidate database for HCL. The codebase was built with the React & Angular for the frontend, Java for the backend and Springboot framework with Hibernate for the PostgreSQLdatabase connection.' },
    { image: experience3Image, 
      title: 'Infosys - Software Developer', date: 'Jan 2021 - Aug 2022', 
      tech: ['React.js', 'Node.js', 'Kafka', 'Docker', 'Java'],
      description: 'Mastech Digital is multinational Conglomorate based out in Pittsburg, PA catering IT projects and consulting. Here I served in couple projects for Infosys, where I was resposible for maintaining and developing the  React.js and Node.js codebases as well Angular with Java, deploying dockerized containers through Kafka. ' },
  ];

  const projectSlides = [
    { image: project2Image, title: 'Pathfinder', link: '/project1', description: 'This project was designed for students to select the courses as per their previous experience and interests. Java with Spring Boot & Hibernate.' },
    { image: project3Image, title: 'RestroManager', link: '/project2', description: 'Standalone application designed for a restaurant to manage inventory, billing and tables. Java Swing & MySQL.' },
    { image: project1Image, title: 'StockOptimate', link: '/project3', description: 'Designed for huge Inventory management. Complex SQL queries through MSSQL, React.js frontend and Node.js backend.' },
    { image: project4Image, title: 'Hospitiuman', link: '/project4', description: 'Hospital Management application designed for managing beds, doctors and feedback. Java Swing & MySQL.' },
    { image: project5Image, title: 'Whiskerwags', link: '/project5', description: 'Pet adoption portal based on MERN stack. MongoDB, React, Node and Material UI.' },
  ];

  useEffect(() => {
    const expTimer = setInterval(() => {
      setExpIndex((prev) => (prev + 1) % experienceSlides.length);
    }, 3000);
    return () => clearInterval(expTimer);
  }, [experienceSlides.length]);

  // Animation variants for Skills
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Stagger effect
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      {/* --- SKILLS SECTION WITH ANIMATION --- */}
      <div id="skills" className="section-box">
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <motion.div 
            className="skills-icons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animates when scrolled into view
            viewport={{ once: true }}
          >
            {[
              { Icon: FaJava, name: "Java" }, { Icon: FaPython, name: "Python" }, { Icon: SiC, name: "C" },
              { Icon: SiCplusplus, name: "C++" }, { Icon: SiPostgresql, name: "PostgreSQL" }, { Icon: SiMysql, name: "MySQL" },
              { Icon: SiMongodb, name: "MongoDB" }, { Icon: SiJavascript, name: "JavaScript" }, { Icon: FaReact, name: "React" },
              { Icon: FaNodeJs, name: "Node.js" }, { Icon: FaAws, name: "AWS" }, { Icon: SiHibernate, name: "Hibernate" },
              { Icon: SiSpringboot, name: "Spring Boot" }, { Icon: SiTypescript, name: "TypeScript" }, { Icon: SiFirebase, name: "Firebase" },
              { Icon: SiDocker, name: "Docker" }, { Icon: SiKubernetes, name: "Kubernetes" }, { Icon: SiApachekafka, name: "Kafka" },
              { Icon: SiJenkins, name: "Jenkins" }, { Icon: SiGithubactions, name: "Actions" }
            ].map((skill, index) => (
              <motion.div key={index} variants={itemVariants} title={skill.name}>
                <skill.Icon size={40} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div id="work" className="section-box">
        <h2>Work Experience</h2>
        <VerticalTimeline>
          {experienceSlides.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(10, 10, 10, 0.9)', color: '#fff', border: '1px solid rgba(0, 255, 65, 0.2)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgba(10, 10, 10, 0.9)' }}
              date={exp.date}
              iconStyle={{ background: '#FFC107', color: '#fcfafaff' }}
              icon={<MdWork />} 
            >
              <h3 className="vertical-timeline-element-title">{exp.title.split(' - ')[0]}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.title.split(' - ')[1]}</h4>
              <p>{exp.description}</p>
              
              {/* --- NEW TECH PILLS SECTION --- */}
              <div className="tech-stack-container">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* --- NEW BENTO GRID PROJECTS SECTION --- */}
      <div id="projects" className="section-box bento-section">
        <h2>Projects</h2>
        <div className="bento-grid">
          {projectSlides.map((project, index) => (
            <Tilt key={index} options={defaultTiltOptions} className="tilt-wrapper">
              <div className="bento-item" onClick={() => navigate(project.link)}>
                <div className="bento-image-container">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="bento-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;