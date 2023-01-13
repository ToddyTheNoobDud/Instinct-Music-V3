const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("youtube_search")
    .setDescription("search something on youtube")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("search something here")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const name = encodeURIComponent(interaction.options.getString("query"));
    const link = `https://www.youtube.com/results?search_query=${name}`;

    const embed = new EmbedBuilder()
      .setTitle("Found it")
      .setDescription(`**${link}**`)
      .addFields([
        {
          name: "Searched Query",
          value: `**${name}**`,
          inline: true,
        },
      ])
      .setColor(0x18e1ee)
      .setFooter({
        text: `Made with ❤️ by !Toddy#6505`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
  },
};
