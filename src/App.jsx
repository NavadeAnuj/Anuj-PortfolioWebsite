import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componenet/Navbar/Navbar';
import Home from './Componenet/Pages/Home/Home';
import About from './Componenet/Pages/About/About';
import Projects from './Componenet/Pages/Projects/Projects';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
