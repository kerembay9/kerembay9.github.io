// MobileNavbar.js

import { is } from '@babel/types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileNavbar() {
  const mobileNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/cpp', label: 'C++' },
    { to: '/machine-learning', label: 'Machine Learning' },
    { to: '/blockchain', label: 'Blockchain' },
    { to: '/web-development', label: 'Web Development' },
  ];

  // State to manage the visibility of the dropdown content
  const [isDropdownOpen, setDropdownOpen] = useState('none');

  // Function to toggle the dropdown content
  const toggleDropdown = () => {
    if (isDropdownOpen === 'none'){
    setDropdownOpen('block')}
    else {
      setDropdownOpen('none')
    }
  };

  // Function to close the dropdown content
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="mobile-navbar">
      <div className="dropdown" onClick={toggleDropdown} >
        <button className="dropbtn">≡</button>
        <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`} onClick={closeDropdown} style={{display:`${isDropdownOpen}`}}>
          <ul>
            {mobileNavLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
