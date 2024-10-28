// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import RRBJEMOCK from './components/RRBJEMOCK';
import Contact from './components/Contact';

import './App.css';  // Importing the CSS file here


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <RRBJEMOCK/>
    </div>
  );
}

export default App;
