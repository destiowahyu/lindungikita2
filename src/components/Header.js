import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest('.navbar-menu') && !event.target.closest('.menu-button')) {
      setIsOpen(false);
    }
  };

  // Close menu when scrolling
  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo LindungiKita" className="h-8 md:h-10 mr-2" />
          <Link to="/" className="text-lg md:text-xl font-bold text-gray-800 hover:text-[#147970]">LindungiKita</Link>
        </div>
        <div className="md:hidden">
          <button
            className={`menu-button text-gray-800 hover:text-[#147970] focus:outline-none transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-180' : ''
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="h-6 w-6 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/" className="text-gray-800 hover:text-[#147970] transition duration-300 py-2 md:py-0 md:px-4 block">
            Home
          </Link>
          <Link to="/shelters" className="text-gray-800 hover:text-[#147970] transition duration-300 py-2 md:py-0 md:px-4 block">
            Lokasi Pengungsian
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-[#147970] transition duration-300 py-2 md:py-0 md:px-4 block">
            About
          </Link>
        </nav>
      </div>
      <div
        className={`navbar-menu md:hidden bg-white shadow-md rounded-lg absolute top-14 left-0 right-0 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <ul className="space-y-2 px-4 py-2">
          <li>
            <Link to="/" className="block text-gray-800 hover:text-[#147970] transition duration-300 py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shelters" className="block text-gray-800 hover:text-[#147970] transition duration-300 py-2" onClick={() => setIsOpen(false)}>
              Lokasi Pengungsian
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-gray-800 hover:text-[#147970] transition duration-300 py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
