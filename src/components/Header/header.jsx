import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Nav from '../Nav/Nav';

function header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        {/* {logo} */}
        <Logo />
        {/* {search bar} */}
        <SearchBar />
        {/* {nav} */}
        <Nav />
    </header>
  );
}

export default header;