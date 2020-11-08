import React from 'react';

// STYLE
import './work.scss'

// IMAGES
import thomas from '../../assets/images/thomas_work.png'

function Work() {
  const images = [
    {image: thomas, link: '/thomas', title:'ThomasJauze Portfolio', sub: 'Professional Project'},
    {image: thomas, link: '/hoffson', title:'Hoffson', sub: 'Personal Project'}
  ];
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
            <img className="work__project__img" src={arg.image} alt={arg.link}/>
            <div className="work__project__text">
              {arg.title}
              <span className="subtitle">{arg.sub}</span>
            </div>
          </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
