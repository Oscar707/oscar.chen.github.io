import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-[#2C302E] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">OSCAR CHEN</h1>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#photos" className="hover:text-gray-300">Photos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;