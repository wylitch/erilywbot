const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
	name: 'cpoll',
	async run (message, args, client) {
	try{
		if(args[0] === 'man') {
                const cpMan = new discord.MessageEmbed().setTitle('Poll command man').setColor('2f3136').addField('Usage:', 'k.cpoll <#channel> <description>')
                        message.channel.send(cpMan);
                };

		let cpChannel = message.mentions.channels.first();
		let cpDscr = args.slice(1).join(' ');
			const cpEmb = new discord.MessageEmbed().setTitle('New poll!').setDescription(cpDscr).setColor('2f3136').addField('Author:', `<@${message.author.id}>`)
		let cpSend = await cpChannel.send(cpEmb);
		await cpSend.react('👍')
		await cpSend.react('👎')
			message.delete();
		}catch(err){console.log(err);};
	}
};
