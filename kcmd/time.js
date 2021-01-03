const discord = require('discord.js');
const client = new discord.Client();
const moment = require('moment-timezone');

module.exports = {
	name: 'time',
	description: 'time',
	async run (message, args, client) {
		let currenttime = `${moment().tz(`${args[0]}`).format('ddd, MMMM Do YYYY, HH:mm:ss')}`
                        const timehelp = new discord.MessageEmbed()
                                .setColor('2f3136')
                                .setTitle('Time command manual')
				.setDescription('<> - necessarily, {} - optional')
				.addFields(
					{ name: "Usage:", value: "k!time {timezone}" },
					{ name: "Who can use:", value: "Everyone" },
				)
				.setFooter('Tip: you can use Country/City instead of timezone name')
                if(args[0] === 'man') { message.channel.send(timehelp); return; }
                        const embed1 = new discord.MessageEmbed()
                                .setColor('2f3136')
                                .setTitle(currenttime)
                                .setFooter('Timezone used: GMT+3')
		if(!args[0]) { message.channel.send(embed1); return; }
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(currenttime)
			.setFooter(`Timezone used: ${args[0]}`)
		message.channel.send(embed);
	}
};
