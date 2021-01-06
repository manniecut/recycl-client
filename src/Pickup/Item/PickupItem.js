import React, { Component } from 'react';
import './PickupItem.css'

// this is an individual Scheduled Pickup Item to be displayed on the scheduled pickups list page

class PickupItem extends Component {

    render() {
        return (
            <li className='pickup__item'>
                <h1>Pickup Item: {this.props.details}</h1>
                <p>Pickup Date: {this.props.date}</p>
                <button type='button' onClick={e => this.props.delete(this.props.id)}>Cancel Pickup</button>
            </li>
        )
    }
}


export default PickupItem;