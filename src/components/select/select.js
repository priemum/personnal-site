import React from 'react';

// STYLE
import './select.scss'

function Select(list, select, setSelect) {
  return (
    <section className="select">
        <div className="select__inner">
            <ul role="tablist" className="select__list"
            data-sal-duration="500" data-sal="zoom-out" data-sal-delay="600"
            data-sal-easing="ease-out-bounce">
                {list.map((arg, index) => <li className={select === arg? 'active sal-animate': 'sal-animate'}
                role="tab" onClick={() => setSelect(arg)} key={index}>{arg}</li>)}
            </ul>
        </div>
    </section>
  );
}
export default Select;
