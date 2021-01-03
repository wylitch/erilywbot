const discord = require("discord.js");
const client = new discord.Client();
const moment = require('moment');
module.exports = {
    name: "ui",
    description: "ui",
        async run (message, args, client) {
		if (message.author.id !== '373143072261013504') return;
            let member, user;
                member = message.mentions.members.first() || message.member;
                user = member.user;
                    const embed = new discord.MessageEmbed()
                        .setColor('2f3136')
                        .setTitle(`${user.username !== null ? `${user.tag}` : 'null'}`)
                        .setThumbnail(user.displayAvatarURL({ size: 4096, dynamic: true }))
                        .addFields (
                            { name: "ID:", value: `${user.id}` },
			    { name: "Date created:", value: `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}` },
    			    { name: "Date joined:", value: `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}` },
			)
                  message.channel.send(embed);
        }
}
