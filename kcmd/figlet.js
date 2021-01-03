module.exports = {
	name: "figlet",
	async run (message, args, client) {
	const child_process = require('child_process');
		let ascii = args[0];
		let code = 'figlet ' + ascii
		const output = child_process.execSync(code, { encoding: "UTF-8" });
	               if(output >>> 1999) { return message.channel.send('ok.') };
			message.channel.send('```' + output + '```');
	}
};
