import React from 'react';
import './work.scss'

import img from '../../assets/images/exe.jpg'

function Work() {
  const images = [{image: img, link: 'test'}, {image: img, link: 'test'}];
  return (
    <div className="work">
      <div className="work__inner">
        <h1 className="work__title"
          data-sal-duration="500" data-sal="zoom-in" data-sal-delay="300"
          data-sal-easing="ease-out-bounce">
          Work
        </h1>
        <div className="work__projects grid">
          {images.map((arg, index) => 
          <a key={index} href={arg.link} data-sal-duration="800" data-sal="slide-down" data-sal-delay={(index + 1) * 200}
              data-sal-easing="ease-out-bounce">
                <img src={arg.image} alt={arg.link}/>
                <div className="work__project__text">
                  Title
                  <span className="subtitle">Subtitle</span>
                </div>
          </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
