const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("warn a user")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("the user to warn")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("the reason").setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction, client) {
    const target = interaction.options.getMember("target");
    const reason = interaction.options.getString("reason");

    if (target.id === interaction.guild.ownerId)
      return interaction.reply({
        content: "i cant warn the owner bro",
        ephemeral: false,
      });

    if (target.id === interaction.member.id)
      return interaction.reply({
        content: "You cannot warn yourself.",
        ephemeral: false,
      });

    if (target.id === interaction.client.user.id)
      return interaction.reply({
        content: "I cant warn myself.",
        ephemeral: false,
      });

    const e = new EmbedBuilder()
      .setTitle("Warned")
      .setDescription(
        `${target.user.tag} has been warned by ${interaction.user.toString()}`
      )
      .addFields([
        {
          name: "reason",
          value: `${reason}`,
        },
      ])
      .setColor(0x18e1ee)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/938949514688081971/1055564046482546868/get-real-cat.gif"
      )
      .setTimestamp(Date.now());
      await interaction.reply({
        embeds: [e],
      })
  },
};
