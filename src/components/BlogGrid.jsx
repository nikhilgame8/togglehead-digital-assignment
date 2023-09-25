import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const BlogGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 6 - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 6 - 1 : prevSlide - 1));
  };

  return (
    <div className="blog-container hide-scroll-bar container">
      <div
        className="grid-container"
        style={{ transform: `translateX(-${currentSlide * 400}px)` }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div key={index} className="blog-card">
            <h3>Lorem Ipsum</h3>
            <p>
              Consectetur nulla sint officia est aliquip aute exercitation.
              Labore labore eiusmod duis esse nulla qui incididunt dolor.
            </p>
            <a href="#">
              <div>Know More</div>
              <ArrowRightCircleIcon className="md-icon" />
            </a>
          </div>
        ))}
      </div>
      <div className="grid-carousel-buttons">
        <button className="prev-slide-button">
          <ChevronLeftIcon onClick={prevSlide} className="lg-icon" />
        </button>
        <button className="next-slide-button">
          <ChevronRightIcon onClick={nextSlide} className="lg-icon" />
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;
