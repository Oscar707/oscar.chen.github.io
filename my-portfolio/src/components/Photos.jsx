import React from 'react';

const Photos = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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