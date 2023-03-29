import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded  ">
      <a className="navbar-brand">Pizza</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item active">
            <a className="nav-link">Logout </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
