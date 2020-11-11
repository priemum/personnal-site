import React, {useEffect} from 'react';

// STYLE
import './App.css'

// ROUTER
import {Switch, Route, useLocation} from 'react-router-dom';

// PAGES TRANSITIONS
import {AnimatePresence} from 'framer-motion';
// COMPONENTS
import Home from './components/pages/home';
import Thomas from './components/pages/thomas';
import Hoffson from './components/pages/hoffson';

// ANIMATIONS
import sal from "sal.js";
import "sal.js/dist/sal.css";

// ROUTES
const routes = [
  { path: '/', Component: Home },
  { path: '/thomas', Component: Thomas },
  { path: '/hoffson', Component: Hoffson },
]

function App() {
  useEffect(sal, []);
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component}/>
          ))}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
