const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const malScraper = require("mal-scraper");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription("search a anime.")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("name of the anime.")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const input = interaction.options.getString("input", true);
    malScraper.getInfoFromName(input).then(async (data) => {
      const embed = new EmbedBuilder()
        .setTitle(`My Anime List search result for ${input}`)
        .setDescription("here you go")
        .setThumbnail(data.picture)
        .setColor(0x18e1ee)
        .addFields([
          {
            name: "name",
            value: `**${input}**`,
            inline: true,
          },
          {
            name: "brodcast",
            value: `**${data.broadcast}**`,
            inline: false,
          },
          {
            name: "premiered",
            value: `**${data.premiered}**`,
            inline: false,
          },
          {
            name: "status",
            value: `**${data.status}**`,
            inline: false,
          },
          {
            name: "episodes",
            value: `**${data.episodes}**`,
            inline: false,
          },
          {
            name: "rating",
            value: `**${data.rating}**`,
            inline: false,
          },
          {
            name: "genres",
            value: `**${data.genres}**`,
            inline: false,
          },
          {
            name: "members",
            value: `**${data.members}**`,
            inline: false,
          },
          {
            name: 'score',
            value: `**${data.score}**`,
            inline: false,
          },
          {
            name: "ranked", 
            value: `**${data.ranked}**`,
            inline: false,
          },
          {
            name: "studios",
            value: `**${data.studios}**`,
            inline: true,
            
          }
        ]);
      await interaction.reply({
        embeds: [embed],
      });
    });
  },
};
