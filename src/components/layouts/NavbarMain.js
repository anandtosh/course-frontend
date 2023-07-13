import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-700 text-white h-[80px] md:px-[10%] dark:bg-gray-600">
      {/* Left-side links */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link to={'/'}>
            Home
        </Link>
        <Link to={'/courses'}>
            Courses
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white hover:text-gray-300"
        onClick={toggleMobileMenu}
      >
        Menu
      </button>

      {/* Dropdown menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-[80px] right-0 left-0 bg-gray-900">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block text-white hover:text-gray-300">Home</a>
            <a href="#" className="block text-white hover:text-gray-300">About</a>
            <a href="#" className="block text-white hover:text-gray-300">Contact Us</a>
            <a href="#" className="block text-white hover:text-gray-300">Courses</a>
          </div>
        </nav>
      )}

      {/* Right-side links */}
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-green-400 border border-green-300 hover:border-green-200 p-2 px-4 ml-3 rounded-[20px]">Sign Up</a>
        <a href="#" className="text-blue-400 border border-blue-300 hover:border-blue-200 p-2 px-4 ml-3 rounded-[20px]">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
