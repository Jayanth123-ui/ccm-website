// src/components/NavBar.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  // Close dropdowns when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown on click
  const handleDropdownClick = (e, name) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Open dropdown on hover (desktop)
  const handleDropdownMouseEnter = (name) => {
    if (window.innerWidth > 1024) setOpenDropdown(name);
  };
  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 1024) setOpenDropdown(null);
  };

  const toggleMenu = () => {
    // Implement menu toggle functionality here
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__logo">
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo" />
        </Link>
      </div>

      <button className="navbar__hamburger" aria-label="Open menu" onClick={toggleMenu}>
        &#9776;
      </button>

      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        <li
          className={`dropdown${openDropdown === 'who' ? ' open' : ''}`}
          onClick={e => handleDropdownClick(e, 'who')}
          onMouseEnter={() => handleDropdownMouseEnter('who')}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button type="button" className="dropdown__toggle" aria-expanded={openDropdown === 'who'}>
            Who We Help ▾
          </button>
          <ul className="dropdown__menu">
            <li><Link to="/who-we-help/private-practices">Private Practices</Link></li>
            <li><Link to="/who-we-help/hospitals">Hospitals</Link></li>
          </ul>
        </li>

        <li
          className={`dropdown${openDropdown === 'services' ? ' open' : ''}`}
          onClick={e => handleDropdownClick(e, 'services')}
          onMouseEnter={() => handleDropdownMouseEnter('services')}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button type="button" className="dropdown__toggle" aria-expanded={openDropdown === 'services'}>
            Our Services ▾
          </button>
          <ul className="dropdown__menu">
            <li><Link to="/services/remote-patient-monitoring">Remote Patient Monitoring</Link></li>
            <li><Link to="/services/chronic-care-management">Chronic Care Management</Link></li>
          </ul>
        </li>
      </ul>

      <div className="navbar__cta">
        <Link to="/contact" className="btn btn--demo">Schedule Demo</Link>
      </div>
    </nav>
  );
}

export default NavBar;

