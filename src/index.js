const Discord = require('discord.js');
const config = require('./config.json');
const Nuggies = require('nuggies');
const client = new Discord.Client({
    allowedMentions: {
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
const prefix = '!'

const fs = require('fs')
const path = require('path')
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(path.resolve(__dirname, 'commands')).filter(file => file.endsWith('.js'));
console.log(commandFiles)

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
console.log(client.commands)
client.on("ready", () => {
    console.log("i am ready")
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ddverbonden') {
        client.commands.get('ddverbonden').execute(message, args);
    }
})

require('discord-buttons')(client);
client.on('clickMenu', async menu => {
    const Member = menu.clicker.member
    if (menu.values[0] == 'Antwerpen') {
        const roleID = '945429155602903110';
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Antwerpen**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Antwerpen**', true)
        }
    }
    else if (menu.values[0] == 'Brugge') {
        const roleID = '945429306199388191'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Brugge**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Brugge**', true)
        }
    }
    else if (menu.values[0] == 'Leuven') {
        const roleID = '945429333177139213'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Leuven**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Leuven**', true)
        }
    }
    else if (menu.values[0] == 'Land van Aalst') {
        const roleID = '945429396595048548'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Land van Aalst**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **MVL Land van Aalst**', true)
        }
    }
    else if (menu.values[0] == 'Gent') {
        const roleID = '945429572625764423';
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **MVL Gent**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **MVL Gent**', true)
        }
    }
    else if (menu.values[0] == 'Leie en Schelde') {
        const roleID = '945429639524913242'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Leie en Schelde**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Leie en Schelde**', true)
        }
    }
    else if (menu.values[0] == 'Meetjesland') {
        const roleID = '945429714292572170'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Meetjesland**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Meetjesland**', true)
        }
    }
    else if (menu.values[0] == 'Vlaamse Ardennen') {
        const roleID = '945429769489612800'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Vlaamse Ardennen**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Vlaamse Ardennen**', true)
        }
    }
    else if (menu.values[0] == 'Oostende') {
        const roleID = '945429854998900788'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Oostende**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Oostende**', true)
        }
    }
    else if (menu.values[0] == 'Regio Mechelen-Turnhout') {
        const roleID = '945430141440524299'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Regio Mechelen-Turnhout**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Regio Mechelen-Turnhout**', true)
        }
    }
    else if (menu.values[0] == 'Roeselare-Tielt') {
        const roleID = '945430212965961728'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Roeselare-Tielt**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Roeselare-Tielt**', true)
        }
    }
    else if (menu.values[0] == 'Sint-Michielsbond') {
        const roleID = '945430384877912074'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Sint-Michielsbond**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Sint-Michielsbond**', true)
        }
    }
    else if (menu.values[0] == 'Waas en Dender') {
        const roleID = '945430446450290811'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Waas en Dender**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Waas en Dender**', true)
        }
    }
    else if (menu.values[0] == 'West-Vlaanderen (JOMBA)') {
        const roleID = '945430499147534336'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **West-Vlaanderen (JOMBA)**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **West-Vlaanderen (JOMBA)**', true)
        }
    }
    else if (menu.values[0] == 'Zuid-West-Vlaanderen') {
        const roleID = '945430559813955605'
        if (!Member.roles.cache.has(roleID)) {
            await Member.roles.add(roleID)
            return menu.reply.send('You have now the role **Zuid-West-Vlaanderen**', true)
        }
        else if (Member.roles.cache.has(roleID)) {
            await Member.roles.remove(roleID)
            return menu.reply.send('You have now no longer the role **Zuid-West-Vlaanderen**', true)
        }
    }
});

client.login(config.token);