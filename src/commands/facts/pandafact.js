const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("panda_facts")
    .setDescription("random panda facts"),
  async execute(interaction, client) {
    fetch(`https://some-random-api.ml/facts/panda`)
      .then((res) => res.json())
      .catch({})
      .then(async (json) => {
        const embed = new EmbedBuilder()
          .setTitle("panda facts")
          .setDescription(json.fact)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/938949514688081971/1059468478802825226/gau-truc-panda.gif"
          )
          .setColor(0x18e1ee)
          .setTimestamp(Date.now())
          .setFooter({
            text: `nice panda`,
          });
        await interaction.reply({
          embeds: [embed],
        });
      });
  },
};
