import React from 'react';

// STYLE
import './project_header.scss'

function ProjectHeader(props) {
  return (
    <div className="project_header">
        <div className="project_header__inner">
          
            <div className="project_header__title"
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease-out-bounce">
            {/* <div className="project_header__title"> */}
                {props.title.name}
                {props.title.surname}
                {props.title.type}
            </div>
            <div className="project_header__subtitle"
            data-sal-duration="500"
            data-sal="slide-down"
            data-sal-delay="400"
            data-sal-easing="ease-out-bounce">
                <div><span>Date: </span>{props.date}</div>
                <div><span>Role: </span>{props.role}</div>
                <div><span>Type: </span>{props.type}</div>
            </div>
        </div>
    </div>
  );
}
export default ProjectHeader;
