import React, {useState} from 'react';

import {motion} from 'framer-motion';

// COMPONENTS
import ProjectHeader from '../project_header/project_header';
import Select from '../select/select';
import Assets from '../project_assets/project_assets';
import Footer from '../footer/footer';

// ICONES
import Illustrator from '../../assets/icones/Adobe_Illustrator.svg'
import XD from '../../assets/icones/Adobe_XD.svg'
import ReactIcon from '../../assets/icones/logo512.png'
import Redux from '../../assets/icones/Redux.svg'
import Css from '../../assets/icones/CSS.svg'

// IMAGE
import hoffson from '../../assets/images/hoffson_wireframe.png'

// WIREFRAMES
import web_1 from '../../assets/wireframes/Hoffson/web_page_home.png'
import web_2 from '../../assets/wireframes/Hoffson/web_page_articles.png'
import web_3 from '../../assets/wireframes/Hoffson/web_page_buy.png'

const pageVariants = {
    initial: {
      opacity: .8,
    },
    in: {
      opacity: 1
    }
};

function Hoffson() {
  const list = ['Context', 'Technologies', 'Wireframe', 'Conclusion'];

  const [select, setSelect] = useState(list[0]);

  const title = {name:'Hoffson', surname:' e-commerce ', type:'site'};
  const technologies = {txt: 'To develop this site, I used ReactJs with hooks then I implemented Redux in the project in addition to the hooks to facilitate accessibility to state variables. For the style and animations I used css. Regarding the graphics part, I use adobe Xd to do the model as well as illustrator.', icones: [Illustrator, XD, ReactIcon, Redux, Css]}
  const conclusion = 'The site is still in development, I add features when I want and it allows me to improve myself on this kind of app. You can find it below as for me I invite you to visit my github if you want to see more!';
  const wireframe = {img: hoffson, links:[{link: web_1, txt: 'page 1'},{link: web_2, txt: 'page 2'},{link: web_3, txt: 'page 3'}]}
  const Context = 'When I wanted to buy a product on amazon this summer, I wondered how code such sites. It was only natural that I started to develop hoffson in order to learn how to develop an e-commerce site. The site is fictitious and still under construction. I allow myself to modify it when I feel like it and I take care in a 1st time exclusively of the front end.'
  const result = [{txt: 'project-code', link: 'https://github.com/ednese/HoffsonRedux/tree/gh-pages'},{txt: 'site', link: 'https://ednese.github.io/HoffsonRedux'}];
  return (
    <motion.div
    initial="initial"
    animate="in"
    variants={pageVariants}
    className="Hoffson">
        <div className="background"
        style={{'position':'absolute','height':'100vh','background':'rgb(14, 14, 14)','width':'100%','zIndex':'-1'}}/>
        <ProjectHeader
        title={title}
        date='Not Finish'
        role='Web Designer / Developer Front End'
        type='Professional Project'
        />
        {Select(list, select, setSelect)}
        <Assets 
        select={select}
        context={Context}
        technologies={technologies}
        wireframe={wireframe}
        result={result}
        conclusion={conclusion}
        />
        <Footer class="project"/>
    </motion.div>
  );
}

export default Hoffson;
