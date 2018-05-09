import PropTypes from 'prop-types';
import React from 'react';

const Login = ({
	login,
	logout,
	loginStatus
}) => {
	return(
		<div className="login-component">
			{
				loginStatus === 'login' && (
					<div className="login-btn_container">
						<p>Login to Your Spotify Account</p>
						<button className="btn btn-primary" onClick={login}>Login</button>
					</div>
				)
			}
			{
				loginStatus === 'logout' && (
					<div className="logout-btn_container">
						<p>Change account</p>
						<button className="btn btn-primary" onClick={logout}>Logout</button>
					</div>
				)
			}
		</div>
	)
};

Login.propTypes = {
	login: PropTypes.func,
	logout: PropTypes.func
};

export default Login;

// import RequestService from './../../servises/RequestService';
// import AppSettings from './../../servises/AppSettings';

// class Component extends Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.loginDone = this.loginDone.bind(this);
// 		this.onloginHandler = this.onloginHandler.bind(this);
// 	}
// 	render() {
// 		return (
// 			<div className="login-container">
// 				<button onClick={this.loginHandler}>Login to your Spotify account</button>
// 			</div>
// 		)
// 	}
//
// 	loginHandler() {
// 		RequestService.userLogin(AppSettings.CLIENT_ID, AppSettings.REDIRECT_URI, AppSettings.SCOPES);
// 	}
//
// 	onloginHandler() {
// 		let token = window.location.href.toString().split('code=')[1];
// 		RequestService.appLogin(token, this.loginDone);
// 		console.log(token);
// 	}
//
// 	loginDone(data) {
// 		console.log(data);
// 	}
// }
