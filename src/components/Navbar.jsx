import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-0 h1">
          LAB - WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
