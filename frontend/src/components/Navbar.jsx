import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with Text */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/Farm2Door.png"
              alt="Farm2Door"
              className="w-50 h-16 object-contain" // Increased logo size
            />
          </Link>
        </div>

        {/* Desktop Navigation with Search and Cart Icons */}
        <nav className="hidden md:flex items-center space-x-4">
          {/* Search Icon */}
          <div className="relative flex items-center">
            <button
              onClick={toggleSearch}
              className="text-gray-700 focus:outline-none"
            >
              {/* Increased search icon size */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8" // Increased size
              >
                <path d="M10 2a8 8 0 105.29 14.29l5.38 5.38a1 1 0 001.42-1.42l-5.38-5.38A8 8 0 0010 2zm0 2a6 6 0 014.67 9.67A6 6 0 0110 4z" />
              </svg>
            </button>

            {/* Search Bar */}
            {isSearchActive && (
              <div
                ref={searchRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white p-4 w-80 shadow-lg border rounded-lg"
              >
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 ease-in-out"
                />
              </div>
            )}
          </div>
          <Link
            to="/"
            className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
          >
            Products
          </Link>
          <Link
            to="/Buy"
            className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
          >
            Buy
          </Link>
          <Link
            to="/Sell"
            className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
          >
            Sell
          </Link>
          <Link
  to="/Contact"
  className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
>
  Contact
</Link>

          <Link
            to="/Login"
            className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
          >
            Login/Signup
          </Link>

          {/* Shopping Cart Icon */}
          <Link to="/cart" className="ml-4 text-gray-700 hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l1.543 9.286A2 2 0 0 0 8.5 14h7a2 2 0 0 0 1.957-1.714L19 7H6"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="15" cy="20" r="1" />
            </svg>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out z-30">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
            >
              Home
            </Link>
            <Link
              to="/Products"
              className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
            >
              Products
            </Link>
            <Link
              to="/Buy"
              className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
            >
              Buy
            </Link>
            <Link
              to="/Sell"
              className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
            >
              Sell
            </Link>
            <Link
              to="/Login"
              className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full border border-transparent"
            >
              Login/Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;





















//for searc



// import React, { useState } from "react";
import Products from './../pages/Products';

// const SearchPopup = () => {
//   const [isSearchActive, setIsSearchActive] = useState(false);

//   const toggleSearchPopup = () => {
//     setIsSearchActive(!isSearchActive);
//   };

//   const closeSearchPopup = () => {
//     setIsSearchActive(false);
//   };

//   return (
//     <div>
//       {/* Button to Open Search Popup */}
//       <button
//         className="button-search-popup bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
//         onClick={toggleSearchPopup}
//       >
//         Search
//       </button>

//       {/* Search Popup */}
//       <div
//         className={`site-search-popup fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center transition-all duration-300 ${
//           isSearchActive ? "active fadein" : "hidden"
//         }`}
//       >
//         {/* Search Box */}
//         <div className="relative bg-white p-6 rounded-lg shadow-lg">
//           <button
//             className="site-search-popup-close absolute top-2 right-2 text-gray-700 hover:text-gray-900"
//             onClick={closeSearchPopup}
//           >
//             &times;
//           </button>
//           <input
//             type="search"
//             placeholder="Search here..."
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Overlay */}
//         <div
//           className="site-search-popup-overlay fixed inset-0"
//           onClick={closeSearchPopup}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default SearchPopup;
