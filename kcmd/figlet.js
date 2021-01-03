module.exports = {
	name: "figlet",
	async run (message, args, client) {
	const child_process = require('child_process');
		let ascii = args[0];
		let code = 'figlet ' + ascii
		const output = child_process.execSync(code, { encoding: "UTF-8" });
	               if(`${ascii}` >>> 15) { return message.channel.send('Send message that less than 15 symbols.') };
			message.channel.send('```' + output + '```');
	}
};
