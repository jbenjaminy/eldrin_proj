/* eslint arrow-body-style:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RestaurantDetails extends Component {
    render() {
        const { results } = this.props;
        const id = this.props.params.id;

        const restaurant = results[id];

        const {
            // id,
            name,
            // hours,
            // phone,
            // website,
            neighborhood,
            address,
            city,
            region,
            country,
            // latitude,
            // longitude,
            distance,
            duration
        } = restaurant;

        return (
            <div className='results-container'>
                <div className='modal result-item'>
					{/* <img src={`${id}.jpg`} alt={`${name}`} className='result-image result-col' /> */}
					<img src='1.jpg' alt={`${name}`} className='result-image result-col' />

					<div className='result-col'>
						<h2>{name}</h2>
						<p className='result-spec neighborhood'>{neighborhood}</p>
						<p className='result-spec'>{address}</p>
						<p className='result-spec'>{city}, {region}, {country}</p>
					</div>

					<div className='result-col distance-col'>
						<h1 className='distance'>{distance}</h1>
						<p className='result-spec neighborhood duration'>{duration} driving</p>
					</div>
				</div>
            </div>
		);
	}
}

export default connect(({ results }) => {
    return { results };
}, actions)(RestaurantDetails);
