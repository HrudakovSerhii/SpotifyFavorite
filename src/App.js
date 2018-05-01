import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchData } from './js/services/redux/actions';

// import './styles/App.css';
// import './styles/common.css';

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
			
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
