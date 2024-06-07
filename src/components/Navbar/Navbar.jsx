import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <h1>GO FOOD</h1>
            </div>
            <div className={`navbar-left ${menuOpen ? 'open' : ''}`}>
                <a href="#">Home</a>
                <a href="#">Groceries</a>
                <a href="#">Pages</a>
            </div>
            <a href="#" className="connect">Connect With Us</a>
            <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
                <div className="icons">
                    <a href="#"><i className="fas fa-search"></i></a>
                    <a href="#"><i className="fas fa-user"></i></a>
                    <a href="#"><i className="fas fa-heart"></i></a>
                    <a href="#"><i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
