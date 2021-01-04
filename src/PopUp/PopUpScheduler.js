import React, { Component } from 'react';
import './PopUpScheduler.css';

class PopUpScheduler extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <label for="pickupdate">Schedule Pickup:</label>
                    <input type="date" id="pickupdate" name="pickupdate" />
                    <p>At your location: 123 AnyStreet, Detroit, MI</p>
                    <button>Confirm</button>
                    <button onClick={this.props.closePopup}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default PopUpScheduler;