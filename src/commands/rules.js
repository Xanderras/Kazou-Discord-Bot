const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons');
const { client } = require('nuggies/src/classes/v12/giveaways');

module.exports = {
  name: 'rules',
  description: 'this command does the dropdownrol!',
  execute(message, args) {
    let rules = new Discord.MessageEmbed()
        .setTitle('De geboden van Discord')
        .addField('Respect voor iedereen:', "We tonen wederzijds respect. Pesten wordt niet getolereerd, dit wordt vervolgd.")
        .addField('Maak je naam zichtbaar:', 'Tuurlijk mag je een leuke naam hebben, maar zorg wel dat mensen weten wie je bent. Verwerk dus je naam in een leuke Discord-naam.')
        .addField('Geen expliciete content:', 'Om expliciete content te vinden kun je andere bronnen raadplegen. Dit is Kazou en wij hebben daar geen baat bij.')
        .addField('Belangrijke berichten gaan naar de moderators:', 'Belangrijke berichten zijn ook zeer belangrijk voor de Moddi\'s. Heb je dus iets belangrijks te sturen, aarzel dan niet om een <#942540909835350126> aan te maken in het daarvoor bestemde kanaal. Op deze manier worden alle Moddi\'s onmiddelijk op de hoogte gebracht en zal je bericht zo snel mogelijk behandeld worden.')
        .addField('Vragen:', 'Niet alleen kun je met belangrijke berichten terecht bij de Moddi\'s, maar ook met al je vragen. Ze zullen jou ook hiermee zo snel mogelijk helpen als je een <#942540909835350126> aanmaakt.')
        .addField('Niet spammen:', 'Een hele hoop notificaties binnenkrijgen kan zeer vervelend zijn voor iedereen. Voel je toch de drang om vele repetitieve berichten te sturen is hier speciaal een kanaal voor: <#834875625633611806>\nAan nieuwe gebruikers wordt aangeraden de meldingen voor dit kanaal op Only @mentions te zetten zodat je niet elke keer een notificatie krijgt.')
        .addField('Wissel je tips en ervaringen uit:', 'Help een moni in nood met jou tips and tricks in en rond Kazou. Zo kunnen we van elkaar leren en daar wordt iedereen een betere moni van')
        .addField('Niet grinden:', 'Zit jij in een kanaal zonder microfoon of camera om XP te verzamelen? Dan ben je aan het grinden en dat is voor niemand leuk. Natuurlijk sturen de Moddi\'s jou eerst een waarschuwingsbericht. Mocht je niet antwoorden kan het zijn dat je tijdelijk de no-XP rol krijgt. Hierdoor zal je dus geen XP meer krijgen. Mocht je nog verder doen, overleggen de Moddie\'s wat de volgende stappen zijn.')
        .setColor('#3ae914')
    message.channel
      .send(rules);
  }
}