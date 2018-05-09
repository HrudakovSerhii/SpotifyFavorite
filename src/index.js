import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './js/App';
import reducers from './js/reducers';

import './css/index.css';

const store = createStore(
	reducers
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
