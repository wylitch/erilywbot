const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
	name: 'rc',
	description: 'rc',
	async run (message, args, client) {
		const args2 = message.content.split(` `);
		const command2 = args2.shift().toLowerCase();
		const child_process = require('child_process');
			if (message.author.id !== '373143072261013504') return;
			let code = args2.join(" ");
			const output = child_process.execSync(code, { encoding: "UTF-8" });
				const embed = new discord.MessageEmbed()
					.setColor('2f3136')
					.setDescription('```' + output + '```')
				message.channel.send(embed);
	}
};
