// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <section className="footer bg-light">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">Contact Me</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="github" href="https://github.com/DaChe01" target="_blank" rel="noreferrer">
                <i className="bi bi-github" style={{ fontSize: '1.2rem' }}></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="gmail" href="mailto:adkhangembam@gmail.com">
                <i className="bi bi-envelope-at-fill" style={{ fontSize: '1.2rem' }}></i>
              </a>
            </li>
            <li className="ms-3">
            <a
            className="linkedin" href="https://www.linkedin.com/in/adkhangembam?original_referer="
            target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: '1.2rem' }}></i>
            </a>
          </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
