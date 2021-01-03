const discord = require('discord.js');
const client = new discord.Client();
const axios = require('axios');
module.exports = {
	name: 'wink',
	description: 'wink',
	async run (message, args, client) {
		const url = 'https://some-random-api.ml/animu/wink';
		let data, response;
		try {
				response = await axios.get(url);
				data = response.data;
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(`${message.author.username} winks`)
			.setImage(data.link)
		message.channel.send(embed);
		} catch (error) {
                        console.log(error);
                }

	}
};
