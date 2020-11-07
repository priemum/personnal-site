import React, {useEffect} from 'react';

// ROUTER
import {BrowserRouter as Router, Route} from 'react-router-dom'

// COMPONENTS
import Home from './components/home';
import Thomas from './components/thomas';

// ANIMATIONS
import sal from "sal.js";
import "sal.js/dist/sal.css";

function App() {
  useEffect(sal, []);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/thomas" exact component={Thomas}/>
      </Router>
    </div>
  );
}

export default App;
