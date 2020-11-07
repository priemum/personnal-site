import React, {useEffect} from 'react';

// STYLE
import './App.css'

// ROUTER
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';

// PAGES TRANSITIONS
import {AnimatePresence} from 'framer-motion';
// COMPONENTS
import Home from './components/home';
import Thomas from './components/thomas';

// ANIMATIONS
import sal from "sal.js";
import "sal.js/dist/sal.css";

// ROUTES
const routes = [
  { path: '/', Component: Home },
  { path: '/thomas', Component: Thomas },
]

function App() {
  useEffect(sal, []);
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} component={Component}/>
            ))}
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
