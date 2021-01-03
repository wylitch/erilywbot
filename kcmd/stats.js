const discord = require("discord.js");
const client = new discord.Client();
const moment = require("moment");

module.exports = {
	name: 'stats',
	description: 'stats',
	async run (message, args, client) {
let uptime = `${moment.utc(client.uptime).format('--:HH:mm:ss')}`;
		let used = process.memoryUsage().rss / 1024 / 1024;
			let memberCount = 0;
			for (let guild of message.client.guilds.cache.array()) {
				memberCount += guild.memberCount;
		}
			const embed = new discord.MessageEmbed()
				.setColor('2f3136')
				.addFields(
					{ name: 'Uptime', value: 'Not stated' },
					{ name: 'Platform', value: `linux` },
					{ name: 'Commands', value: client.commands.size },
                                        { name: 'Servers:', value: client.guilds.cache.size, inline: true },
                                        { name: 'Users:', value: memberCount, inline: true },
                                        { name: 'Usage:', value: `${Math.round(used * 100) / 100}MB`, inline: true },
                                        { name: 'Versions', value: `**D.JS** = 12.4.1\n**Axios** = 0.21.0` },

				)
				message.channel.send(embed);
	}
};
