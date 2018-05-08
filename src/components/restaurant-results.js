/* eslint max-len: 0 */
/* eslint no-undef: 0 */
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
				name,
				neighborhood,
				address,
				city,
				region,
				country,
				distance,
				duration
			} = result;

			const formattedName = name.toLowerCase()
				.split('’')
				.join('')
				.split(' ')
				.join('-');

			const availableImages = [
				'cherrys-pansiteria',
				'fefang-pancitera',
				'gretchens-noodle-haus',
				'jomars-panciteria',
				'nangs-panciteria',
				'triple-j-panciteria'
			];

			let imageSrc = 'generic-thumbnail';

			availableImages.forEach(imageName => {
				if (formattedName === imageName) {
					imageSrc = formattedName;
				}
			});

			return (
				<div className='modal result-item' key={`result_${index}`}>
					<img
						src={`${imageSrc}.jpg`}
						alt={`${name}`}
						className='result-image result-col'
					/>

					<div className='result-col'>
						<h2><Link to={`/restaurants/${index}`}>{name}</Link></h2>
						<p className='result-spec neighborhood'>{neighborhood}</p>
						<p className='result-spec'>{address}</p>
						<p className='result-spec'>{city}, {region}, {country}</p>
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
