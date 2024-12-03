import React from 'react';
import './sideBar.css';
import '../../data/navItem.js'
import navList from '../../data/navItem.js';
import NavItem from '../Nav/NavItem.jsx';

import { Outlet, Link } from "react-router-dom";

function SideBar() {
  return (
    <aside className="sidebar" id="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
         
            <li className="nav-item">
                <a  
                    href="#"
                    className="nav-link collapsed" 
                    data-bs-target="#components-nav" 
                    data-bs-toggle="collapse"
                 >
                    <i className="bi bi-menu-button-wide"></i>
                    <span>Lahan Saya</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    className="nav-content collapse " 
                    id="components-nav" 
                    data-bs-parent="#sidebar-nav"
                >
                    <li className='submenu'>
                            <Link to="/lahan-baru">
                                <i class="bi bi-plus-lg"></i>
                                <span>Lahan Baru</span>
                            </Link>                        
                    </li>

                    <li className='submenu'>
                            <Link to="/lahan-1">
                                <i class="bi bi-flower2"></i>
                                <span>Lahan 1</span>
                            </Link>
                    </li>
                </ul>
            </li>

            {/* <li>
                <a 
                    href="#" 
                    className="nav-link collapsed" 
                    data-bs-target="#forms-nav" 
                    data-bs-toggle="collapse"
                >
                    <i className="bi bi-journal-text"></i>
                    <span>Managemen Sumber</span>
                </a>

                <ul 
                    className="nav-content collapse" 
                    id="forms-nav" 
                    data-bs-parent="#sidebar-nav"
                >
                    <li>
                        <a href="#">
                            <i className="bi bi-circle"></i>
                            <span>App Form</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="bi bi-circle"></i>
                            <span>Release Form</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="bi bi-circle"></i>
                            <span>Cancellation Form</span>
                        </a>
                    </li>
                </ul>
            </li> */}

            {/* <li className='nav-item'>
                <a 
                    href="#" 
                    className="nav-link collapsed" 
                    data-bs-target="#tables-nav" 
                    data-bs-toggle="collapse"
                >
                    <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Tables</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    className="nav-content collapse" 
                    id="tables-nav" 
                    data-bs-parent="#sidebar-nav"
                >
                    <li>
                        <a href="#">
                            <i className="bi bi-circle"></i>
                            <span>General Tables</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="bi bi-circle"></i>
                            <span>Data Tables</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="bi bi-circle"></i>
                            <span>Cancellation Form</span>
                        </a>
                    </li>
                </ul>
            </li> */}
            {navList.map(nav => (
                <NavItem key={nav._id} nav={nav} />
            ))}
        </ul>
    </aside>
  );
}

export default SideBar;