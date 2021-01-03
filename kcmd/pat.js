const discord = require('discord.js');
const client = new discord.Client();
const axios = require('axios');
module.exports = {
	name: 'pat',
	description: 'pat',
	async run (message, args, client) {
		const url = 'https://some-random-api.ml/animu/pat';
		let data, response, username;
		try {
				response = await axios.get(url);
				data = response.data;
				username = `${message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(message => message.user.username == args[0])).user.username}`
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(`${message.author.username} pats ${username}`)
			.setImage(data.link)
		message.channel.send(embed);
		} catch (error) {
                        console.log(error);
                }

	}
};
