import React from 'react';
import Photos from '../components/Photos';

const PhotosPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">Photo Gallery</h1>
      <Photos />
    </div>
  );
};

export default PhotosPage;