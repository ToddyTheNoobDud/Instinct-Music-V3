const weather = require("weather-js");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Show the weather of a location")
    .addStringOption((option) =>
      option
        .setName("location")
        .setDescription("The location to get the weather from")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.lenght === 0) {
      const errorembed = new EmbedBuilder()
        .setTitle("error")
        .setDescription("enter a valid location")
        .setColor(0x18e1ee)
        .setTimestamp(Date.now());
      return interaction.reply({ embeds: [errorembed] });
    }
    weather.find(
      { search: interaction.options.getString("location"), degreeType: "C" },
      async function (err, result) {
        if (!result) {
          const errorembed = new EmbedBuilder()
            .setTitle("error")
            .setDescription("location not found")
            .setColor(0x18e1ee)
            .setTimestamp(Date.now());
          return interaction.reply({ embeds: [errorembed] });
        }
        if (err) {
          const errorembed = new EmbedBuilder()
            .setTitle("error")
            .setDescription("enter a valid location")
            .setColor(0x18e1ee)
            .setTimestamp(Date.now());
          return interaction.reply({ embeds: [errorembed] });
        }
        const current = result[0].current;
        const location = result[0].location;
        const embed = new EmbedBuilder()
          .setTitle(`weather for ${location.name}`)
          .setDescription("here you go")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/938949514688081971/1055124343937585264/get-real-cat.gif"
          )
          .addFields([
            {
              name: "Timezone",
              value: `${location.timezone}`,
              inline: true,
            },
            {
              name: "Temperature",
              value: `${current.temperature}`,
              inline: false,
            },
            {
              name: "Degree type",
              value: location.degreetype,
              inlne: true,
            },
            {
              name: "Humidity",
              value: `${current.humidity}%`,
              inline: false,
            },
            {
              name: "Feels like",
              value: `${current.feelslike}`,
              inline: false,
            },
            {
              name: "Winds",
              value: current.winddisplay,
              inline: true,
            },
          ])
          .setColor(0x18e1ee)
          .setTimestamp(Date.now())
          .setFooter({
            text: `Made with ❤️ by !Toddy#6505`,
            iconURL: 'https://cdn.discordapp.com/attachments/938949514688081971/1055124343937585264/get-real-cat.gif'
          })
        await interaction.reply({ embeds: [embed] });
      }
    );
  },
};
