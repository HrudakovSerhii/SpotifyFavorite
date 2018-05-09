import { combineReducers } from "redux";
import tokenReducer from './TokenReducer';
import loginReducer from './LoginReducer';

export default combineReducers({
	tokenReducer,
	loginReducer
});
