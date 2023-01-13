const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
      name: "nextpage",
    },
    async execute (interaction, client) {
      const facts = new ButtonBuilder()
        .setCustomId(`facts`)
        .setLabel(`facts cmds`)
        .setEmoji('🗣️')
        .setStyle(ButtonStyle.Primary)
        const search = new ButtonBuilder()
        .setCustomId(`search`)
        .setLabel(`search cmds`)
        .setEmoji('🔍')
        .setStyle(ButtonStyle.Primary)
        const music = new ButtonBuilder()
        .setCustomId(`music`)
        .setLabel(`musik cmds`)
        .setEmoji('🎵 🎶')
      const gifs = [
        "https://cdn.discordapp.com/attachments/938949514688081971/1055564046482546868/get-real-cat.gif",
        "https://cdn.discordapp.com/attachments/912010508826198090/1045857980299616336/unknown.png",
        "https://cdn.discordapp.com/avatars/1050138724001910794/47dfeb25983920ec9c4a20aef76b0079.webp?size=512"
      ]
      const result = Math.floor(Math.random() * gifs.length);
      const embed = new EmbedBuilder()
      .setTitle('The second page')
      .setDescription(`> **•Command Count: 41**\n\n\n> **•Im Instinct Music V3,**\n **A all in one bot beign coded by !Toddy#6505 and with some amazing features.**\n **Im a bot created in discord.js v14 so it means all my commands are with colors, Embeds.**\n\n> **•My Features:\nModeration Commands\nFun Commands\n Util Commands\nEtc!**`)
      .setFooter({
        text: `Made with ❤️ By !Toddy#6505`,
        iconURL: `https://cdn.discordapp.com/avatars/1050138724001910794/47dfeb25983920ec9c4a20aef76b0079.webp?size=512`
      })
      .setColor(0x18e1ee)
      .setThumbnail(`${gifs[result]}`)
      .setTimestamp(Date.now());
      await interaction.reply({
        components: [new ActionRowBuilder().addComponents(facts, search, music)],
        embeds: [embed],
        ephemeral: true
      });
    }
  }