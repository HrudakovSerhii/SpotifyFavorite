import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from './actions/tokenActions';

import Header from './containers/header/Header';
import Login from './containers/login/Login';
import Main from './containers/main/Main';

import RequestService from './servises/RequestService';

import '../css/App.css';

class App extends Component {
	componentWillMount() {
		let token = RequestService.checkLoginStatus();

		if(token && token.length) {
			setToken(token);
		}
	}

	applicationRender() {
		if(this.props.token) {
			return (
				<Main/>
			)
		} else {
			return (
				<Login/>
			)
		}
	}

	render() {
		return (
			<div className="App">
				<Header/>
				{ this.applicationRender() }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.tokenReducer.token
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setToken
	},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
