module.exports = {
    name: 'args-info',
    aliases: ['args', 'aliastest'],
    description: 'Information about the arguments provided.',
    args: 'true',
    usage: '<argument1> <argument2>',
    guildOnly: false,
    cooldown: 5,
	execute(message, args) {
		if(args[0] === 'foo'){
            return message.channel.send('bar');
        }
        if(args[1] === 'oof'){
            return message.channel.send('bare');
        }

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};