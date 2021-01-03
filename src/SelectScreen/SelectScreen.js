import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import GutHubContext from '../GutHubContext';
import './SelectScreen.css'

// this component is what the user sees upon logging in, it provides a quick description of GutHub and allows logging out

class SelectScreen extends Component {

    //static contextType = GutHubContext;

    render() {
        return (
            <div className='selectscreen'>
                <div>
                    <h3>hello Sarah!</h3>
                    <p>Help us keep rivers clean</p>
                    <hr />
                    <h4>What do you want to recycle?</h4>
                    <ul className='select__container'>
                        <li className='select__item'><Link to='/select/Batteries'>Batteries</Link></li>
                        <li className='select__item'><Link to='/select/Metal'>Metal</Link></li>
                        <li className='select__item'><Link to='/select/Cosmetics'>Cosmetics</Link></li>
                        <li className='select__item'><Link to='/select/Electronics'>Electronics</Link></li>
                        <li className='select__item'><Link to='/select/Plastic'>Plastic</Link></li>
                        <li className='select__item'><Link to='/select/Paper'>Paper</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default SelectScreen;