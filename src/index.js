import './index.css';
import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

// React router
import {BrowserRouter, Route, Switch, Link, useLocation} from 'react-router-dom';

// Framer mortion
import {AnimatePresence} from "framer-motion";

import ScrollToTop from './ScrollToTop';



// preload certain images for efficiency
import portrait from './assets/portrait.jpg';
import firstProjectImg from './assets/project-images/feline-finder.png';

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
  const [activePath, setActivePath] = useState('');



  //preload images
  useEffect(() => {
    const img = new Image();
    img.src = portrait;

    const img2 = new Image();
    img2.src = firstProjectImg;
  });

  // set active path
  useEffect(() => {
    switch (location.pathname) {
      case ('/'):
        setActivePath('home');
        break;
      case ('/about'):
        setActivePath('about');
        break;
      case ('/projects'):
        setActivePath('projects');
        break;
        case ('/contact'):
          setActivePath('contact');
          break;
      default:
          setActivePath('')
        break;
    }
  }, [location.pathname]);


  return (
      <main className="main">
        <nav className="navigation">
          <Link
            className="nav-link"
            to="/"
            style={activePath === 'home' ? {color:'#b47c43', cursor:'default'} : {}}
          >
            Home
          </Link>

          <Link
            className="nav-link"
            to="/about"
            style={activePath === 'about' ? {color:'#e2abb1', cursor:'default'} : {}}
          >
            About
          </Link>

          <Link
            className="nav-link"
            to="/projects"
            style={activePath === 'projects' ? {color:'#63939a', cursor:'default'} : {}}
          >
              Projects
          </Link>

          <Link
            className="nav-link"
            to="/contact"
            style={activePath === 'contact' ? {color:'#539cbe', cursor:'default'} : {}}
          >
            Contact
          </Link>
        </nav>

        <ScrollToTop>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </AnimatePresence>
        </ScrollToTop>
      </main>
  )
}
