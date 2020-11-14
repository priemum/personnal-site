import React from 'react';

// STYLE
import './nav.scss'

// COMPONENT
import Burger from './burger/burger';

function Nav() {
  const tab = [{name: 'Home', link: 'home'}, {name: 'Work', link: 'work'}, {name: 'About', link: 'about'}, {name: 'Contact', link: 'contact'}]
  return (
    <nav className="navigation__inner">
        <ul className="navigation__bar"
        data-sal-duration="500"
        data-sal="slide-down"
        data-sal-delay="1000"
        data-sal-easing="ease-out-bounce">
            {tab.map((item, index) => <li className="navigation__bar__element" key={index}><a href={`/#` + item.link}>{item.name}</a></li>)}
        </ul>
        {Burger(tab)}
    </nav>
  );
}

export default Nav;
