import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo LindungiKita" className="h-8 md:h-10 mr-2" />
          <Link to="/" className="text-lg md:text-xl font-bold text-gray-800">LindungiKita</Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-4">
            <li className="hidden md:block">
              <Link to="/" className="text-gray-800 hover:text-blue-600 transition duration-300 py-2 md:py-0 md:px-4 block" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/shelters" className="text-gray-800 hover:text-blue-600 transition duration-300 py-2 md:py-0 md:px-4 block" onClick={() => setIsOpen(false)}>
                Lokasi Pengungsian
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/about" className="text-gray-800 hover:text-blue-600 transition duration-300 py-2 md:py-0 md:px-4 block" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 rounded-lg absolute top-16 right-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block text-gray-800 hover:text-blue-600 transition duration-300 py-2 px-4" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shelters" className="block text-gray-800 hover:text-blue-600 transition duration-300 py-2 px-4" onClick={() => setIsOpen(false)}>
                Lokasi Pengungsian
              </Link>
            </li>
            <li>
              <Link to="/about" className="block text-gray-800 hover:text-blue-600 transition duration-300 py-2 px-4" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="text-gray-800 hover:text-blue-600 focus:outline-none absolute top-2 right-2"
            onClick={toggleMenu}
          >
            <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
