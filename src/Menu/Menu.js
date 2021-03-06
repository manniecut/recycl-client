import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecyclContext from '../RecyclContext';
import './Menu.css';

// this Menu component keeps some secondary functions out of the way

class Menu extends Component {

    
    static contextType = RecyclContext

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
                        <Link to='/' onClick={this.context.logout}>Log Out</Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Menu;