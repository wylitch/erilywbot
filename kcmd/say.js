const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
	name: 'say',
	description: 'say',
	async run (message, args, client) {
		const noargs = new discord.MessageEmbed()
			.setColor('ff0000')
			.setTitle(':x: Unexpected error in command `say`')
			.setDescription('`You dont provided any arguments!`')
		if(!args[0]) { message.channel.send(noargs); return;}
        if (message.content.includes('@here') || message.content.includes('@everyone')) return false;
		message.delete();
		message.channel.send(args.join(" "));
	}
};
