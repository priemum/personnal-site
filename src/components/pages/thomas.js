import React, {useState} from 'react';

import {motion} from 'framer-motion';

// COMPONENTS
import ProjectHeader from '../project_header/project_header';
import Select from '../select/select';
import Assets from '../project_assets/project_assets';
import Footer from '../footer/footer';

// ICONES
import Vue from '../..//assets/icones/Vue.svg'
import Js from '../../assets/icones/js.svg'
import Html from '../../assets/icones/HTML.svg'
import Css from '../../assets/icones/CSS.svg'

// IMAGE
import thomas from '../../assets/images/thomas_wireframe.png'

// WIREFRAMES
import web_1 from '../../assets/wireframes/ThomasJauze/web_page_1.png'
import web_2 from '../../assets/wireframes/ThomasJauze/web_page_2.png'
import mobile from '../../assets/wireframes/ThomasJauze/mobile.png'

const pageVariants = {
    initial: {
      opacity: .8,
    },
    in: {
      opacity: 1
    }
};

function Thomas() {
  const list = ['Context', 'Technologies', 'Wireframe', 'Conclusion'];

  const [select, setSelect] = useState(list[0]);

  const title = {name:'THOMAS', surname:' JAUZE ', type:'PORTFOLIO'};
  const technologies = {txt: 'I used for his vuejs site as he asked me and I stayed on the basic CSS for styling and animations. The site should be able to be consulted in both French and English and I used i18n for that.', icones: [Html, Css, Js, Vue]}
  const conclusion = 'The site is currently finished, or at least what needed to be done basic is finished although I have to add to it some modifications. You can find it below as for me I invite you to visit my github if you want to see more!';
  const wireframe = {img: thomas, links:[{link: web_1, txt: 'web 1'},{link: web_2, txt: 'web 2'},{link: mobile, txt: 'mobile'}]}
  const Context = 'Thomas Jauze, a graphic designer, contacted me to make his portfolio. He wanted me to make the site with vuejs because he knows this technology and this will allow him to modify elements later. He provided me the web and mobile models of as well as all the assets. After discussing how we were going to attack his site, we adapted the model by adding, removing and modifying elements.'
  const result = [{txt: 'project-code', link: 'https://github.com/ednese/portfolio-thomas-vue'},{txt: 'site', link: 'https://ednese.github.io/portfolio-thomas-vue'}];
  return (
    <motion.div
    initial="initial"
    animate="in"
    variants={pageVariants}
    className="Thomas">
        <div className="background"
        style={{'position':'absolute','height':'100vh','background':'rgb(14, 14, 14)','width':'100%','zIndex':'-1'}}/>
        <ProjectHeader
        title={title}
        date='Oct. 2020'
        role='Developer UI'
        type='Personal Project'
        />
        {Select(list, select, setSelect)}
        <Assets
        select={select}
        context={Context}
        technologies={technologies}
        i18n={true}
        wireframe={wireframe}
        result={result}
        conclusion={conclusion}
        />
        <Footer class="project"/>
    </motion.div>
  );
}

export default Thomas;
