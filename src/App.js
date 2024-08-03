import React from 'react';
import './App.css';
import { TempNavBar } from './components/TempNavBar.js';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience.js';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <TempNavBar />
      <Banner />
      <Experience />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
