import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const BlogGrid = () => {
  return (
    <div className="blog-container hide-scroll-bar">
      <div className="grid-container">
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
    </div>
  );
};

export default BlogGrid;
