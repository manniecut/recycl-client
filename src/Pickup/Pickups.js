import React, { Component } from 'react';
import PickupItem from './Item/PickupItem';
import RecyclContext from '../RecyclContext';
import config from '../config';
import './Pickups.css';

// this is the component for the Scheduled Pickups page

class Pickups extends Component {

    state = {
        pickups: []
    }

    static contextType = RecyclContext;

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/pickups/${this.context.user.id}`)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(pickups => {
                this.setState({
                    pickups: pickups
                })
            })
            .catch(error => { alert('Cant find pickups, please try again') })
    }

    renderItems = () => {
        const pickups = this.state.pickups
        return (
            <ul>
                {pickups.map(pickup => {
                    return (
                        <PickupItem
                            details={pickup.details}
                            location={pickup.pickuplocation}
                            date={pickup.pickupdate}
                        />
                    )
                })}
            </ul>
        )
    }

    render() {
        return (
            <div className='pickups__page'>
                <h1>Pickups</h1>
                <p>Your Location: {this.context.user.pickuplocation}</p>
                {this.renderItems()}
            </div>
        )
    }
}


export default Pickups;