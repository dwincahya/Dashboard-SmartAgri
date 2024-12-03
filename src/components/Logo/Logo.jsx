import React from 'react';
import logo from '../../images/icon.png';
import './logo.css';

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href='/' className="logo d-flex align-items-center">
        <img src={logo} alt=""/>
        <span className="d-none d-lg-block">Smart Agri</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSidebar}></i>
    </div>
  );
}

export default Logo;