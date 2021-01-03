const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
	name: 'help',
	description: 'help',
	async run (message, args, client) {
		const embed = new discord.MessageEmbed()
			.setColor('2d3136')
			.setTitle('Available commands')
			.addFields(
				{ name: 'General', value: '`help`, `avatar`, `ping`, `info`, `time`, `tracker`' },
				{ name: 'For developer', value: '`eval`, `exec`' },
				{ name: 'Fun', value: '`cat`, `dog`, `pat`, `hug`, `wink`, `berdnikov`' },
				{ name: 'Misc', value: '`stats`, `say`' },
			)
		message.channel.send(embed);
	}
};
