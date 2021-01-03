import React, { Component } from 'react';
import PickupItem from './Item/PickupItem';
//import './RecyclHeader.css';

// this is the header component

class Pickup extends Component {

    render() {
        return (
            <>
                <h1>Pickups</h1>
                <PickupItem />
                <PickupItem />
                <PickupItem />
            </>
        )
    }
}


export default Pickup;