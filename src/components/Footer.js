import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">About Brenty Ltd.</h3>
          <p className="text-gray-400 dark:text-gray-500">Brenty Ltd. is your go-to destination for the finest teas. We pride ourselves on quality, variety, and exceptional customer service.</p>
        </div>

        {/* Links Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300 ease-in-out">About Us</a>
            </li>
            <li>
              <a href="#shop" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300 ease-in-out">Shop</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300 ease-in-out">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} SammienatorInc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
