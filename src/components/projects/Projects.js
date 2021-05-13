import './Projects.css';

import React, {useEffect} from 'react';
import ScrollButton from './ScrollButton';
import {motion, useAnimation} from "framer-motion";

// detects when element is in view
import {useInView} from 'react-intersection-observer';

import {projects} from './project-data';


const Project = ({project}) => {
  const controls = useAnimation();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    // if (!inView) {
    //   controls.start('hidden')
    // }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {scale: 0, y: 25},
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: .5
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants = {boxVariants}
      className="project"
      >
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
    </motion.div>
  )
}

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
              <Project
                project={project}
                key={project.name} />
            );
          })
        }
        <ScrollButton />
      </motion.section>
    </>
  );
}

export default Projects;
