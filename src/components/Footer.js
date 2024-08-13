import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Brenty Ltd. All rights reserved.</p>
        <div className="mt-4">
          <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white">About Us</a>
          <span className="mx-2">|</span>
          <a href="#shop" className="text-gray-300 dark:text-gray-400 hover:text-white">Shop</a>
          <span className="mx-2">|</span>
          <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
