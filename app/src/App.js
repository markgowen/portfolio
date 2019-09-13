import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return <div className="App">
    <Navigation />
    <Hero />
    <Projects />
  </div>;
}

export default App;
