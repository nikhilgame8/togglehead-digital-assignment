import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Subscibe = () => {
  return (
    <div className="subscribe-container container">
      <div className="subscribe-content">
        <h3>Subscribe</h3>
        <p>
          Aliquip do est irure sit aliquip eiusmod deserunt dolor et irure qui
          ea. Aliquip do est irure sit aliquip eiusmod deserunt dolor et irure
          qui ea.
        </p>
        <div className="subscribe-form">
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="subscribe-input"
          />
          <button className="theme-btn">Subscribe Now <ChevronRightIcon className="sm-icon" /> </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Subscibe;
