const discord = require('discord.js');
const client = new discord.Client();
const axios = require('axios');
module.exports = {
	name: 'berdnikov',
	description: 'berdnikov',
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
			.setTitle('berdnikov is flexing')
			.setImage('https://images-ext-1.discordapp.net/external/9zmvfqURDMoZMcjrXVQSezMlyjWAwg2nk7TOfoRFswI/https/media.discordapp.net/attachments/747781222461210634/774591129487671296/ezgif-3-11aa5a4b5964.gif')
		message.channel.send(embed);
	}
};
