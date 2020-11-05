import React, {useState} from 'react';

import './burger.scss'

function Burger(tab) {
  const [active, setActive] = useState(false);
  const [slide, setSlide] = useState('burger__anim');
  const toggleSlide = () => {
      setActive(!active);
      if (!active === true)
        setSlide('burger__anim open')
      else if (!active === false)
        setSlide('burger__anim close')
  }
  return (
    <div className="Burger">
        <div className={active? 'burger__icon active' : 'burger__icon'} onClick={toggleSlide}>
            <span/>
        </div>
        <div className={slide}>
          <div className={slide + ' nav'}>
              <ul className="burger__anim__nav_items">
                  {tab.map((item, index) => <li key={index}><a onClick={toggleSlide} href={`#` + item.link}>{item.name}</a></li>)}
              </ul>
          </div>
        </div>
    </div>
  );
}
export default Burger;