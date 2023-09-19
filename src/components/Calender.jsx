import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import React from "react";

const Calender = () => {
  return (
    <div className="calender-container">
      <div>
        <h3 className="text-theme-blue">Upcoming Examinations</h3>
        <p className="text-light-gray">Veniam aliquip commodo consectetur et culpa.</p>
      </div>
      <div className="calender-items">
        <ul>
          <li>
            <CalendarDaysIcon className="lg-icon text-theme-blue" />
            <div>
              <p>02th October 2014</p>
              <span>Level 1 exam</span>
            </div>
          </li>
          <li>
            <CalendarDaysIcon className="lg-icon text-theme-blue" />
            <div>
              <p>Nov-Dec 2016</p>
              <div>Level 2</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
            </div>
          </li>
          <li>
            <CalendarDaysIcon className="lg-icon text-theme-blue" />
            <div>
              <p>Ongoing this year</p>
              <span>Level 3 (Grad)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calender;
