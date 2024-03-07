import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Navebar from './App';
import { Home } from './Components/Home';
import About1 from './Components/About1';
import Project from './Components/Project';
import Resume from './Components/Resume';
import Contact from './Components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navebar/>
    <Home/>
    <About1></About1>
    <Project/>
    <Resume/>
    <Contact/>
    
  </div>
);

