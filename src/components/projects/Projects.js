import React from 'react';

import {motion} from "framer-motion";

function Projects() {
  return (
    <>
      <motion.section
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 25}}
        transition={{duration: .5}}
      >
        <h1>PROJECTS</h1>
      </motion.section>
    </>
  );
}

export default Projects;
