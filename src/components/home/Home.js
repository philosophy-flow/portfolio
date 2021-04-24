import './Home.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="Home">
        <div className="home-content-container">
          <h1 className="home-text">Hi. I'm Jacob, an NYC based web developer.</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
