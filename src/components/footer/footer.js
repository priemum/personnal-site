import React from 'react';

// STYLE
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
        <div className="footer__inner">
            Evan Sende © 2020 All rights reserved
            <div className="footer__inner__soocial">
                <a href="https://www.linkedin.com/in/evan-sende-405b441b4/" target="_blank" rel="noreferrer" className="footer__inner__soocial_red"> LinkedIn</a>
                <a href="https://github.com/ednese" target="_blank" rel="noreferrer" className="footer__inner__soocial_red"> Github</a>
            </div>
        </div>
    </div>
  );
}
export default Footer;
