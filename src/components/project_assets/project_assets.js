import React from 'react';

// STYLE
import './project_assets.scss'

function Assets(props) {
  return (
    <div className="Assets">
        <div className="assets__inner" data-sal-duration="500"
        data-sal="zoom-out" data-sal-delay="700" data-sal-easing="ease-out-bounce">
            {props.select === 'Context'? <section className="overview">
            <div className=" txt">
                    {props.context}
            </div></section>:
            props.select === 'Technologies'? <section className="technologies">
                <div className="technologies__icones">
                    {props.technologies.icones.map((icone, index) => <img src={icone} key={index} alt='icone'/>)}
                    {props.i18n? <span>i18n</span> : ''}
                </div>
                <div className="technologies__desc txt">
                    {props.technologies.txt}
                </div></section>:
            props.select === 'Wireframe'? <section className="wireframe">
                <img src={props.wireframe.img} className="wireframe__image" alt='wireframe illustration'/>
                <div className="wireframe__link" >
                    {// eslint-disable-next-line
                    props.wireframe.links.map((arg, i) => <a target='_blank' without rel="noreferrer" without="true" key={i} href={arg.link}>{arg.txt}</a>)}
                </div>
                </section> :
            props.select === 'Result'? <section className="result">
            <div className=" txt">
                    {props.result.txt}{props.result.link}
            </div></section> :
            props.select === 'Conclusion'? <section className="conclusion">
                <div className=" txt">
                    {props.conclusion}
                </div>
                <div className="links txt">
                    <a href="https://github.com/ednese" target="_blank" rel="noreferrer">github</a>
                    {props.result.map((arg, i) => <a href={arg.link} target="_blank" rel="noreferrer" key={i} >{arg.txt}</a>)}
                </div></section> : ''}
        </div>
        <div className="project_header__link" data-sal-duration="500" data-sal="slide-up"
              data-sal-delay="1000" data-sal-easing="ease-out-bounce">
              <a href='/'>Back</a>
          </div>
    </div>
  );
}

export default Assets;
