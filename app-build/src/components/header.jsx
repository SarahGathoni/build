import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="Logo" className="h-8 w-8" />
          <div className="text-white text-lg font-bold">Construction Co.</div>
        </div>
        {/* Navigation */}
        <nav className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
