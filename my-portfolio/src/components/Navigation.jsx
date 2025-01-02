import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-[#2C302E] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">OSCAR CHEN</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/photos" className="hover:text-gray-300">Photos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;