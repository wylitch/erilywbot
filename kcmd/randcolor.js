const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
    name: "randcolor",
    description: "randcolor",
    async run (message, args, client) {
        const embed = new discord.MessageEmbed()
            .setColor('2f3136')
            .setTitle('hex code accepted an islam')
        message.channel.send(embed);
    }
};