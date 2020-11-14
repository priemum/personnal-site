import React from 'react';

// STYLE
import './about.scss'

function About() {
  return (
    <section className="about">
      <div id="about" className="about__inner">
        <h1 className="about__title"
          data-sal-duration="500" data-sal="zoom-in" data-sal-delay="300"
          data-sal-easing="ease-out-bounce">
          About
        </h1>
        <p className="about__desc" data-sal-duration="500" data-sal="fade" data-sal-delay="500"
          data-sal-easing="ease-out-bounce">
            <span className="spaces">
              I have always liked <span className="white">mathematics</span>, <span className="white">algorithms </span>
              and with the development of apps I found <span className="white">my happiness</span>.
            </span>
            <span className="spaces">
              Moreover, Photoshop, Illustrator, Xd... I use these softwares since <span className="white">more than 5 years</span>.
              These allowed me to develop <span className="white">a sensitivity</span> for <span className="white">UI</span> and <span className="white">UX</span>.
              Now I build platforms with famous libraries <span className="white">like React</span>.
            </span>
            <span className="spaces">
              If you want to know more about me, you have <span className="white">my email</span> and <span className="white">my number</span> below. <span className="sun">Hopefully soon !</span>
            </span>
        </p>
      </div>
    </section>
  );
}

export default About;
