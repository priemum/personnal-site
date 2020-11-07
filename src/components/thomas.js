import React, {useState} from 'react';

import {motion} from 'framer-motion';

// COMPONENTS
import ProjectHeader from './project_header/project_header';
import Select from './select/select';
import Assets from './project_assets/project_assets';
import Footer from './footer/footer';

// STYLE
import './style/thomas.scss'

// ICONES
import Vue from '../assets/icones/Vue.svg'
import Js from '../assets/icones/js.svg'
import Html from '../assets/icones/HTML.svg'
import Css from '../assets/icones/CSS.svg'

// IMAGE
import thomas from '../assets/images/thomas_wireframe.png'

// WIREFRAMES
import web_1 from '../assets/wireframes/ThomasJauze/web_page_1.png'
import web_2 from '../assets/wireframes/ThomasJauze/web_page_2.png'
import mobile from '../assets/wireframes/ThomasJauze/mobile.png'

const pageVariants = {
    initial: {
      opacity: .8,
    },
    in: {
      opacity: 1
    }
};

function Thomas() {
  const list = ['Overview', 'Technologies', 'Wireframe', 'Result', 'Conclusion'];

  const [select, setSelect] = useState(list[0]);

  const title = {name:'THOMAS', surname:' JAUZE ', type:'PORTFOLIO'};
  const technologies = {txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', icones: [Html, Css, Js, Vue]}
  const conclusion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const wireframe = {img: thomas, links:[{link: web_1, txt: 'web 1'},{link: web_2, txt: 'web 2'},{link: mobile, txt: 'mobile'}]}
  const result = {txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', link: 'link'};
  const Overview = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <motion.div
    initial="initial"
    animate="in"
    variants={pageVariants}
    className="App">
        <div className="background"
        style={{'position':'absolute','height':'100vh','background':'rgb(14, 14, 14)','width':'100%','zIndex':'-1'}}/>
        <ProjectHeader
        title={title}
        date='Oct. 2020'
        role='Developer Front End'
        type='Professional Project'
        />
        {Select(list, select, setSelect)}
        <Assets 
        select={select}
        overview={Overview}
        technologies={technologies}
        wireframe={wireframe}
        result={result}
        conclusion={conclusion}
        />
        <Footer class="project"/>
    </motion.div>
  );
}

export default Thomas;
