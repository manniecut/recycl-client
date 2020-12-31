import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RecyclHeader.css';

// this is the header component

class RecyclHeader extends Component {

    render() {
        return (
            <header className="App__header">
                <h1>
                    <Link className='nav__link' to='/home'>recycl.</Link>
                </h1>
            </header>
        )
    }
}


export default RecyclHeader;