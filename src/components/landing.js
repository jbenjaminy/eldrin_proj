/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import * as actions from '../actions';
import Location from './location';
import geolocationApiKey from '../../geolocation-api-key';
import distanceApiKey from '../../distance-matrix-api-key';

class Landing extends Component {
	constructor() {
		super();
		this.onInputChange = this.onInputChange.bind(this);
		this.getCoordinates = this.getCoordinates.bind(this);
		this.submitLocation = this.submitLocation.bind(this);
	}

	onInputChange(event) {
		const { cities, matchSuggestions, updateInput } = this.props;
		const value = event.target.value.toLowerCase();
		let searchSuggestions;

		updateInput(value);

		if (value.length > 0) {
			searchSuggestions = cities.filter(city => {
				const item = city.toLowerCase();
				const locationMatch = new RegExp(value);

				if (item.match(locationMatch)) {
					return true;
				}
					return false;
			});
		} else {
			searchSuggestions = [];
		}

		matchSuggestions(searchSuggestions);
	}

	getCoordinates(event) {
		event.preventDefault();

		const { fetchLocation, updateInput } = this.props;

		fetchLocation(geolocationApiKey);
		updateInput('current location');
	}

	submitLocation(event) {
		event.preventDefault();

		const { fetchRestaurants, coordinates, input } = this.props;

		let origins = input.split(' ').join('+');

		if (coordinates.latitude && coordinates.longitude) {
			// origins = `${coordinates.latitude},${coordinates.longitude}`;
			origins = '17.609984,121.723454';
		}

		console.log('origins, landing.js --> ', origins);

		fetchRestaurants({ origins, distanceApiKey });

		browserHistory.push('/restaurants');
	}

	render() {
		const { suggestions, input } = this.props;

		const locations = suggestions.map((location, index) => {
			if (index < 5) {
				return <Location location={location} key={index} />;
			}

			return null;
		});

		return (
			<div>
				<div className='input-div'><input
					type='text'
					className='input'
					id='location-input'
					placeholder='Enter Location to Search Nearby Panciterias'
					onChange={this.onInputChange}
					value={input}
					required
					ref={'location'}
				/><button
					className='submit-button'
					type='button'
					id='submit-location'
					onClick={this.submitLocation}
				><p className='fa fa-search fa-2x' /></button></div>

				<button className='current-location' onClick={this.getCoordinates}>
					Use your current location
				</button>

				{ (locations.length) ?
					<div className='modal location-modal'>
						<ul className='output'>{locations}</ul>
					</div> : null
				}
			</div>
		);
	}
}

export default connect(({ app, cities, coordinates }) => {
	const { suggestions, input } = app;

	return { suggestions, input, cities, coordinates };
}, actions)(Landing);
