import React from 'react';

// COMPONENTS
import Nav from './nav/nav';
import Header from './header/header';
import Work from './work/work';
import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';

function Home() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <Work/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default Home;
