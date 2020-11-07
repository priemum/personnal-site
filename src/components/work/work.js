import React from 'react';

// STYLE
import './work.scss'

// IMAGES
import thomas from '../../assets/images/thomas_work.png'

function Work() {
  const images = [{image: thomas, link: '/thomas'}, {image: thomas, link: 'test'}];
  return (
    <div className="work">
      <div id="work" className="work__inner">
        <h1 className="work__title"
          data-sal-duration="500" data-sal="zoom-in" data-sal-delay="300"
          data-sal-easing="ease-out-bounce">
          Work
        </h1>
        <div className="work__projects grid" data-sal-duration="400" data-sal="fade" data-sal-delay="600"
              data-sal-easing="ease-out-bounce">
          {images.map((arg, index) => 
          <a key={index} href={arg.link}>
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
