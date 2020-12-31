import React, { Component } from 'react';
//import GutHubContext from '../GutHubContext';
//import './HomeScreen.css'

// this component is what the user sees upon logging in, it provides a quick description of GutHub and allows logging out

class SelectedType extends Component {

    // props will designate the category of recycling and populate subcategories

    render() {
        return (
            <div className='selectedtype'>
                <div>
                    <h3>Batteries</h3>
                    <ul>
                        <li>Lithium Batteries</li>
                        <li>Car Batteries</li>
                        <li>Alkaline Batteries</li>
                        <li>Laptop Batteries</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default SelectedType;