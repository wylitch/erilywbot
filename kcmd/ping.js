const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
	name: 'ping',
	description: 'Ping!',
	async run (message, args, client) {
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(`:ping_pong: API Latency is ${Math.round(client.ws.ping)}ms`)
		message.channel.send(embed);
	},
};
