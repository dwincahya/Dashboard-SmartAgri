import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({nav}) {
  return (
    <li className="nav-item">
        <Link to={`/${nav.name.toLowerCase().replace(/\s+/g, '')}`} className="nav-link collapsed">
            <i className={nav.icon}></i>
            <span>{nav.name}</span>
        </Link>
    </li>
  );
}

export default NavItem;