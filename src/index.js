import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './js/servises/ConfigureStore';
import registerServiceWorker from './js/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter history={browserHistory}>
			<App/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
