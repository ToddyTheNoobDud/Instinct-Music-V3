const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gayrate")
    .setDescription("see somone gay rate")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("the user to gay rate")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const result = Math.ceil(Math.random() * 100);
    const member = interaction.options.getMember("user") || interaction.member;
    const embed = new EmbedBuilder()
      .setTitle("Gay rated.")
      .setDescription(`${member.user.toString()} is ${result}% gay rate`)
      .setColor(0x18e1ee)
      .setThumbnail('https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif')
      .setFooter({
        text: 'Lol',
        iconURL: `https://cdn.discordapp.com/attachments/912010508826198090/1045857980299616336/unknown.png`
      })
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
  },
};
