const {
    EmbedBuilder,
    SlashCommandBuilder,
    ChannelType,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("queue")
      .setDescription("check the queue in vc."),
    async execute(interaction, client) {
      const { member, guild } = interaction;
      const voiceChannel = member.voice.channel;
      const queue = await client.distube.getQueue(voiceChannel);
      const Response = new EmbedBuilder()
        .setColor(0x18e1ee)
        .setTitle("Ohio Stops");
      if (!voiceChannel)
        return interaction.reply({
          embeds: [Response.setDescription("join the vc firts to see a queue lol")],
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
      if(!queue) return interaction.reply({content: 'no queue?', ephemeral: true})
      const embed = new EmbedBuilder()
        .setTitle("Musik System")
        .setDescription(`${queue.songs.map(
         (song, id) => `\n**${id + 1}** | ${song.name} - \`${song.formattedDuration}\``)}`)
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
  