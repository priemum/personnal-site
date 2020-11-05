import React from 'react';

// STYLE
import './contact.scss'

function Contact() {
  return (
    <div className="contact">
        <div id="contact" className="contact__inner" data-sal-duration="500" data-sal="slide-up"
                data-sal-delay="200" data-sal-easing="ease-out-bounce">
            contact me:
            <a className="contact_red" href="tel:+33651102150"> 06.51.10.21.50 </a>
            or
            <a className="contact_red" href="mailto:pro@evansende.com"> pro@evansende.com ↓</a>
        </div>
    </div>
  );
}
export default Contact;
