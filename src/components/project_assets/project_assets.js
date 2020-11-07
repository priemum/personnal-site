import React from 'react';

// STYLE
import './project_assets.scss'

function Assets(props) {
  const back = '<back/>';
  return (
    <div className="Assets">
        <div className="assets__inner" data-sal-duration="500"
        data-sal="zoom-out" data-sal-delay="700" data-sal-easing="ease-out-bounce">
            {props.select === 'Overview'? <section className="overview">
            <div className=" txt">
                    {props.technologies.txt}
            </div></section>:
            props.select === 'Technologies'? <section className="technologies">
                <div className="technologies__icones">
                    {props.technologies.icones.map((icone, index) => <img src={icone} key={index} alt='icone'/>)}
                    <span>i18n</span>
                </div>
                <div className="technologies__desc txt">
                    {props.technologies.txt}
                </div></section>:
            props.select === 'Wireframe'? <section className="wireframe">
                <img src={props.wireframe} alt='icone'/></section> :
            props.select === 'Result'? <section className="result">
            <div className=" txt">
                    {props.result.txt}{props.result.link}
            </div></section> :
            props.select === 'Conclusion'? <section className="conclusion">
                <div className=" txt">
                    {props.conclusion}
                </div></section> : ''}
        </div>
        <div className="back" data-sal-duration="500" data-sal="slide-up"
        data-sal-delay="1000" data-sal-easing="ease-out-bounce">
            <a href='/'>{back}</a>
        </div>
    </div>
  );
}

export default Assets;
