import React from 'react';

// STYLE
import './header.scss'

// ICONES
import Illustrator from '../../assets/icones/Adobe_Illustrator.svg'
import Photoshop from '../../assets/icones/Adobe_Photoshop.svg'
import XD from '../../assets/icones/Adobe_XD.svg'
import ReactJs from '../../assets/icones/React.svg'
import Vue from '../../assets/icones/Vue.svg'
import Js from '../../assets/icones/js.svg'

function Header() {
  const tab = [Photoshop, Illustrator, XD, ReactJs, Vue, Js];
  const word = 'Lorem ipsum dolor';
  return (
    <header className="header" id="home">
        <div className="header__inner">
            <h1 className="header__title">
                {word.split("").map((letter, index) => <span key={index} style={{'color': 'white'}}
                    data-sal-duration="500" data-sal="slide-down" data-sal-delay={index * 50}
                    data-sal-easing="ease-out-bounce">{letter}</span>)}
            </h1>
            <h2 className="header__subtitle" data-sal-duration="500" data-sal="slide-up"
                data-sal-delay="600" data-sal-easing="ease-out-bounce">
                Aliquid, ad doloremque numquam veniam nisi iusto culpa est voluptatem
            </h2>
            <div className="header__icones" data-sal-duration="500" data-sal="slide-up"
                data-sal-delay="800" data-sal-easing="ease-out-bounce">
                {tab.map(item => <img key={item} className="icone" src={item} alt="icone"/>)} 
            </div>
            <div className="header__contact" data-sal-duration="500" data-sal="slide-down" data-sal-delay="800"
                data-sal-easing="ease-out-bounce">
                <a href="mailto:pro@evansende.com" className="header__contact__button">
                    Download my resume
                </a>
            </div>
            
        </div>
    </header>
  );
}

export default Header;
