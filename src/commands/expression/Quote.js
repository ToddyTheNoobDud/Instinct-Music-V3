const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sentences")
    .setDescription("Some cool sentences"),
  async execute(interaction, client) {
    superagent
      .get("https://some-random-api.ml/animu/quote")
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`sentences`)
          .setColor(0x18e1ee)
          .setThumbnail(`https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif`)
          .setDescription(`from the anime ${response.body.anime}`)
          .addFields([
            {
                name: `sentence`,
                value: `**${response.body.sentence}**`,
                inline: true,
            },
            {
                name: `character`,
                value: `**${response.body.character}**`,
                inline: false,
            },
            {
                name: `anime`,
                value: `**${response.body.anime}**`,
                inline: false,
            },
          ])
          .setURL(response.body.link);
        interaction.reply({
          embeds: [embed],
        });
      });
      return;
    },
    catch (err)
    {
      interaction.reply({
        content: `there was a error`
      })
    }
  }

