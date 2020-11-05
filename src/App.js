import React, {useEffect} from 'react';

// ROUTER
import {BrowserRouter as Router, Route} from 'react-router-dom'

// COMPONENTS
import Home from './components/home';

// ANIMATIONS
import sal from "sal.js";
import "sal.js/dist/sal.css";

function App() {
  useEffect(sal, []);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
