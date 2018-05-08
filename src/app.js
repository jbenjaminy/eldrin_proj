import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
    Route,
    Router,
    IndexRoute,
    browserHistory
} from 'react-router';
import store from './store';
import Landing from './components/landing';
import RestaurantResults from './components/restaurant-results';
import RestaurantDetails from './components/restaurant-details';

const App = (props) => {
    let children = props.children;

    if (props.children === null) {
        children = <Landing />;
    }

    return (
        <div className='background'>
            //<h1>PancEATeria</h1>
            <img src="https://i.imgur.com/XXjcCnu.png" />

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
