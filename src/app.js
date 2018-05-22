import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
    Route,
    Router,
    IndexRoute,
    browserHistory,
    Link
} from 'react-router';
import store from './store';
import Landing from './components/landing';
import RestaurantResults from './components/restaurant-results';
import RestaurantDetails from './components/restaurant-details';

const App = (props) => {
    let children = props.children;
    let classes = 'results-logo';

    if (props.children === null) {
        children = <Landing />;
        classes = 'logo';
    }

    return (
        <div className='background'>
            <Link to={'/'}>
                <img
                    src='panceateria-logo.png'
                    alt='PancEATeria | Pancit Store Locator'
                    className={classes}
                />
            </Link>

            {children}
        </div>
    );
};

const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/restaurants'>
                <IndexRoute component={RestaurantResults} />
                <Route path='/restaurants/:id'>
                    <IndexRoute component={RestaurantDetails} />
                </Route>
            </Route>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			{routes}
		</Provider>, document.getElementById('app')
	);
});
