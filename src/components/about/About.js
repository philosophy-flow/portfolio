import './About.css';
import portrait from '../../assets/portrait.jpg';

import React from 'react';
import {Link} from 'react-router-dom';

import {motion} from "framer-motion";

function About() {
  return (
    <>
      <motion.section
        className="About"
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 25}}
        transition={{duration: .5}}
      >
        <div className="about-text-container">
          <h2 className="about-header">About Me</h2>
          <p className="about-body">
            It’s exciting to live in a world of constantly evolving technology, and it's even more exciting to leverage that technology to craft amazing user experiences. My name is <span className="bold-txt">Jacob Stewart</span>, and I am a front end web developer that specializes in the <span className="bold-txt">React</span> ecosystem. I am passionate about learning new things, and I look forward to creatively applying my knowledge every day.
          </p>
          <div className="about-button-container">
              <Link className="about-nav-link" to="/projects">see my work </Link>
              <Link className="about-nav-link" to="/contact">get in touch </Link>
              <a
                className="about-nav-link"
                href="https://pdfhost.io/v/bIZSKet7f_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
          </div>
        </div>
        <div className="about-border"></div>
        <div className="portrait-container">
          <img src={portrait} className="portrait" alt="portrait" />
        </div>
      </motion.section>
    </>
  );
}

//test comment


export default About;
