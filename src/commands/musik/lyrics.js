const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lyrics")
    .setDescription("lyrics for a song")
    .addStringOption((option) =>
      option
        .setName("title")
        .setDescription("title of the song")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const song = interaction.options.getString("title");

    fetch(`https://some-random-api.ml/lyrics?title=${song}`)
      .then((res) => res.json())
      .catch({})
      .then(async (json) => {

        const embed = new EmbedBuilder()
          .setTitle(`lyrics for ${json.title}`)
          .setDescription(`${json.lyrics}`)
          .setThumbnail(
            `${json.thumbnail.genius}`
          )
          .addFields([
            {
              name: "title",
              value: `${json.title}`,
              inline: true,
            },
            {
              name: "author",
              value: `${json.author}`,
              inline: false,
            },
            {
              name: "links",
              value: `${json.links.genius}`,
              inline: false,
            },
            {
              name: "source",
              value: `${json.source}`,
              inline: true,
            },
          ])
          .setColor(0x18e1ee)
          .setFooter({
            text: `made with love by !Toddy#6505,\n${json.disclaimer}`,
            iconURL: `https://media.discordapp.net/attachments/1049856209546641439/1054751963415318589/blinky.gif`
          })
          .setTimestamp(Date.now());
        await interaction.reply({
          embeds: [embed],
        });
      });
  },
};
