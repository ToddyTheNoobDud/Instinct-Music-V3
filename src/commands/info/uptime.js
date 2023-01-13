const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Shows the uptime of the bot."),
  async execute(interaction, client) {
    const duration = moment
      .duration(client.uptime)
      .format("`D` [days], `H` [hrs], `m` [mins], `s` [secs]");
    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    const embed = new EmbedBuilder()
      .setTitle(`Uptime`)
      .addFields([
        {
          name: "Uptime",
          value: `**${duration}**`,
          inline: true,
        },
        {
          name: "Up since",
          value: `**<t:${upvalue}>**`,
          inline: false,
        },
      ])
      .setColor(0x18e1ee)
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
  },
};
