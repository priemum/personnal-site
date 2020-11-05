import React from 'react';

// STYLE
import './about.scss'

function About() {
  return (
    <div className="about">
      <div id="about" className="about__inner">
        <h1 className="about__title"
          data-sal-duration="500" data-sal="zoom-in" data-sal-delay="300"
          data-sal-easing="ease-out-bounce">
          About
        </h1>
        <p className="about__desc" data-sal-duration="500" data-sal="fade" data-sal-delay="500"
          data-sal-easing="ease-out-bounce">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
