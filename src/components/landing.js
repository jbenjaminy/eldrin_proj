/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import Input from './input';
import * as actions from '../actions';

class Landing extends Component {
	render() {
		return (
			<div className='landing'>
				<h1>PancEATeria</h1>
				<Input />
			</div>
		);
	}
}

export default connect((state) => {
    return { state };
}, actions)(Landing);
