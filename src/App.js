import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchData } from './js/servises/redux/actions';

// import './styles/App.css';
// import './styles/common.css';

import Routes from 'Routes';
import Header from './js/containers/Header';
import Footer from './js/containers/Footer';

function mapStateToProps (state) {
	return {
		appData: state.appData
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	}
}

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Routes />
				<Footer />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
