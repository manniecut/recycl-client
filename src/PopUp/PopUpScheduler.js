import React, { Component } from 'react';
import RecyclContext from '../RecyclContext';
import config from '../config';
import './PopUpScheduler.css';

// this popup appears when the user wants to recycle an item on the recycle type page

class PopUpScheduler extends Component {
    state = {
        day: '',
        time: ''
    }

    static contextType = RecyclContext;

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const newPickup = {
            details: this.props.selectedType,
            pickuplocation: this.context.user.pickuplocation,
            pickupdate: (this.state.day + ', ' + this.state.time),
            client: this.context.user.id
        }
        fetch(`${config.API_ENDPOINT}/pickups`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newPickup)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(pickup => {
                alert('Pickup confirmed')
                this.props.closePopup()
            })
            .catch(error => { alert("Can't schedule pickup, please try again.") })
    }


    setDay = day => {
        this.setState({
            day: day
        })

    }

    setTime = time => {
        this.setState({
            time: time
        })
    }

    render() {
        const today = new Date();
        const  tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const minDate = tomorrow.toISOString().substring(0, 10);

        return (
            <div className='popup'>
                <form className='popup_inner' onSubmit={this.handleSubmit}>
                    <label htmlFor="pickupdate">Schedule Pickup:</label><br />
                    <input type="date" id="pickupdate" name="pickupdate" min={minDate}
                        onChange={e => this.setDay(e.target.value)}
                    /><br />
                    <label htmlFor="pickuptime">Select a time:</label><br />
                    <input type="time" id="pickuptime" name="pickuptime" min="08:00" max="18:00"
                        onChange={e => this.setTime(e.target.value)}
                    /><br />
                    <p>At your location:</p>
                    <p>{this.context.user.pickuplocation}</p>
                    <button>Confirm</button>
                    <button onClick={this.props.closePopup}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default PopUpScheduler;