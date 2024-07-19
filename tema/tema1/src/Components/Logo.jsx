import React from "react";

export default function Logo() {
  return (
    <div className="header-left">
      <button className="mobile-menu-toggler">
        <span className="sr-only">Toggle mobile menu</span>
        <i className="icon-bars"></i>
      </button>
      <a href="index.html" className="logo">
        <img
          src="assets/images/demos/demo-4/logo.png"
          alt="Molla Logo"
          width="105"
          height="25"
        />
      </a>
    </div>
  );
}
