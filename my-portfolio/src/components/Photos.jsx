import React from 'react';

const Photos = () => {
  // Sample photo grid structure based on your Figma design
  return (
    <section id="photos" className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Placeholder for photo grid */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div 
            key={index} 
            className="aspect-video bg-[#2C302E] rounded-lg overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Photo {index}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;