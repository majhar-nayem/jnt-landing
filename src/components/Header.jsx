import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="/img/logo1.png" alt="" />
      </div>
      <div className="links">
        <a href="#" className="link">
          Home
        </a>
        <a href="#" className="link">
          Services
        </a>
        <a href="#" className="link">
          Projects
        </a>
        <a href="#" className="link-btn">
          Contacts
        </a>
      </div>
    </div>
  );
}

export default Header;
