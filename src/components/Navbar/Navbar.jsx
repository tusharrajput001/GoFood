import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
                        <div className="navbar-center">
                <h1>GO FOOD</h1>
            </div>
            <div className="navbar-left">
                <a href="#">Home</a>
                <a href="#">Groceries</a>
                <a href="#">Pages</a>
            </div>
            <a href="#">Connect With Us</a>
            <div className="navbar-right">
                
                <div className="icons">
                    <a href="#"><i className="fas fa-search"></i></a>
                    <a href="#"><i className="fas fa-user"></i></a>
                    <a href="#"><i className="fas fa-heart"></i></a>
                    <a href="#"><i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
