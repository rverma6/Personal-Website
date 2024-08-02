import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TempNavBar } from './components/TempNavBar.js';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience.js';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact.js';
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
