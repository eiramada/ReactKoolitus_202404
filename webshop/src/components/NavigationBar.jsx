import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="nav-item">
          <Link to="">
            <button>Homepage </button>
          </Link>
        </div>
        <div className="nav-item">
        <Link to="/cart">
          <button>Cart </button>
        </Link>
      </div>
      <div className="nav-item">Admin:</div>
      <div className="nav-item">
        <Link to="/admin/maintain-products">
          <button>Maintain Products </button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
