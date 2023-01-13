const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lulcat")
    .setDescription("translate into funni lenguage")
    .addStringOption((option) =>
    option
        .setName("text")
        .setDescription("text to translate")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const words = interaction.options.getString('text')
    superagent
      .get(`https://api.popcat.xyz/lulcat?text=${words}`)
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`lulcat translate`)
          .setColor(0x18e1ee)
          .setThumbnail('https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif')
          .setDescription(response.body.text)
          .setFooter({
            text: `Made with Love by !Toddy#6505`,
            iconURL: `https://media.discordapp.net/attachments/799728652686327879/1001185401677037648/caption-5.gif`
          })
        interaction.reply({
          embeds: [embed],
        });
      });
    return;
  },
  catch(err) {
    interaction.reply({
      content: `there was a error`,
    });
  },
};
