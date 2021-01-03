const discord = require('discord.js');
const client = new discord.Client();
const axios = require('axios');
module.exports = {
	name: 'hug',
	description: 'hug',
	async run (message, args, client) {
		const url = 'https://some-random-api.ml/animu/hug';
		let data, response, username;
		try {
		const noargs = new discord.MessageEmbed()
                        .setColor('ff0000')
                        .setTitle('Mention user you want to hug')
                if(!args[0]) { message.channel.send(noargs); return;}

				response = await axios.get(url);
				data = response.data;
				username = `${message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(message => message.user.username == args[0])).user.username}`;
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(`${message.author.username} hugs ${username}`)
			.setImage(data.link)
		message.channel.send(embed);
		} catch (error) {
                        console.log(error);
                }

	}
};
