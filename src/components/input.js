import React from 'react';

import Location from './location';

const Input = ({ output, inputChange }) => {
    const locations = output.map((location, index) => (
        <Location location={location} key={index} />
    ));

    return (
        <div>
            <input
                type='text'
                className='input'
                id='location-input'
                placeholder='Enter Location to Search Nearby Panciterias'
                onChange={inputChange}
                required
            />

            <ul className='output'>{locations}</ul>
        </div>
    );
};

export default Input;
