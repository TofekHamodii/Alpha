const Discord = require('discord.js');
const client = new Discord.Client(process.env.);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDg0NDY1NDcxMzE2Mjk1NzAy.DnG-1Q.20jTzw5nNUHGjtIV6sXlKGxd5sU);
