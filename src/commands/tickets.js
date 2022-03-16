const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons');
const { client } = require('nuggies/src/classes/v12/giveaways');

module.exports = {
  name: 'tickets',
  description: 'this command does the dropdownrol!',
  execute(message, args) {
    let tickets = new Discord.MessageEmbed()
        .setTitle('Hulp en rol aanvraag tickets')
        .addField('Waarvoor dienen tickets?', "Wanneer je een ticket aanmaakt, kan je privé sturen met 1 van de moderatoren van deze server.")
        .addField('Met dit ticket kan je:', '- Een moderator sturen wanneer je vragen hebt rond discord of Kazou.\n(Discord is in het begin niet altijd gemakkelijk, maar onze moddi\'s zijn er om jou te helpen! Heb je een vraag over Kazou en weet je niet wie je kan raadplegen of moet sturen? Deze legendarische moderatoren staan tot uw dienst!)\n\n- Je kan ook een rol aanvragen voor de werkgroep waar je bij hoort.\n(Iedere werkgroep heeft zijn eigen kanaal, waar je kan bellen, overleggen en chatten met elkaar.)\n\n- Cursus tot hoofdanimator gedaan? Je kan hiervoor een rol aanvragen, zodat anderen jou kunnen contacteren als ze met vragen zitten.\n\nWees niet bang om iets te vragen, onze moddi\'s helpen je met veel plezier verder! (Dat is tenslotte waarom ze er zijn hé.)')
        .setColor('#3ae914')
    message.channel
      .send(tickets);
  }
}