const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const ownerid = "864242229366095892";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverlist")
    .setDescription("owner only"),
  async execute(interaction, client) {
    if (interaction.user.id == ownerid) {

      let i0 = 0;
      let i1 = 10;
      let page = 1;

      let description =
        `Total Servers - ${client.guilds.cache.size}\n\n` +
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map((r) => r)
          .map(
            (r, i) =>
              `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${
                r.id
              }`
          )
          .slice(0, 10)
          .join("\n\n");

      let embed = new EmbedBuilder()

        .setColor(client.mainColor)
        .setDescription(description);

      let msg = await interaction.reply({
        embeds: [embed],
      });
    }
  },
};
