import React from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Photos from './components/Photos.jsx';

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Photos />
    </MainLayout>
  );
};

export default App;