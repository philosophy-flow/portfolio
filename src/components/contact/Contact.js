import React from 'react';

import {motion} from "framer-motion";

function Contact() {
  return (
    <>
      <motion.section
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 25}}
        transition={{duration: .5}}
      >
        <h1>CONTACT</h1>
      </motion.section>
    </>
  );
}

export default Contact;
