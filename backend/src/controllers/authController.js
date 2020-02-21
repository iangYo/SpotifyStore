const axios = require('axios');
const qs = require('qs');

module.exports = {
	show(req, res) {
		return res.render('index');
	},

	callback(req, res) {
		this.code = req.query.code;

		if (!this.code) return res.send({error: "Missing code"});

		res.redirect('/catchToken');
	},

	async catchToken(req, res, next) {
		const url = 'https://accounts.spotify.com/api/token';
		const encoded = `Basic ` + Buffer.from('4df23038d604477cb9499f57c4f7a64d:4b50f07ab6a1428a97cfc862306b115d').toString('base64');

		if (!this.code) return res.send({ error: "Missing code" });

		const data = qs.stringify({
			grant_type: "authorization_code",
			code: this.code,
			redirect_uri: "http://localhost:3000/callback"
		});

		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": encoded
			}
		};

		await axios.post(url, data, config).then(response => {
			console.log(response.data);
		}).catch(err => {
			next(err);
		});
	}
}