import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import RecyclContext from '../RecyclContext';
import './SelectScreen.css';

// this component is what the user sees upon logging in, it provides the selectable recycling categories

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

    handleClick = rec => {
        this.props.history.push(`/select/${rec.title}`)
    }

    // the materials are stored in the database for easy manipulation, this function maps them out into a list
    renderSelections = () => {
        if (this.state.partsReady === true) {
            const recyclables = this.state.recyclables
            return (
                <ul className='select__container'>
                    {recyclables.map(rec => {
                        return (
                            <li
                                key={rec.id}
                                className={`select__item select_${rec.title}`}
                                onClick={(e) => this.handleClick(rec)}>
                                <Link to={`/select/${rec.title}`}>
                                    {rec.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className='selectscreen'>
                <hr />
                <div>
                    <h3>hello {this.context.user.username}</h3>
                    <div className='selectscreen__rivers'>
                        <p className='rivers__text'>help us keep rivers clean</p>
                    </div>
                    <h4>What do you want to recycle?</h4>
                    {this.renderSelections()}
                </div>
            </div>
        )
    }
}


export default SelectScreen;