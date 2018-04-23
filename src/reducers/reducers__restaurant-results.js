import { FETCH_RESTAURANTS } from '../actions/types';

const INITIAL_STATE = [
    {
        name: 'Jomar\'s Panciteria',
        description: '',
        pricing: '',
        hours: '7:00am-7:00pm, daily',
        neighborhood: 'Centro 7',
        address: 'Gomez Street',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '17.613633',
        longitude: '121.730554'
    },
    {
        name: 'Triangle Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: '',
        address: 'Arao Street',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'Jren’s Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: '',
        address: 'Diversion Road',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'Lamud Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: '',
        address: 'Gunnacao St',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'Ecl Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: 'Carig',
        address: 'Pan-Philippine Highway',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'Natan’s Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: '',
        address: 'Badaje St',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'Liza’s Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: 'Annafunan West',
        address: '',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'Eva’s Pansiteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: '',
        address: 'Aquino Street',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    },
    {
        name: 'BLJ Panciteria',
        description: '',
        pricing: '',
        hours: '',
        neighborhood: 'Annafunan East',
        address: '',
        city: 'Tuguegarao City',
        region: 'Cagayan Valley',
        country: 'Philippines',
        latitude: '',
        longitude: ''
    }
];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return action.data;
        default:
            return state;
    }
};
