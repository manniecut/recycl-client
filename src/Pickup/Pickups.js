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
        this.fetchPickups()
    }


    // this function is seperate from componentDidMount() so that it can be also called by the delete function to trigger a refresh
    fetchPickups() {
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

    handleDelete = id => {
        fetch(`${config.API_ENDPOINT}/pickups/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok)
                    return res
                        .then(e => Promise.reject(e))
                return res
            })
            .then(res => {
                this.fetchPickups()
            })

            .catch(error => { console.log('error') })
    }

    // this creates a new list item component for each scheduled pickup 

    renderItems = () => {
        const pickups = this.state.pickups
        return (
            <ul>
                {pickups.map(pickup => {
                    return (
                        <PickupItem
                            key={pickup.id}
                            id={pickup.id}
                            details={pickup.details}
                            location={pickup.pickuplocation}
                            date={pickup.pickupdate}
                            delete={this.handleDelete}
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
                <p className='pickup_location_label'>Your Location:</p>
                <p className='pickup_location'>{this.context.user.pickuplocation}</p>
                {this.renderItems()}
            </div>
        )
    }
}


export default Pickups;