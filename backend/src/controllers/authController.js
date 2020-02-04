const axios = require('axios');

module.exports = {
	async index(req, res) {
		const clientID = '4df23038d604477cb9499f57c4f7a64d';
		const URI = 'http%3A%2F%2Flocalhost%3A3000%2F';

		const response = await axios.get(
			`https://accounts.spotify.com/authorize?client_id=${clientID}
			&response_type=code&redirect_uri=${URI}&scope=playlist-read-private
			%20playlist-modify-public%20playlist-modify-private&state=34fFs29kd09`);

		// console.log(response.data);

		return res.json({ ok: true });
	},

	auth(req, res) {
		return res.render('index', { error: null, success: null });
	}
};
