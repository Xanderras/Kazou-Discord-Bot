const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons');
const { client } = require('nuggies/src/classes/v12/giveaways');

module.exports = {
  name: 'ddverbonden',
  description: 'this command does the dropdownrol!',
  execute(message, args) {
    const Antwerpen = new MessageMenuOption()
      .setLabel('Antwerpen')
      .setDescription('Antwerpen')
      .setEmoji('😁')
      .setValue('Antwerpen');

    const Brugge = new MessageMenuOption()
      .setLabel('Brugge')
      .setDescription('Brugge')
      .setEmoji('👍')
      .setValue('Brugge');
    
    const Leuven = new MessageMenuOption()
      .setLabel('Leuven')
      .setDescription('Leuven')
      .setEmoji('😎')
      .setValue('Leuven');

    const Aalst = new MessageMenuOption()
      .setLabel('Land van Aalst')
      .setDescription('MVL Land van Aalst')
      .setEmoji('❤️')
      .setValue('Land van Aalst');

    const Gent = new MessageMenuOption()
      .setLabel('Gent')
      .setDescription('MVL Gent')
      .setEmoji('😊')
      .setValue('Gent');
    
    const LeieSchelde = new MessageMenuOption()
      .setLabel('Leie en Schelde')
      .setDescription('Leie en Schelde')
      .setEmoji('🎶')
      .setValue('Leie en Schelde');
    
    const Meetjesland = new MessageMenuOption()
      .setLabel('Meetjesland')
      .setDescription('Meetjesland')
      .setEmoji('👌')
      .setValue('Meetjesland');

    const VlaamseArdennen = new MessageMenuOption()
      .setLabel('Vlaamse Ardennen')
      .setDescription('Vlaamse Ardennen')
      .setEmoji('🤩')
      .setValue('Vlaamse Ardennen');

    const Oostende = new MessageMenuOption()
      .setLabel('Oostende')
      .setDescription('Oostende')
      .setEmoji('🤑')
      .setValue('Oostende');

    const MechelenTurnhout = new MessageMenuOption()
      .setLabel('Regio Mechelen-Turnhout')
      .setDescription('Regio Mechelen-Turnhout')
      .setEmoji('😜')
      .setValue('Regio Mechelen-Turnhout');
    
    const RoeselareTielt = new MessageMenuOption()
      .setLabel('Roeselare-Tielt')
      .setDescription('Roeselare-Tielt')
      .setEmoji('🤗')
      .setValue('Roeselare-Tielt');
    
    const SintMichielsbond = new MessageMenuOption()
      .setLabel('Sint-Michielsbond')
      .setDescription('Sint-Michielsbond')
      .setEmoji('😋')
      .setValue('Sint-Michielsbond');
    
    const WaasDender = new MessageMenuOption()
      .setLabel('Waas en Dender')
      .setDescription('Waas en Dender')
      .setEmoji('🤣')
      .setValue('Waas en Dender');

    const WestVlaanderen = new MessageMenuOption()
      .setLabel('West-Vlaanderen (JOMBA)')
      .setDescription('West-Vlaanderen (JOMBA)')
      .setEmoji('😌')
      .setValue('West-Vlaanderen (JOMBA)');

    const ZuidWestVlaanderen = new MessageMenuOption()
      .setLabel('Zuid-West-Vlaanderen')
      .setDescription('Zuid-West-Vlaanderen')
      .setEmoji('🥳')
      .setValue('Zuid-West-Vlaanderen');

    const verbonden = [Antwerpen, Brugge, Leuven, Aalst, Gent, LeieSchelde, Meetjesland, VlaamseArdennen, Oostende, MechelenTurnhout, RoeselareTielt, SintMichielsbond, WaasDender, WestVlaanderen, ZuidWestVlaanderen]

    const Menu = new MessageMenu()
      .setID('rol select')
      .setPlaceholder('kies jouw verbond');

    verbonden.forEach(v => {
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