import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/hero'
import AboutMe from './components/aboutme/aboutme';
import Portfolio from './components/portfolio/portfolio'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Portfolio/>
    </div>
  );
}

export default App;
