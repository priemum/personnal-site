import React, {useEffect} from 'react';
import sal from "sal.js";
import "sal.js/dist/sal.css";
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Work from './components/work/work';

import './App.scss';

function App() {
  useEffect(sal, []);
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <Work/>
    </div>
  );
}

export default App;
