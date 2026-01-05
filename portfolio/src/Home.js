import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiSpringboot, SiHibernate, SiFirebase, SiPostgresql, SiDocker, SiKubernetes, SiGithubactions, SiApachekafka, SiJenkins } from 'react-icons/si';

// --- ANIMATION LIBRARIES ---
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md'; 

// --- IMAGE IMPORTS ---
import experience1Image from './assets/Velozy.png'; 
import experience2Image from './assets/Cynet_Logo.jpg';
import experience3Image from './assets/Mastech_Digital_Logo.jpg';
import experience4Image from './assets/Vertige.png';
import project1Image from './assets/stockoptimate.png';
import project2Image from './assets/pathfinder.png';
import project3Image from './assets/Restroman.png';
import project4Image from './assets/Hospitiuman.png';
import project5Image from './assets/wiskerwags.png';
import lynchBotImage from './assets/Lynchbot.png'; 
import shootItImage from './assets/shootit.png';

const Home = () => {
  const navigate = useNavigate();

  // Configuration for the 3D Tilt effect
  const defaultTiltOptions = {
    reverse:        false,  
    max:            15,     
    perspective:    1000,   
    scale:          1.02,   
    speed:          1000,   
    transition:     true,   
    axis:           null,   
    reset:          true,   
    easing:         "cubic-bezier(.03,.98,.52,.99)",    
  };

  // --- WORK EXPERIENCE DATA ---
  const experienceSlides = [
    { 
      image: experience4Image, 
      title: 'Vertige - Fullstack Application Developer', 
      date: 'Jan 2025 - Present', 
      tech: ['React Native', 'Swift', 'Firebase', 'iOS/Android'],
      description: 'Joining Vertige, a healthcare startup dedicated to supporting patients with Vertigo, I took ownership of the mobile ecosystem to ensure seamless patient care. My primary mission was bridging the gap between platforms; I migrated the existing legacy iOS code (Swift) into a robust, cross-platform React Native application, ensuring accessibility for both Android and iOS users. Beyond the UI, I re-architected the backend, transitioning from initial MongoDB structures to a scalable serverless architecture using AWS Lambda and Firebase Real-time Datasets. To keep our development agile, I automated our deployment pipelines using Jenkins and GitHub Actions, ensuring that every update to our patient-facing features was delivered instantly and securely.'},
    { 
      image: experience2Image, 
      title: 'HCL - Software Developer', 
      date: 'Sep 2022 - Aug 2025',
      tech: ['React', 'Angular', 'Java', 'Spring Boot', 'PostgreSQL'], 
      description: 'At HCL (via Cynet Systems), I worked within the complex ecosystem of Human Capital Management, specifically modernizing an Application Tracking System (ATS) managing massive candidate datasets. I moved away from monolithic patterns by designing a Micro-frontend architecture using both React and Angular, allowing for a flexible and responsive user interface. On the backend, I engineered high-performance Java Spring Boot microservices capable of real-time data processing. By integrating Apache Kafka for event streaming and Dockerizing our services via Kubernetes, I ensured the system remained resilient under heavy loads, significantly improving the speed and reliability of candidate data retrieval.'},
    { 
      image: experience3Image, 
      title: 'Infosys - Software Developer', 
      date: 'Jan 2021 - Aug 2022', 
      tech: ['React.js', 'Node.js', 'Kafka', 'Docker', 'Java'],
      description: 'During my tenure at Infosys (via Mastech Digital), I acted as a versatile Fullstack Developer spearheading the delivery of multiple high-impact IT projects. My focus was on performance optimization and architectural scalability. I architected microservices using Spring Boot and Node.js, which successfully reduced data processing time by 20%. Simultaneously, I revamped the frontend experience using React.js, achieving an 18% reduction in page load times. I helped establish a culture of automation by implementing robust CI/CD pipelines with Jenkins and Docker, ensuring that our rapid development cycles never compromised software quality.'},
  ];

  // --- PROJECTS DATA ---
  const projectSlides = [
    { 
      image: lynchBotImage, 
      title: 'LynchBot - Financial RAG AI', 
      link: 'https://github.com/Royniel', 
      className: 'span-2', 
      description: 'Engineered a domain-specific Financial RAG chatbot using PyTorch and Hugging Face Transformers to democratize investment insights. Built a high-precision semantic search pipeline utilizing Sentence-BERT embeddings for accurate context retrieval. Optimized with custom caching mechanisms for speed and deployed via an interactive Streamlit UI.' 
    },
    { 
      image: project2Image, 
      title: 'Pathfinder', 
      link: 'https://github.com/Royniel', 
      description: 'Designed a smart course selection platform to help students navigate their academic journey based on historical performance. The backend was robustly engineered using Java Spring Boot and Hibernate to manage complex relationship mappings. Focused on delivering a reliable recommendation engine that simplifies decision-making.' 
    },
    { 
      image: project3Image, 
      title: 'RestroManager', 
      link: '/project2', 
      description: 'Developed a standalone restaurant management solution to digitize operations ranging from inventory tracking to table billing. Utilized Java Swing to create an intuitive desktop GUI that interacts seamlessly with a MySQL relational database. The system streamlines daily workflows by ensuring real-time data consistency.' 
    },
    { 
      image: project1Image, 
      title: 'StockOptimate', 
      link: '/project3', 
      description: 'Created a comprehensive inventory management system designed to handle large-scale stock data with precision using React.js and Node.js. Engineered the backend to execute complex SQL queries on MSSQL, optimizing retrieval speeds. The responsive dashboard enables businesses to visualize stock levels in real-time.' 
    },
    { 
      image: project4Image, 
      title: 'Hospitiuman', 
      link: '/project4', 
      description: 'Engineered a hospital administration tool focused on optimizing resource allocation for beds, doctors, and patient feedback. Leveraged Java Swing for the client-side application ensuring a stable user interface. The backend relied on a structured MySQL database to maintain critical patient records and resource availability.' 
    },
    { 
      image: project5Image, 
      title: 'Whiskerwags', 
      link: '/project5', 
      description: 'Developed a compassionate pet adoption portal using the MERN stack to connect pets with forever homes. Implemented secure user authentication with Bcrypt and handled dynamic image uploads via Multer middleware. The UI was crafted with Material UI for a polished look, while Axios managed seamless API communication.' 
    },
    { 
      image: shootItImage, 
      title: 'Shoot It - Multi-LLM Arena', 
      link: 'https://github.com/Royniel', 
      className: 'span-2',
      description: 'Built a competitive Multi-LLM Arena benchmarking Google Gemini, GPT-4o, Claude 3, and Llama 3 simultaneously. Architected an asynchronous Python Flask backend to handle concurrent API requests minimizing latency. Features a dynamic React frontend for side-by-side comparison, fully automated with GitHub Actions for deployment on Render.' 
    },
  ];
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      {/* --- SKILLS SECTION --- */}
      <div id="skills" className="section-box">
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <motion.div 
            className="skills-icons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
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

      {/* --- WORK EXPERIENCE --- */}
      <div id="work" className="section-box">
        <h2>Work Experience</h2>
        <VerticalTimeline>
          {experienceSlides.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(10, 10, 10, 0.9)', color: '#fff', border: '1px solid rgba(255, 193, 7, 0.2)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgba(10, 10, 10, 0.9)' }}
              date={exp.date}
              iconStyle={{ background: '#FFC107', color: '#000' }} 
              icon={<MdWork />} 
            >
              <h3 className="vertical-timeline-element-title">{exp.title.split(' - ')[0]}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.title.split(' - ')[1]}</h4>
              <p>{exp.description}</p>
              
              <div className="tech-stack-container">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* --- PROJECTS BENTO GRID --- */}
      <div id="projects" className="section-box bento-section">
        <h2>Projects</h2>
        <div className="bento-grid">
          {projectSlides.map((project, index) => (
            <Tilt key={index} options={defaultTiltOptions} className={`tilt-wrapper ${project.className || ''}`}>
              <div 
                className="bento-item" 
                onClick={() => {
                  if (project.link.startsWith('http')) {
                    window.open(project.link, '_blank');
                  } else {
                    navigate(project.link);
                  }
                }}
              >
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