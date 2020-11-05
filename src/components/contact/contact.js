import React from 'react';
import './contact.scss'

function Contact() {
  return (
    <div className="contact">
        <div className="contact__inner">
            contact me:
            <a className="contact_red" href="tel:+33651102150"> 06.51.10.21.50 </a>
            or
            <a className="contact_red" href="mailto:pro@evansende.com"> pro@evansende.com ↓</a>
        </div>
    </div>
  );
}
export default Contact;
