const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("server info"),
  async execute(interaction, client) {
    const verificationLevels = {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "High",
      VERY_HIGH: "Very high",
    };
    const regions = {
      brazil: "brazil",
      europe: "europe",
      india: "india",
      japan: "japan",
      russia: "russia",
      singapore: "singapore",
      southafrica: "southafrica",
      eua: "eua",
    };
    const roles = interaction.guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString());
    const members = interaction.guild.members.cache;
    const channels = interaction.guild.channels.cache;
    const emojis = interaction.guild.emojis.cache;
    const txt = "🗨️";
    const ch = "🎤";
    const mem = "🧑‍🤝‍🧑";
    const online = "🟢";
    const idle = "🟠";
    const dnd = "🔴";
    const offline = "⚫";
    const embed = new EmbedBuilder()
      .setTitle("server info.")
      .setDescription(`server info for ${interaction.guild.name}`)
      .addFields([
        { name: "Name", value: `${interaction.guild.name}`, inline: true },
        { name: "Owner ", value: `<@${interaction.guild.ownerId}>` },
        {
          name: "Region",
          value: `${regions[interaction.guild.region]}`,
          inline: true,
        },
        {
          name: `Boosts`,
          value: `${
            interaction.guild.premiumTier
              ? `Tier : ${interaction.guild.premiumTier}`
              : "None"
          }`,
          inline: true,
        },
        {
          name: `Verification Level `,
          value: `__${
            verificationLevels[interaction.guild.verificationLevel]
          }__`,
          inline: true,
        },
        {
          name: "Time Created",
          value: `${moment(interaction.guild.createdTimestamp).format(
            "LT"
          )} ${moment(interaction.guild.createdTimestamp).format(
            "LL"
          )} [${moment(interaction.guild.createdTimestamp).fromNow()}]`,
        },
      ])
      .addFields([
        {
            name: "Bots",
            value: `${members.filter(members => members.user.bot).size}`,
            inline: true
        },
        { name: 'Boost Count: ', value: `${interaction.guild.premiumSubscriptionCount || '0'}`, inline: true },
      ])
      .addFields([
        { name: 'Roles', value: `${roles.length}`, inline: true },
                { name: 'Emoji Count', value: `${emojis.size}`, inline: true },
      ])
      .setThumbnail(`${interaction.guild.iconURL({ dynamic: true })}`)
      .setFooter({
        text: `Made by !Toddy#6505`,
        iconURL: `${interaction.guild.iconURL({ dynamic: true })}`
      })
      .setColor(0x18e1ee)
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
  },
};
