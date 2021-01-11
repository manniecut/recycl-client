import React, { Component } from 'react';
import './PickupItem.css'

// this is an individual Scheduled Pickup Item to be displayed on the scheduled pickups list page

class PickupItem extends Component {

    render() {
        return (
            <li className='pickup__item'>
                <h1><span className='pickup_title'>{this.props.details}</span> Pickup</h1>
                <p className='pickup_date_label'>Pickup Date:</p>
                <p className='pickup_date'>{this.props.date}</p>
                <button type='button' onClick={e => this.props.delete(this.props.id)}>Cancel Pickup</button>
            </li>
        )
    }
}


export default PickupItem;