const {
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: {
      name: "music",
  
    },
      async execute(interaction, client) {
        const embed = new EmbedBuilder()
          .setTitle("Music Commands")
          .setDescription("```yaml\n/play, /stop, /resume, /pause, /shuffle, /queue, /skip, /volume ```")
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
  