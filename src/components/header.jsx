// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className="header">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className="nav-link">Education</Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">Works</Link>
            </li>
          </ul>
        </header>
      </div>
    </section>
  );
}

export default Header;
