import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componenet/Navbar/Navbar';
import Home from './Componenet/Pages/Home/Home';
import Projects from './Componenet/Pages/Projects/Projects';
import About from './Componenet/Pages/About/About';
import Experience from './Componenet/Pages/Experiences/experiences';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
