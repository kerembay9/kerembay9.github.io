// MobileNavbar.js

import React from 'react';
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

  return (
    <nav className="mobile-navbar">
      <div className="dropdown">
        <button className="dropbtn">≡</button>
        <div className="dropdown-content">
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
