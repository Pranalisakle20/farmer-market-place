

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false); // State to toggle search bar visibility
  const searchRef = useRef(null); // Ref for search input to detect clicks outside

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive); // Toggle search bar visibility
  };

  // Close the search bar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false); // Close search bar if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener
    };
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          <Link to="/">
            {/* Use image tag for the logo */}
            <img src="/images/images.jpg" alt="Farm2Door" className="w-80 h-12 object-contain" />

          </Link>
        </div>
         {/* Search Button */}
         <button onClick={toggleSearch} className="text-gray-700 md:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 16l4 4M6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
          </svg>
        </button>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Home</Link>
          <Link to="/Products" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Products</Link>
          <Link to="/Buy" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Buy</Link>
          <Link to="/Sell" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Sell</Link>
          <Link to="/Login" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Login/Signup</Link>
        </nav>

        
       

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Search Input (Visible on both desktop and mobile when active) */}
      {isSearchActive && (
        <div ref={searchRef} className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-40">
          <input
            type="search"
            placeholder="Search..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out z-30">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Home</Link>
            <Link to="/Products" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Products</Link>
            <Link to="/Buy" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Buy</Link>
            <Link to="/Sell" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Sell</Link>
            <Link to="/Login" className="text-gray-700 hover:text-green-600 transition-all duration-300 ease-in-out">Login/Signup</Link>

           
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;