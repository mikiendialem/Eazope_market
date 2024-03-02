import * as React from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Team from './components/Team'
import All from './components/All'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './App.css';

export default function App() {
  return (
      <div className='app' >
        <Router>
          <div className="about-first">
            <div className="about-profile">
              <div></div>
              <h5>Eazope Solutions</h5>
            </div>
            <div className="about-nav">
                <ul>
                  <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                  <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                  <li><ScrollLink to="service" smooth={true} duration={500}>Services</ScrollLink></li>
                  <li><ScrollLink to="team" smooth={true} duration={500}>Team</ScrollLink></li>
                  <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                </ul>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service/>} />
            <Route path="/team" element={<Team/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
      </div>
  );
}