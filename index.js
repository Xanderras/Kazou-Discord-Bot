const Discord = require('discord.js');
const config = require('./config.json');
const Nuggies = require('nuggies');


const client = new Discord.Client({
  allowedMentions:  {
    parse: ['users', 'roles'],
    repliedUser: true,
  },
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS"
  ],
});

require('discord-buttons')(client);
bot.on('clickMenu', menu => {
  Nuggies.dropclick(client, menu);
});

require('./utilities')

client.login(config.token)