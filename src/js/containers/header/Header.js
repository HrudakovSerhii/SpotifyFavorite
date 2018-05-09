import React, { Component } from 'react';

class Header extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="header-container">
				{this.props.children}
				Here is Header
			</div>
		)
	}
}

export default Header;
