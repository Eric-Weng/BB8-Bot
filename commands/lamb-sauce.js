const YTDL = require('ytdl-core')

function Play(connection, message)
{
    var server = servers[message.guild.id] //get servers queue
    server.dispatcher = connection.playStream(YTDL("https://www.youtube.com/watch?v=NiESb9M1HmY", {filter: "audioonly"}));
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
            connection.disconnect();
        }
    });
}

module.exports = {
    name: 'lamb-sauce',
    aliases: ['args', 'aliastest'],
    description: "Where's the lamb SAUCE **CAUTION**: LOUD",
    guildOnly: true,
    cooldown: 5,
	execute(message, args) {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []} //make queue for new server
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.reply("Joined");
                        Play(connection, message);
                    })
            }      
        }
        else
        {
            message.reply("you must be in a voice channel to look for lamb sauce")
        }
	},
};