const { EmbedBuilder, version, SlashCommandBuilder } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const si = require("systeminformation");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Shows the status of the bot"),
  async execute(interaction, client) {
    await interaction.deferReply({
        ephemeral: false,
      });
    const duration = moment
      .duration(interaction.client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");
    const cpu = await si.cpu();
    let guildCount = await client.guilds.fetch();
    let userCount = client.guilds.cache.reduce(
      (acc, guild) => acc + guild.memberCount,
      0
    );
    const embed = new EmbedBuilder()
        .setTitle('Status')
        .setDescription(`**• Servers** : ${guildCount.size}
        **• Users** : ${userCount}
        **• Discord.js** : v${version}
        **= SYSTEM =**
        **• Platfrom** : ${os.type}
        **• Uptime** : ${duration}
        **• CPU** :
        > **• Cores** : ${cpu.cores}
        > **• Model** : ${os.cpus()[0].model}
        > **• Speed** : ${os.cpus()[0].speed}
        **• MEMORY** :
                > **• Total Memory** : ${(os.totalmem() / 1024 / 1024).toFixed(
                  2
                )}mb
                > **• Free Memory** : ${(os.freemem() / 1024 / 1024).toFixed(
                  2
                )}mb
                > **• Heap Total** : ${(
                  process.memoryUsage().heapTotal /
                  1024 /
                  1024
                ).toFixed(2)}mb
                > **• Heap Usage** : ${(
                  process.memoryUsage().heapUsed /
                  1024 /
                  1024
                ).toFixed(2)}mb`)
                .setThumbnail('https://cdn.discordapp.com/attachments/912010508826198090/1045857980299616336/unknown.png')
                .setColor(0x18e1ee)
                .setFooter({
                    text: `Made with ❤️ by !Toddy#6505`,
                    iconURL: `https://cdn.discordapp.com/avatars/864242229366095892/240d0a7728f779440fdbbed91f6d7fb2.webp?size=512`
                })
                .setTimestamp(Date.now());
                interaction.followUp({ embeds: [embed] });
  }
};
//coded by !Toddy#6505

