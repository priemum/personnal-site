import React from 'react';

import {motion} from 'framer-motion';

// COMPONENTS
import Nav from '../nav/nav';
import Header from '../header/header';
import Work from '../work/work';
import About from '../about/about';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

// TRANSITION VARIABLE
const pageVariants = {
    initial: {
      opacity: .8,
    },
    in: {
      opacity: 1
    }
};

function Home() {
  return (
    <motion.div
    initial="initial"
    animate="in"
    variants={pageVariants}
    className="Home">
        <Nav/>
        <Header/>
        <Work/>
        <About/>
        <Contact/>
        <Footer/>
    </motion.div>
  );
}

export default Home;
