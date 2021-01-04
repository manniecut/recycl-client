import React, { Component } from 'react';
import PickupItem from './Item/PickupItem';
import './Pickups.css';

// this is the component for the Scheduled Pickups page

class Pickups extends Component {

    render() {
        return (
            <div className='pickups__page'>
                <h1>Pickups</h1>
                <p>Your Location: 123 Any Street, Detroit, MI</p>
                <PickupItem />
                <PickupItem />
                <PickupItem />
            </div>
        )
    }
}


export default Pickups;