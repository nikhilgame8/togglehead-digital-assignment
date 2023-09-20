import React, { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    // <div className="homeCarousel container">
    //   <div className="carousel-content">
    //     <h1 className="text-theme-blue">Ea id quis nostrud qui</h1>
    //     <p className="text-light-gray">
    //       Quis occaecat ea est et amet consectetur pariatur aliquip magna ex.
    //       Minim labore dolor irure magna enim dolore deserunt cillum. Tempor
    //       ullamco sint fugiat enim adipisicing.
    //     </p>
    //     <button className="theme-btn">Know More </button>
    //   </div>
    // </div>
    <div className="carousel container">
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{transform: `translateX(-${currentSlide * 100}%)`}}
          >
            <div className="carousel-content">
              <h1 className="text-theme-blue">
                Ea id quis nostrud qui {index}
              </h1>{" "}
              <p className="text-light-gray">
                Quis occaecat ea est et amet consectetur pariatur aliquip magna
                ex. Minim labore dolor irure magna enim dolore deserunt cillum.
                Tempor ullamco sint fugiat enim adipisicing.{" "}
              </p>
              <button className="theme-btn">Know More </button>{" "}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button onClick={prevSlide} className="prev"><ChevronLeftIcon className="lg-icon" /></button>
        <button onClick={nextSlide} className="next"><ChevronRightIcon className="lg-icon" /></button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
