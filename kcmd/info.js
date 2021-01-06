const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
	name: 'info',
	description: 'info',
	async run (message, args, client) {
		const embed = new discord.MessageEmbed()
			.setColor('2f3136')
			.setTitle('Invite')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=769936659776405526&permissions=8&scope=bot')
			.setDescription(`Github:\nhttps://github.com/wylitch/kli.bot\nSupport server:\nhttps://discord.gg/bdAuBj5`)
			.setThumbnail(client.user.displayAvatarURL())
			.addFields(
				{ name: 'What is klite?', value: 'klite is standard bot, written on discord.js' },
				{ name: 'Who are developers of this bot?', value: 'Developers of this bot: **wylite#0001**; **Sandorik#6186**' },
			)
		message.channel.send(embed);
	}
};
