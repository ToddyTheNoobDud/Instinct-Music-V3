const math = require("mathjs");
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("math")
    .setDescription("Do some cool calculations stuff")
    .addStringOption((option) =>
      option
        .setName("calc")
        .setDescription("**the expressinons are (+, -, *, :**")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const input = interaction.options.getString("calc");
    const result = math.evaluate(input);

    const embed = new EmbedBuilder()
      .setTitle(`result`)
      .setDescription(`The result is: **${result}**`)
      .setColor(0x18e1ee)
      .addFields([
        {
          name: "question",
          value: `${input}`,
          inline: true,
        },
      ])
      .setTimestamp(Date.now());
    interaction.reply({
      embeds: [embed],
    });
  },
};
