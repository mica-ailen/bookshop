import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <h1 className="logo">Mic's Bookshop</h1>
            <ul className="navbar-links">
        <li>
            <a href="home" className="link">Home</a>
        </li>
        <li>
           <a href="#catalog" className="link">Books</a>
        </li>
        <li>
            <a href="#booklist" className="link">Book List</a>
          </li>
      </ul>
        </div>
    )
}

export default Navbar;