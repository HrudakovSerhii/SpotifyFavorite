import Login from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setToken } from './../../actions/tokenActions';

const mapStateToProps = (state) => {
	return {
		token: state.tokenReducer.token,
		loginStatus: state.loginReducer.status
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		setToken
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
