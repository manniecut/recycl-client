import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

// this is the Menu component

class Menu extends Component {

    render() {
        return (
            <div className='main__menu'>
                <h1>Menu</h1>
                <ul>
                    <li>
                        <Link to="/editaccount">Edit Account</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/login'>Log Out</Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Menu;