/* eslint arrow-body-style:0 */
/* eslint max-len:0 */
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
        
        const urls = {
            'fefang-pancitera': 'https://www.google.com/maps/place/25+Lecaros+St,+Tuguegarao,+Cagayan,+Philippines/@17.6091626,121.7241511,17z/data=!3m1!4b1!4m5!3m4!1s0x3385842f40c919f9:0x5e48fb2aa3b4aa!8m2!3d17.6091626!4d121.7263451',
        };

        let imageSrc = 'generic-thumbnail';

        availableImages.forEach(imageName => {
            if (formattedName === imageName) {
                imageSrc = formattedName;
            }
        });

        const mapUrl = urls[imageSrc];

        return (
            <div className='results-container'>
                <div className='modal result-item details'>
                    <div className='buffer' />
                    <h2 className='no-hover-effect'>{name}</h2>

                    <a href={mapUrl}><img
                        src={`${imageSrc}-map.jpg`}
                        alt={`${name}`}
                        className='result-image result-col'
                    /></a>
					<div className='result-col'>
                        <h3 className='subheader'>Menu</h3>
                        <ul>
                            <li className='menu-item'>"Regular"<span className='menu-item-price'> - 60 PHP</span></li>
                            <li className='menu-item'>"Special"<span className='menu-item-price'> - 70 PHP</span></li>
                            <li className='menu-item'>"Super Special"<span className='menu-item-price'> - 80 PHP</span></li>
                        </ul>
					</div>

					<div className='result-col distance-col'>
                        <h3 className='subheader margin'>Location</h3>
                        <ul className='output'>
                            <li className='item'><p className='result-spec'>{address}</p></li>
                            <li className='item'><p className='result-spec'>{city}, {region}, {country}</p></li>
                        </ul>
                        <ul className='output'>
                            <li className='item'><p className='result-spec neighborhood duration'>{neighborhood}</p></li>
                            <li className='item'><p className='result-spec neighborhood duration'>{distance}</p></li>
                            <li className='item'><p className='result-spec neighborhood duration'>{duration} driving</p></li>
                        </ul>
					</div>
				</div>
            </div>
		);
	}
}

export default connect(({ results }) => {
    return { results };
}, actions)(RestaurantDetails);
