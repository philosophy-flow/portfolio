import './About.css';
import React from 'react';

function About() {
  return (
    <>
      <section className="About">
        <div className="about-text-container">
          <h2 className="about-header">About Me</h2>
          <p className="about-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lectus non odio scelerisque laoreet. Pellentesque efficitur et enim non porttitor. Morbi in ornare nibh. Sed in ante volutpat, varius augue a, dapibus lorem. Proin vehicula non sem eu maximus. Cras euismod ornare enim eget lobortis. Sed dapibus cursus libero a lobortis.
            <br/><br/>
            Sed est elit, tincidunt in vehicula vitae, posuere id velit. Integer non ex at est molestie dignissim. Suspendisse potenti. Maecenas ullamcorper condimentum ornare.
            Pellentesque efficitur et enim non porttitor. Morbi in ornare nibh. Sed in ante volutpat, varius augue a, dapibus lorem. Proin vehicula non sem eu maximus. Cras euismod ornare enim eget lobortis. Sed dapibus cursus libero a lobortis.
          </p>
        </div>
        <div className="portrait-container"></div>
      </section>
    </>
  );
}

export default About;
