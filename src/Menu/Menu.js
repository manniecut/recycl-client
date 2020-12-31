import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './RecyclHeader.css';

// this is the header component

class Menu extends Component {

    render() {
        return (
            <>
                <h1>Menu</h1>
                <Link to='/login'>Log Out</Link>
            </>
        )
    }
}


export default Menu;