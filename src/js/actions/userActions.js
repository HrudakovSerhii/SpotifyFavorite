export const loginUser = (token) => {
	return {
		token,
		type: 'SET_TOKEN'
	}
};

export const logoutUser = (token) => {
	return dispatch => {
		const request = new Request(`https://api.spotify.com/v1/browse/new-releases`, {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});
		fetch(request).then(res => {
			return res.json();
		}).then(res => {
			dispatch(fetchNewReleasesSuccess(res.albums));
		}).catch(err => {
			dispatch(fetchNewReleasesError(err));
		});
	}
};

