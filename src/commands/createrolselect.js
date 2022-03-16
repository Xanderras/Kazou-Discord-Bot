const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons');
//const { client } = require('nuggies/src/classes/v12/giveaways');
const client = require('../../src/index')

module.exports = {
  name: 'createrolselect',
  description: 'this command does the dropdownrol!',
  execute(message, args) {
    let rolOptions = [];
    let enable = true;

    while(enable){
        let args;
        message.channel.send('addRol: (react like (r,rol name,emoji,rolID)');
        client.on('message', message => {
            if (!message.content.startsWith('r') || message.author.bot) return;

            args = message.content.slice(1).trim().split(',');
        })
        rolOptions.push(
            new MessageMenuOption()
            .setLabel(arg[0])
            .setDescription(arg[0])
            .setEmoji(arg[2])
            .setValue(arg[0])
        );
        message.channel.send('Wilt u nog een rol toevoegen? (y of n)');
        client.on('message', message => {
            if(message.content.startsWith('n')) enable=false;
            else if(message.content.startsWith('y')) enable=true; 
        })
    }
    //const verbonden = [Antwerpen, Brugge, Leuven, Aalst, Gent, LeieSchelde, Meetjesland, VlaamseArdennen, Oostende, MechelenTurnhout, RoeselareTielt, SintMichielsbond, WaasDender, WestVlaanderen, ZuidWestVlaanderen]

    const Menu = new MessageMenu()
      .setID('rol select')
      .setPlaceholder('kies jouw verbond');

    rolOptions.forEach(v => {
      Menu.addOption(v)
    })
    const Row1 = new MessageActionRow()
      .addComponent(Menu)

    message.channel
      .send(
        new Discord.MessageEmbed()
          .setTitle('Rol select')
          .setDescription('Selecteer je verbond om de juiste rol te krijgen')
          .setColor('#3ae914'),
        { components: [Row1] });
  }
}