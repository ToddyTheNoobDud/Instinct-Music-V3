const {
  EmbedBuilder,
  SlashCommandBuilder,
  ChannelType,
 CommandInteraction
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("play song in the VC")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("current supported: youtube , spotify , soundcloud")
        .setRequired(true)
    ),
    /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
      const { options, member, guild, channel } = interaction;
    const voiceChannel = member.voice.channel;
    const input = interaction.options.getString("input");
    const Response = new EmbedBuilder()
      .setColor(0x18e1ee)
      .setTitle("Ohio Beats");
    if (!voiceChannel)
      return interaction.reply({
        embeds: [Response.setDescription("join a vc firts lol")],
        ephemeral: true,
      });
    const lol = guild.channels.cache
      .filter((chnl) => chnl.type == ChannelType.GuildVoice)
      .find((channel) => channel.members.has(client.user.id));
    if (lol && voiceChannel.id !== lol.id)
      return interaction.reply({
        embeds: [Response.setDescription(`im already in <#${lol.id}>`)],
        ephemeral: true,
      });

    client.distube.play(voiceChannel, options.getString("input"), {
      textChannel: channel,
      member: member,
    });
    const embed = new EmbedBuilder()
      .setTitle("Musik System")
      .setDescription(`im now playing **${input}**`)
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
  } catch (error) {
    console.log(error)
      const errorEmbed = new EmbedBuilder()
        .setColor(0x18e1ee)
        .setDescription(`error: ${error}`);
      return interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
  }
}
 

