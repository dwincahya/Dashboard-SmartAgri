import React from 'react';
import profileImg from '../../images/abang.jpg';

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
        <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
            <img src={profileImg} alt='profile' className='rounded-circle'/>
            <span className="d-none d-md-block dropdown-toggle ps-2">A. Sija</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>Abang Sija</h6>
                <span>Web Dev</span>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a href="users-profile.html" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-person"></i>
                    <span>Profil Saya</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a href="users-profile.html" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-gear"></i>
                    <span>Pengaturan Akun</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a href="pages-faq.html" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-question-circle"></i>
                    <span>Bantuan?</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a href="#" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Keluar</span>
                </a>
            </li>
        </ul>
    </li>
  );
}

export default NavAvatar;  