import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// this is the navigation bar component

class Navbar extends Component {

    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <h1><NavLink className='nav__link' to="/home">Home</NavLink></h1>
                    </li>
                    <li>
                        <h1><NavLink className='nav__link' to="/contact">Contact</NavLink></h1>
                    </li>
                    <li>
                        <h1><NavLink className='nav__link' to="/pickup">Pickup</NavLink></h1>
                    </li>
                    <li>
                        <h1><NavLink className='nav__link' to="/menu">Menu</NavLink></h1>
                    </li>
                </ul>
            </footer>
        )
    }
}


export default Navbar;