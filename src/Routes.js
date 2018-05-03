import React from 'react';
import { Route } from 'react-router';

import Home from 'js/containers/Home';
import About from 'js/containers/About';
import Setting from 'js/containers/Setting';

class Routes extends Component {
	render() {
		return (
			<div>
				<Route path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/settings' component={Setting} />
			</div>
		)
	}
}

export default Routes;
