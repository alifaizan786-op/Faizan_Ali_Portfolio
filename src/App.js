import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/hero'
import AboutMe from './components/aboutme/aboutme';
import Portfolio from './components/portfolio/portfolio'
import Resume from './components/resume/resume'


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Portfolio/>
      <Resume/>
    </div>
  );
}

export default App;
