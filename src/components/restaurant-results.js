/* eslint max-len: 0 */
/* eslint no-undef: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import * as actions from '../actions';

class RestaurantResults extends Component {
	render() {
		const { results, location } = this.props;

		const resultsMessage = `Showing results nearby ${location}`;

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

			const urls = {
				'billy-jacks-panciteria': 'http://i.imgur.com/rHp1pri.jpg',
				'cherrys-panciteria': 'http://i.imgur.com/7hRX0pZ.jpg',
				'corazons-panciteria': 'http://i.imgur.com/5Jn810z.jpg',
				'dings-panciteria': 'http://i.imgur.com/JWtE4vz.jpg',
				'evas-panciteria': 'http://i.imgur.com/r6Mryu4.jpg',
				'fefangs-panciteria': 'http://i.imgur.com/OpdAynj.jpg',
				'macoys-panciteria': 'http://i.imgur.com/aOAeSxq.jpg',
				'panciteria-ni-nang': 'http://i.imgur.com/XIGp6DZ.jpg',
				'pancitan-ni-santino': 'http://i.imgur.com/N5t024Y.jpg',
				'triangle-panciteria': 'http://i.imgur.com/EKNn4BM.jpg',
			};

			const imageSrc = urls[formattedName];

			return (
				<div className='modal result-item' key={`result_${index}`}>
					<img
						src={`${imageSrc}`}
						alt={`${name}`}
						className='result-image result-col'
					/>

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
				<h2 className='white'>{resultsMessage}</h2>

				{renderedResults}
            </div>
		);
	}
}

export default connect(({ results, app }) => {
	const { location } = app;

    return { results, location };
}, actions)(RestaurantResults);
