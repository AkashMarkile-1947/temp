// components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          loading="lazy"
          width={1000}
          height={500}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover object-contain transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
