import React, { useState, useEffect } from 'react';
import mainImage from './images/main.jpg';
import k from './images/k.png';
import './ImageSlider.css';

const ImageSection = () => {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const images = [mainImage, k];
  const imageInterval = 3000; // Interval in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, imageInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage, images]);

  return (
    <div className="image-section">
      <img src={currentImage} alt="Slider" className="slider-image" />
    </div>
  );
};

export default ImageSection;
