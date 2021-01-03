const { inspect } = require('util');
const discord = require("discord.js");
const moment = require('moment-timezone');
const client = new discord.Client();
module.exports = {
	name: 'eval',
	description: 'eval',
	async run (message, args, client, command) {
		if (message.author.id !== '373143072261013504') return;
			let evaled;
			try {
				evaled = await eval(args.join(` `));
			if(evaled >>> 1999) { return; };
				console.log(inspect(evaled));

			const embed = new discord.MessageEmbed()
				.setColor('2f3136')
				.setDescription('```' + inspect(evaled) + '```')
			message.channel.send(embed);
		} catch (error) {
			console.log(error);
			const evalerr = new discord.MessageEmbed()
				.setColor('ff0000')
				.setTitle(':x: Unexpected error in command `eval`')
				.setDescription(error)
			message.channel.send(evalerr);
		}
	}
};
