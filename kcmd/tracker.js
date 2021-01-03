const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
	name: "tracker",
	description: "tracker",
	async run (message, args, client) {
		const man = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle('Tracker usage')
			.setDescription('k.tracker <bug>')
		const noargs = new discord.MessageEmbed()
			.setColor('ff0000')
			.setTitle('Not enough arguments')
			.setDescription('Type k.tracker man for more information')
	if(!args[0]) { return message.channel.send(noargs); };
	if(args[0] === 'man') { return message.channel.send(man); };
		const bugtracker = new discord.MessageEmbed()
			.setColor('ff0000')
			.setTitle('Tracker: new bug reported')
			.setDescription(args.join(" "))
			.addFields(
				{ name: 'Author:', value: `${message.author.tag}`, inline: true },
				{ name: 'GuildID:', value: `${message.guild.id}`, inline: true },
				{ name: 'UserID:', value: `${message.author.id}`, inline: true },
			)
		const tracksend = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle('We got your bug-track!')
			.setDescription('Just wait, we will reply you')
			.addField('Or DM developer:', `<@373143072261013504>`)
			.addField('You send:', `${args.join(" ")}`)
		client.channels.cache.get('793034728680587346').send(bugtracker);
		const newtrack = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle('You have new unchecked bug-tracks!')
			.addField(`Check them:`, `<#793034728680587346>`)
                message.author.send(tracksend);
		client.users.cache.get('373143072261013504').send(newtrack);
	}
};
