import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import RecyclContext from '../RecyclContext';
import './SelectScreen.css';

// this component is what the user sees upon logging in, it provides the recycling categories

class SelectScreen extends Component {

    state = {
        recyclables: [],
        partsReady: false
    }

    static contextType = RecyclContext;

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/recyclables`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(recs => {
                this.setState({
                    recyclables: recs,
                    partsReady: true
                })
            })
            .catch(error => alert('Recyclable materials not found. Please try again.'))
    }


    renderSelections = () => {
        if (this.state.partsReady === true) {
            const recyclables = this.state.recyclables
            return (
                <ul className='select__container'>
                    {recyclables.map(rec => {
                        return <li key={rec.id} className='select__item'><Link to={`/select/${rec.title}`}>{rec.title}</Link></li>
                    })}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className='selectscreen'>
                <div>
                    <h3>hello {this.context.user.username}</h3>
                    <p>Help us keep rivers clean</p>
                    <hr />
                    <h4>What do you want to recycle?</h4>
                    {this.renderSelections()}
                </div>
            </div>
        )
    }
}


export default SelectScreen;