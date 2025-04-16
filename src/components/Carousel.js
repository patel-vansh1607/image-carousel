// src/components/ImageCarousel.jsx
import React, { useState } from "react";
import "../styles/Carousel.css";

import img1 from "../images/bird.jpg";
import img2 from "../images/cat.jpg";
import img3 from "../images/lion.jpg";
import img4 from "../images/panda.jpg";
import img5 from "../images/squirel.jpg";
import img6 from "../images/turtle.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-btn prev" onClick={goToPrev}>&#10094;</button>
      <button className="carousel-btn next" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default ImageCarousel;
