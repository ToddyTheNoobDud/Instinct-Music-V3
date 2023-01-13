const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("send a random joke"),
  async execute(interaction, client) {
    superagent
      .get("https://some-random-api.ml/others/joke")
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`random joke`)
          .setColor(0x18e1ee)
          .setThumbnail('https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif')
          .setDescription(response.body.joke)
          .setFooter({
            text: `random goofy ahh joke`,
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
