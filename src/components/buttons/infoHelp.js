const {
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: {
      name: "info",
  
    },
      async execute(interaction, client) {
        const embed = new EmbedBuilder()
          .setTitle("Info Commands")
          .setDescription("```yaml\n/button, /embed, /help, /help2, /membercount, /ping, /status, /uptime```")
          .setFooter({
            text: `Made with ❤️ By !Toddy#6505`,
            iconURL: `https://cdn.discordapp.com/avatars/1050138724001910794/47dfeb25983920ec9c4a20aef76b0079.webp?size=512`,
          })
          .setColor(0x18e1ee)
          .setTimestamp(Date.now());
        await interaction.reply({
          embeds: [embed],
          ephemeral: true
        });
      },
    }
  