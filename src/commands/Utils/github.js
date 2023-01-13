const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("see some user on github")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("somone to search on github")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const words = interaction.options.getString("username");
    fetch(`https://api.popcat.xyz/github/${words}`)
      .then((res) => res.json())
      .catch({})
      .then(async (json) => {
        const embed = new EmbedBuilder()
          .setTitle(`github info for ${words}`)
          .setURL(json.url)
          .setImage(json.avatar)
          .addFields([
            {
              name: "account_type",
              value: `${json.account_type}`,
              inline: true,
            },
            {
              name: "name",
              value: `${json.name}`,
              inline: true,
            },
            {
              name: "company",
              value: `${json.company}`,
              inline: true,
            },
            {
              name: "blog",
              value: `${json.blog}`,
              inline: true,
            },
            {
              name: "location",
              value: `${json.location}`,
              inline: true,
            },
            {
              name: "email",
              value: `${json.email}`,
              inline: true,
            },
            {
              name: "bio",
              value: `${json.bio}`,
              inline: true,
            },
            {
              name: "twitter",
              value: `${json.twitter}`,
              inline: true,
            },
            {
              name: "public_repos",
              value: `${json.public_repos}`,
              inline: true,
            },
            {
              name: "public_gists",
              value: `${json.public_gists}`,
              inline: true,
            },
            {
              name: "followers",
              value: `${json.followers}`,
              inline: true,
            },
            {
              name: "following",
              value: `${json.following}`,
              inline: true,
            },
            {
              name: "created_at",
              value: `${json.created_at}`,
              inline: true,
            },
            {
              name: "updated_at",
              value: `${json.updated_at}`,
              inline: true,
            },
          ])
          .setColor(client.mainColor)
          .setFooter({
            text: "Made with love by !Toddy#6505",
            iconURL:
              "https://media.discordapp.net/attachments/1049856209546641439/1054751963415318589/blinky.gif",
          })
          .setTimestamp(Date.now());
        await interaction.reply({
          embeds: [embed],
        });
      });
  },
};
