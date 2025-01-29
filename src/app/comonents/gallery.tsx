import React from 'react';

const images = [
  { src: 'img1.png', alt: 'Center Image' },
  { src: '1.png', alt: 'Left Top Image' },
  { src: '2.png', alt: 'Left Bottom Image' },
  { src: '3.png', alt: 'Right Top Image' },
  { src: '4.png', alt: 'Right Bottom Image' },
  { src: '5.png', alt: 'Extra Left Image 1' },
  { src: '6.png', alt: 'Extra Left Image 2' },
  { src: '7.png', alt: 'Extra Right Image 1' },
  { src: '7.png', alt: 'Extra Right Image 2' },
];

const Gallery: React.FC = () => {
  return (
    <>
      <div className="bg-white py-8">
        <p className="text-black text-center text-lg">Share Your Step With</p>
        <h2 className="text-black text-center text-4xl font-semibold">#FuniroFurniture</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4 py-7 bg-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full aspect-square overflow-hidden rounded-lg ${
              index === 0 ? 'col-span-full sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
