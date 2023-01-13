const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wiki")
    .setDescription("search on wiki")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("what you want to search")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const name = encodeURIComponent(interaction.options.getString("input"));
    const link = `https://pt.wikipedia.org/w/index.php?search=${name}`;

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
