import React from 'react';

import Location from './location';

const Input = ({ output, inputChange }) => {
    const locations = output.map((location, index) => (
        <Location location={location} key={index} />
    ));

    return (
        <div className='input-wrapper'>
            <input
                type='text'
                className='input'
                id='location-input'
                placeholder='Enter Location to Search Nearby Panciterias'
                onChange={inputChange}
                ref={location => { this.location = location; }}
                required
            />

            <ul className='output'>{locations}</ul>
        </div>
    );
};

export default Input;
