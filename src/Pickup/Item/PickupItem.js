import React, { Component } from 'react';
//import GutHubContext from '../GutHubContext';
import './PickupItem.css'

// this component is what the user sees upon logging in, it provides a quick description of GutHub and allows logging out

class PickupItem extends Component {

    // props will designate the category of recycling and populate subcategories

    render() {
        return (
            <div className='pickup__item'>
                <h1>Pickup Item: Lithium Batteries</h1>
                <p>Pickup Date: 01/31/21 2:30PM</p>
                <p>QTY: 2pcs</p>
            </div>
        )
    }
}


export default PickupItem;