/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import * as actions from '../actions';

class RestaurantResults extends Component {
	render() {
		const { results } = this.props;
		const renderedResults = results.map((result, index) => {
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
			} = result;

			return (
				<div className='modal result-item' key={`result_${index}`}>
					{/* <img src={`${id}.jpg`} alt={`${name}`} className='result-image result-col' /> */}
					<img src='1.jpg' alt={`${name}`} className='result-image result-col' />

					<div className='result-col'>
						<h2><Link to={`/restaurants/${index}`}>{name}</Link></h2>

						<p className='result-spec neighborhood'>{neighborhood}</p>

						<ul className='output'>
							<li className='item'><p className='result-spec'>{address}</p></li>
							<li className='item'><p className='result-spec'>{city}, {region}, {country}</p></li>
						</ul>
					</div>

					<div className='result-col distance-col'>
						<h1 className='distance'>{distance}</h1>
						<p className='result-spec neighborhood duration'>{duration} driving</p>
					</div>
				</div>
			);
		});
		return (
            <div className='results-container'>
				{renderedResults}
            </div>
		);
	}
}

export default connect(({ results }) => {
    return { results };
}, actions)(RestaurantResults);
