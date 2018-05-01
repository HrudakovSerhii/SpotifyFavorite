import { createStore } from 'redux'

import appReducer from './redux/reducers';

export default function configureStore() {
	return createStore(appReducer);
};
