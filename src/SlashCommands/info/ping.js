const {Client, CommandInteraction} = require('discord.js')

module.exports = {
  name: 'ping',
  description: 'this is a ping command!',
  type: 'CHAT_INPUT',
  /**
   * 
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    interaction.followUp({content: `${client.ws.ping}ms!`});
  },
}