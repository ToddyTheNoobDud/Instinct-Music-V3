const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { message } = require('statuses');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('See my epic lagged ping!'),
    async execute (interaction, client) {

      const ping = Date.now() - interaction.createdAt;
      const api_ping = client.ws.ping;

         const embed = new EmbedBuilder()
         .setTitle(`Ping Pong!`)
         .setDescription(`API Lag: ${api_ping}\nMy Lag: ${ping}`)
         .setColor(0x18e1ee)
         .setTimestamp(Date.now());
       await interaction.reply({
         embeds: [embed],
       });
    }
    

}