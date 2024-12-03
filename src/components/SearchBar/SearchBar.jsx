import React from 'react';
import './searchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
        <form action="#" className="search-form d-flex align-items-center" method='POST'>
            <input 
            type="text"
            name="query"
            placeholder='Cari'
            title='Masukkan kata kunci'
            />
            <button type='submit' title='Cari'>
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>
  );
}

export default SearchBar;