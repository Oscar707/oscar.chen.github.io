import React from 'react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#474A48]">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MainLayout;