const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
    name: "klite",
    description: "klite",
    async run (message, args, client) {
        const youserious = new discord.MessageEmbed()
            .setColor('2f3136')
            .setTitle('You serious?')
        if(args[0]) { message.channel.send(youserious); return; }
        const embed = new discord.MessageEmbed()
            .setColor('2f3136')
            .setTitle('Sorry!')
            .setDescription('This command is under construction now. Also, it will be available only for developer soon.')
        message.channel.send(embed);
    }
};