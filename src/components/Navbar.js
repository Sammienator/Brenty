import React, { useState, useEffect } from 'react';
import { FaLeaf, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <FaLeaf className="text-[#DBB5B5] text-3xl" />
            <h1 className="text-xl font-bold ml-2 text-gray-800 dark:text-white">Brenty </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-green-500">About Us</a>
            <a href="#gallery" className="text-gray-800 dark:text-gray-200 hover:text-green-500">Gallery</a>
            <a href="#shop" className="text-gray-800 dark:text-gray-200 hover:text-green-500">Shop</a>
            <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-green-500">Contact</a>
            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 focus:outline-none">
              {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 focus:outline-none mr-4">
              {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
            </button>
            <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <a href="#about" className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">About Us</a>
            <a href="#gallery" className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Gallery</a>
            <a href="#shop" className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Shop</a>
            <a href="#contact" className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
