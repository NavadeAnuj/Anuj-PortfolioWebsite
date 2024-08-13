import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between relative">
        <div className="flex-1 flex justify-center">
          <ul className={`flex flex-col md:flex-row md:space-x-8 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
            <li className="text-white">
              <Link to="/" className="block py-2 md:py-0" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="text-white">
              <Link to="/about" className="block py-2 md:py-0" onClick={closeNavbar}>About</Link>
            </li>
            <li className="text-white">
              <Link to="/experience" className="block py-2 md:py-0" onClick={closeNavbar}>Experience</Link>
            </li>
            <li className="text-white">
              <Link to="/project" className="block py-2 md:py-0" onClick={closeNavbar}>Projects</Link>
            </li>
          </ul>
        </div>
        <button 
          onClick={toggleNavbar} 
          className="md:hidden text-white focus:outline-none absolute top-4 right-4"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
