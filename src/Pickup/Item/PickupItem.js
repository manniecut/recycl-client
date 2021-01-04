import React, { Component } from 'react';
import './PickupItem.css'

// this is an individual Scheduled Pickup Item to be displayed on the scheduled pickups list page

class PickupItem extends Component {

    render() {
        return (
            <div className='pickup__item'>
                <h1>Pickup Item: Lithium Batteries</h1>
                <p>Pickup Date: 01/31/21 2:30PM</p>
                <p>QTY: 2pcs</p>
                <button>Cancel Pickup</button>
            </div>
        )
    }
}


export default PickupItem;