// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.jpeg" alt="Logo" className="h-8 w-8" />
          <span className="ml-2">STARMAS CONSTRUCTION</span>
        </div>
        {/* Address/Location */}
        <div className="text-center">
          <p>123 Main St, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
