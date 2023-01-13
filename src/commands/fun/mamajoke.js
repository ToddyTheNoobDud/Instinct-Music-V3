const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mama_jokes")
    .setDescription("send random mama jokes"),
  async execute(interaction, client) {
    superagent
      .get("https://api.yomomma.info/")
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`random mama jokes`)
          .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1059470485546606664/mom-joke.gif')
          .setColor(0x18e1ee)
          .setDescription(response.body.joke)
        .setTimestamp(Date.now())
        .setFooter({
            text: `random goofy ahh mama jokes`
        })
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

