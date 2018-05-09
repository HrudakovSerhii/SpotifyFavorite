export default {
	loginSpotifyAccount: (clientId, redirectUri, scopes) => {
		let link = 'https://accounts.spotify.com/authorize' +
			'?response_type=token' +
			'&client_id=' + clientId +
			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
			'&redirect_uri=' + encodeURIComponent(redirectUri);

		window.location.href = link;
	},

	appLogin: (accessToken, callback) => {
		const request = new Request('https://api.spotify.com/v1/me', {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});
		
		fetch(request)
		.then(function (response) {
			if (response.statusText === 'Unauthorized') {
				callback({status:'Unauthorized'});
			}

			return response.json();
		}).then(response => {
			callback(response);
		}).catch(error => {
			callback(error);
		});
	},

	checkLoginStatus: () => {
		return window.location.href.toString().split('token=')[1];
	}
};
