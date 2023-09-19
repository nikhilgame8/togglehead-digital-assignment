import React from "react";
import { ArrowDownIcon, ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li>Qualifications <ChevronDownIcon className="sm-icon" /></li>
          <li>Organizations <ChevronDownIcon className="sm-icon" /></li>
          <li>Research & Analysis <ChevronDownIcon className="sm-icon" /></li>
          <li>Lorem ipsum <ChevronDownIcon className="sm-icon" /></li>
          <li>Lorem ipsum <ChevronDownIcon className="sm-icon" /></li>
          <li>Lorem ipsum <ChevronDownIcon className="sm-icon" /></li>
          <li>
            <MagnifyingGlassIcon className="md-icon" />
          </li>
          <li className="white-btn">Enrolment</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
