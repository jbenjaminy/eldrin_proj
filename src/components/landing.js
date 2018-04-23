/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
// import Input from './input';
import Location from './location';

class Landing extends Component {
	constructor() {
		super();
		this.submitLocation = this.submitLocation.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		const { cities, matchSuggestions } = this.props;
		const value = event.target.value.toLowerCase();
		let searchSuggestions;

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

	submitLocation(event) {
		event.preventDefault();

		const { fetchRestaurants } = this.props;
		const coordinates = this.location.value;
		console.log('coordinates --> ', coordinates);
		fetchRestaurants({ coordinates });
	}
	// Google Distance Matrix
	// https://developers.google.com/maps/documentation/distance-matrix/intro

	render() {
		const { suggestions } = this.props;
		console.log('suggestions: ', suggestions);

		const locations = suggestions.map((location, index) => {
			if (index < 5) {
				return <Location location={location} key={index} />;
			}

			return null;
		});

		return (
			<div>
				<button className='current-location'>
					Search for Panciterias Nearby Your Current Location.
				</button>

				<div className='input-div'><input
					type='text'
					className='input'
					id='location-input'
					placeholder='Enter Location to Search Nearby Panciterias'
					onChange={this.onInputChange}
					required
				/><button
					className='submit-button'
					type='button'
					id='submit-location'
					onClick={this.submitLocation}
				><p className='fa fa-search fa-2x' /></button></div>
				{ (locations.length) ?
					<div className='modal location-modal'>
						<ul className='location-output'>{locations}</ul>
					</div> : null
				}
			</div>
		);
	}
}

export default connect(({ suggestions, cities }) => {
	return { suggestions, cities };
}, actions)(Landing);
