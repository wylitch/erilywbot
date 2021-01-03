const fs = require('fs');
const discord = require("discord.js");
const client = new discord.Client();
const config = require('./cfg.json');

client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./kcmd').filter(file => file.endsWith('.js'));
client.once('ready', () => {
	client.user.setActivity(`null`,
        { type: "PLAYING",
})
	console.log(`AvatarURL: ${client.user.displayAvatarURL({ size: 4096, dynamic: true, format: "png"})}`);
	console.log(`Name: ${client.user.username}`);
});
let prefix = "k.";
for (const file of commandFiles) {
	const command = require(`./kcmd/${file}`);
	client.commands.set(command.name, command);
}
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if(message.channel.type === 'dm') return;
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

if (!client.commands.get(command)) return;
try {
	client.commands.get(command).run(message, args, client, command)
} catch (error) {
	console.log(error);
	}

});
client.login(config.token);
