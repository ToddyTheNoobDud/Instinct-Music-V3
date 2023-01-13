const {
  EmbedBuilder,
  SlashCommandBuilder,
  Colors,
  ChannelType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("volume")
    .setDescription("set the volume of the song in the VC")
    .addNumberOption((option) =>
      option
        .setName("percent")
        .setDescription("10 = 10%")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const { options, member, guild } = interaction;
    const voiceChannel = member.voice.channel;
    const percent = interaction.options.getNumber("percent");
    const Response = new EmbedBuilder()
    .setColor(0x18e1ee)
    .setTitle("Ohio Beats");
    const Volume = options.getNumber("percent")
    if (!voiceChannel)
      return interaction.reply({
        embeds: [Response.setDescription("join a vc firts lol")],
        ephemeral: true,
      });
    const lol = guild.channels.cache
      .filter((chnl) => chnl.type == ChannelType.GuildVoice)
      .find((channel) => channel.members.has(client.user.id));
    if (lol && voiceChannel.id !== lol.id)
      if (Volume > 200 || Volume < 1)
        return interaction.reply({
          embeds: [Response.setDescription("min value: 1, max value: 200")],
          ephemeral: true,
        });

    client.distube.setVolume(voiceChannel, Volume);
    const embed = new EmbedBuilder()
      .setTitle("Musik System")
      .setDescription(`volume setted to **${percent}**%`)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/919680757813882910/1055211407974604951/IMG_1548.png"
      )
      .setFooter({
        text: "made with ❤️ by !Toddy#6505",
        iconURL:
          "https://cdn.discordapp.com/attachments/938949514688081971/1056195487360884736/images.jpg",
      })
      .setColor(0x18e1ee);
    return interaction.reply({
      embeds: [embed],
    });
  },
};
try {
} catch (error) {
  const errorEmbed = new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`error: ${error}`);
  return interaction.reply({ embeds: [errorEmbed], ephemeral: true });
}
