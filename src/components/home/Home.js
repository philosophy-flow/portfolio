import './Home.css';
import React, {useState, useEffect} from 'react';

import subwayBG from '../../assets/subway.jpg';
import cityBG from '../../assets/test.jpg';

import {motion} from "framer-motion";


function Home() {
  const [activeBG, setActiveBG] = useState(subwayBG)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeBG === subwayBG) {
        setActiveBG(cityBG)
      } else if (cityBG) {
        setActiveBG(subwayBG);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <motion.section
        className="Home"
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 25}}
        transition={{duration: .5}}
        style={{backgroundImage: `url(${activeBG})`}}
      >
        <div
          className="home-content-container"
          >
          <h1 className="home-text">Hi. I'm Jacob, an NYC based web developer.</h1>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
