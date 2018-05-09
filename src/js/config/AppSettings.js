/* Application settings for different app modules */

export default SPOTIFY_SETUP = {
	client: {
		id:'2c5f0bc1b1814056b71309581f0cc4ab',
		secret: '9c1d33f1633741428c3b5f8b8c188e9d'
	},
	scopes: {
		readPrivate: 'user-read-private',
		readMail: 'user-read-email'
	},
	redirectURI: {
		dev: 'http://localhost:3000/',
		prod: ''
	}
};

