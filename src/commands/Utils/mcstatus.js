const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mcstatus")
    .setDescription("Show a status of a minecraft server")
    .addStringOption((option) =>
      option
        .setName("ip")
        .setDescription("the ip address of the server")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const ip = interaction.options.getString("ip");

    fetch(`https://api.mcsrvstat.us/2/${ip}`)
      .then((res) => res.json())
      .catch({})
      .then(async (json) => {
        if (!json.players)
          return interaction.reply({ error: "cant find the server" });

        const embed = new EmbedBuilder()
          .setTitle(`Mc status for ${ip}`)
          .setDescription("here you go")
          .setThumbnail(
            `https://cdn.discordapp.com/attachments/938949514688081971/1057046208620806214/minecraft-twerk.gif`
          )
          .addFields([
            {
              name: "online",
              value: `${json.online}`,
              inline: true,
            },
            {
              name: "online players",
              value: `${json.players.online}`,
              inline: true,
            },
            {
              name: "max players",
              value: `${json.players.max}`,
              inline: true,
            },
            {
              name: "version",
              value: `${json.version}`,
              inline: true,
            },
            {
              name: "ip",
              value: `${json.ip}`,
              inline: true,
            },
            {
              name: "port",
              value: `${json.port}`,
              inline: true,
            },
            {
              name: "hostname",
              value: `${json.hostname}`,
              inline: true,
            },
            {
              name: "protocol",
              value: `${json.protocol}`,
              inline: true,
            },
          ])
          .setColor(0x18e1ee)
          .setTimestamp(Date.now());
        await interaction.reply({
          embeds: [embed],
        });
      });
  },
};
