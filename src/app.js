import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import Landing from './components/landing';
import RestaurantResults from './components/restaurant-results';
import RestaurantDetails from './components/restaurant-details';

const App = (props) => {
    return (
        <div>
            <nav>
                <H1></H1>
            </nav>
            <hr/>
            <div>
                {props.children}
            </div>
        </div>
    );
};

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="home">
                <IndexRoute component={Landing} />

                <Route path="/restaurants">
                    <IndexRoute component={RestaurantResults} />

                    <Route path=":name">
                        <IndexRoute component={RestaurantDetails} />
                    </Route>
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
