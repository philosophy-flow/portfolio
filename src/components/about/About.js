import './About.css';
import React from 'react';

function About() {
  return (
    <>
      <section className="About">
        <div className="about-text-container">
          <h2 className="about-header">About Me</h2>
          <p className="about-body">
            It’s exciting to live in a world of constantly evolving technology, and it's even more exciting to build things in it. My name is <span className="name">Jacob Stewart</span>, and I am a front end web developer that specializes in React. I am passionate about technology and learning new things, and I look forward to applying my knowledge in a professional environment while continuing my perpetual learning journey.
          </p>
        </div>
        <div className="portrait-container"></div>
      </section>
    </>
  );
}

//test comment


export default About;
