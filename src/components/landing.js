/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Input from './input';

class Landing extends Component {
	constructor() {
		super();
		this.submitLocation = this.submitLocation.bind(this);
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

		return (
			<div>
				<div className='input-div'><Input
					addInput={this.onInputChange}
					output={suggestions}
				/><button
					className='button'
					type='button'
					id='submit-location'
					onClick={this.submitLocation}
				><p className='fa fa-search fa-2x' /></button></div>

				<a className='current-location'>
					<p className='current-location'>
						Search for Panciterias Nearby Your Current Location.
					</p>
				</a>
			</div>
		);
	}
}

export default connect(({ suggestions, cities }) => {
	return { suggestions, cities };
}, actions)(Landing);
