import './Projects.css';

import React from 'react';
import ScrollButton from './ScrollButton';
import {motion} from "framer-motion";

import {projects} from './project-data';

function Projects() {
  return (
    <>
      <motion.section
        className="Projects"
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 25}}
        transition={{duration: .5}}
      >
        {
          projects.map(project => {
            return (
              <div key={project.name} className="project">
                <div className="project-img-container">
                  <img className="project-img" src={project.img} alt="project-pic" />
                </div>
                <div className="project-content-container">
                  <h2 className="project-name">{project.name}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-link-container">
                    <a className="project-link" href={project.demoLink} target="_blank" rel="noreferrer">live demo</a>
                    <a className="project-link" href={project.repoLink} target="_blank" rel="noreferrer">github</a>
                  </div>
                </div>
              </div>
            );
          })
        }
        <ScrollButton />
      </motion.section>
    </>
  );
}

export default Projects;
