import React, { Component } from 'react';

class Main extends Component {
	constructor(props) {
		super(props);
		
		this.loginDone = this.loginDone.bind(this);
		this.onloginHandler = this.onloginHandler.bind(this);
	}
	render() {
		return (
			<div className="main-container">
				Hi, I am a main container
			</div>
		)
	}
}

export default Main;
