import React, { useState } from "react";
import "./carousel.css";

import html from "../images/html5.svg";
import css from "../images/css3.svg";
import sass from "../images/sass.svg";
import javascript from "../images/javascript.svg";



const Carousel = () => {
  const images = [
    html, css, sass, javascript
    // Weitere Bilder hier hinzufügen
  ];
  const headings = [
    "HTML", "CSS", "SASS", "JavaScript"
    // Weitere Überschriften hier hinzufügen
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button">
        &#10094;
      </button>
      <div className="carousel-slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-slide active" key={index}>
            <div className="logo-container">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
            <h2>{headings[index]}</h2>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
