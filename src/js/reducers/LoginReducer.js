export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_LOGIN_STATUS":
			return {
				...state,
				status: action.loginStatus
			};

		default:
			return state;
	}
};

export default loginReducer;
