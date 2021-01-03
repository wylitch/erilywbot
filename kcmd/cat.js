const discord = require('discord.js');
const client = new discord.Client();
const axios = require('axios');
module.exports = {
	name: 'cat',
	description: 'cat',
	async run (message, args, client) {
		const url = 'https://some-random-api.ml/img/cat';
		let data, response;
		try {
				response = await axios.get(url);
				data = response.data;
		} catch (error) {
			console.log(error);
		}
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle('uwu')
			.setImage(data.link)
		message.channel.send(embed);
	}
};
