const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { afk } = require("../../etc/afk");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("Sets you afk")
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Sets the reason for afk")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const reason = interaction.options.getString("reason");

    afk.set(interaction.member.id[(Date.now(), reason)]);

    const embed = new EmbedBuilder()
      .setTitle("Afk")
      .setDescription(`**${interaction.user.toString()} is now afk**`)
      .setColor(0x18e1ee)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/938949514688081971/1055124343937585264/get-real-cat.gif"
      )
      .setTimestamp(Date.now());
    await interaction.reply({ embeds: [embed] });
  },
};
