const {
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: {
      name: "moderation",
  
    },
      async execute(interaction, client) {
        const embed = new EmbedBuilder()
          .setTitle("Moderation Commands")
          .setDescription("```yaml\n/addrole, /ban, /clear, /kick, /lock, /timeout, /unlock, /warn```")
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
  