const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
	name: 'avatar',
	description: 'avatar',
	async run (message, args, client) {
		const serveravatar = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(`${message.guild.name} avatar`)
			.setImage(message.guild.iconURL({ size: 4096, dynamic: true, format: "png" }))
		if(args[0] === 'server') { message.channel.send(serveravatar); return; }
                const user = message.mentions.users.first() || message.author;
                let ava = user.displayAvatarURL({ format: "png", dynamic: true, size: 4096 });
                if(ava === undefined) { ava = user.defaultAvatarURL; }
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle(`${user.tag} avatar`)
			.setImage(ava);
		message.channel.send(embed);
	}
};
