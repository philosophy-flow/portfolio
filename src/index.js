import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// React router
import {BrowserRouter, Route, Switch, Link, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

// Routes (pages)
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Error from './Error.js';




ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);


function App() {
  const location = useLocation();
  return (
      <main className="main">
        <nav className="navigation">
          <Link className="nav-link"  to="/">Home </Link>
          <Link className="nav-link" to="/about">About </Link>
          <Link className="nav-link" to="/projects">Projects </Link>
          <Link className="nav-link" to="/contact">Contact </Link>
        </nav>

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </AnimatePresence>
      </main>
  )
}
