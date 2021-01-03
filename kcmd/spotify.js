const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
	name: "spotify",
	async run (message, args, client) {
		console.log("111");
		let user = message.mentions.users.first() || message.author;

	let activity = user.presence.activities.find((e) => e.name === 'Spotify');

	console.log(activity);
	const lolbus = new discord.MessageEmbed()
		.setColor('ff0000')
		.setTitle(':x: Unable to find user Spotify activity')
	if(activity.type === null) { return message.channel.send(lolbus) };
	if(activity.name === null) { return message,channel.send(lolbus) };
	if(activity.assets === null) { return message.channel.send(lolbus) };

	if (activity !== null && activity.type === 'LISTENING' && activity.name === 'Spotify' && activity.assets !== null) {

		let trackIMG = `https://i.scdn.co/image/${activity.assets.largeImage.slice(8)}`;
		let trackURL = `https://open.spotify.com/track/${activity.syncID}`;
		let trackName = activity.details;
		let trackAuthor = activity.state;
		let trackAlbum = activity.assets.largeText;

			const embed = new discord.MessageEmbed()
				.setColor('2f3136')
				.setTitle('Listen along!')
				.setURL(trackURL)
				.setAuthor('Spotify', 'https://cdn.discordapp.com/emojis/408668371039682560.png')
				.setThumbnail(trackIMG)
				.addFields(
					{ name: 'Track name:', value: trackName },
					{ name: 'Album:', value: trackAlbum },
					{ name: 'Author:', value: trackAuthor },
			)
			message.channel.send(embed);
		} else {

			message.channel.send('This user isnt listening to the Spotify at the moment.');

		}
	}
};
