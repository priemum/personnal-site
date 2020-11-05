import React, {useEffect} from 'react';

import sal from "sal.js";
import "sal.js/dist/sal.css";

import Nav from './components/nav/nav';
import Header from './components/header/header';
import Work from './components/work/work';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.scss';

function App() {
  useEffect(sal, []);
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

export default App;
